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
  const [tailwindUrl, setTailwindUrl] = useState("https://cdn.tailwindcss.com");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTailwindUrl(`${window.location.origin}/tailwind.js`);
    }
  }, []);

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
        try {
          window.parent.postMessage({ type: 'resize-iframe', id: '${id}', height: height }, '*');
          if (window.top && window.top !== window.parent) {
            window.top.postMessage({ type: 'resize-iframe', id: '${id}', height: height }, '*');
          }
        } catch (e) {
          // Ignore
        }
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
    htmlCode.includes("tailwind.js") ||
    htmlCode.includes("tailwindcss") ||
    /\b(bg-|text-|p[xy]?[-0-9]|m[xy]?[-0-9]|flex|grid|border-|rounded-|shadow-|justify-|items-|gap-|relative|absolute|hidden|w-|h-|leading-|tracking-|font-|transition|duration-|ease-|hover:|focus:|sm:|md:|lg:|xl:)/.test(
      htmlCode
    );

  const isStandalone =
    htmlCode.includes("<html") ||
    htmlCode.includes("<!DOCTYPE") ||
    htmlCode.includes("<body") ||
    htmlCode.includes("<head>");

  const scrollbarHideStyle = `
    <style>
      html, body {
        overflow: hidden !important;
        -ms-overflow-style: none !important;
        scrollbar-width: none !important;
      }
      ::-webkit-scrollbar {
        display: none !important;
      }
    </style>
  `;

  let srcDoc = "";
  if (isStandalone) {
    let processed = htmlCode;
    if (processed.includes("</body>")) {
      processed = processed.replace("</body>", `${resizeScript}${scrollbarHideStyle}</body>`);
    } else {
      processed = processed + resizeScript + scrollbarHideStyle;
    }

    if (
      needsTailwind &&
      !processed.includes("cdn.tailwindcss.com") &&
      !processed.includes("tailwind.js") &&
      !processed.includes("tailwindcss")
    ) {
      if (processed.includes("</head>")) {
        processed = processed.replace(
          "</head>",
          `<script src="${tailwindUrl}"></script></head>`
        );
      } else if (processed.includes("<head>")) {
        processed = processed.replace(
          "<head>",
          `<head><script src="${tailwindUrl}"></script>`
        );
      } else {
        processed =
          `<script src="${tailwindUrl}"></script>` + processed;
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
              ? `<script src="${tailwindUrl}"></script>`
              : ""
          }
          <style>
            *, *::before, *::after { box-sizing: border-box; }
            html, body {
              margin: 0;
              padding: 0;
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
              overflow: hidden !important;
              -ms-overflow-style: none !important;
              scrollbar-width: none !important;
            }
            ::-webkit-scrollbar {
              display: none !important;
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
        scrolling="no"
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
