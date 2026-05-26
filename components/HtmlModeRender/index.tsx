import React, { useId, useState, useEffect } from "react";

export const HtmlModeRender = ({
  htmlCode,
  isEditing,
}: {
  htmlCode?: string;
  isEditing: boolean;
}) => {
  const id = useId().replace(/:/g, "");
  const [iframeHeight, setIframeHeight] = useState("100vh");

  // Listen to resize messages from the sandboxed iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (
        event.data &&
        event.data.type === "resize-iframe" &&
        event.data.id === id
      ) {
        setIframeHeight(`${event.data.height}px`);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [id]);

  if (!htmlCode) {
    return (
      <div style={{ padding: 48, textAlign: "center", color: "#666" }}>
        Belum ada kode HTML yang ditempel.
      </div>
    );
  }

  const resizeScript = `
    <script>
      function sendHeight() {
        const body = document.body;
        // calculate content height safely, avoiding clientHeight/viewport height which prevents shrinking
        const height = Math.max(body.scrollHeight, body.offsetHeight);
        window.parent.postMessage({ type: 'resize-iframe', id: '${id}', height: height }, '*');
      }
      window.addEventListener('load', sendHeight);
      window.addEventListener('resize', sendHeight);
      
      if (window.ResizeObserver) {
        new ResizeObserver(sendHeight).observe(document.body);
      } else {
        setInterval(sendHeight, 1000);
      }
    </script>
  `;

  const needsTailwind =
    htmlCode.includes("cdn.tailwindcss.com") ||
    htmlCode.includes("tailwindcss") ||
    /\b(bg-|text-|p[xy]?[-0-9]|m[xy]?[-0-9]|flex|grid|border-|rounded-|shadow-|justify-|items-|gap-|relative|absolute|hidden|w-|h-|leading-|tracking-|font-|transition|duration-|ease-|hover:|focus:|sm:|md:|lg:|xl:)/.test(
      htmlCode
    );

  const isStandalone =
    htmlCode.includes("<html") ||
    htmlCode.includes("<!DOCTYPE") ||
    htmlCode.includes("<body") ||
    htmlCode.includes("<head>");

  let srcDoc = "";
  if (isStandalone) {
    let processed = htmlCode;
    if (processed.includes("</body>")) {
      processed = processed.replace("</body>", `${resizeScript}</body>`);
    } else {
      processed = processed + resizeScript;
    }

    if (
      needsTailwind &&
      !processed.includes("cdn.tailwindcss.com") &&
      !processed.includes("tailwindcss")
    ) {
      if (processed.includes("</head>")) {
        processed = processed.replace(
          "</head>",
          `<script src="https://cdn.tailwindcss.com"></script></head>`
        );
      } else if (processed.includes("<head>")) {
        processed = processed.replace(
          "<head>",
          `<head><script src="https://cdn.tailwindcss.com"></script>`
        );
      } else {
        processed =
          `<script src="https://cdn.tailwindcss.com"></script>` + processed;
      }
    }
    srcDoc = processed;
  } else {
    srcDoc = `
      <!DOCTYPE html>
      <html>
        <head>
          ${
            needsTailwind
              ? `<script src="https://cdn.tailwindcss.com"></script>`
              : ""
          }
          <style>
            *, *::before, *::after { box-sizing: border-box; }
            body {
              margin: 0;
              padding: 0;
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            }
            img, iframe, video {
              max-width: 100%;
            }
          </style>
        </head>
        <body>
          ${htmlCode}
          ${resizeScript}
        </body>
      </html>
    `;
  }

  return (
    <div style={{ width: "100%" }}>
      <iframe
        srcDoc={srcDoc}
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        title="Html Mode Sandboxed Canvas"
        loading="lazy"
        style={{
          height: iframeHeight,
          border: "none",
          width: "100%",
          display: "block",
          background: "transparent",
        }}
      />
    </div>
  );
};
