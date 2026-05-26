import React, { useId, useState, useEffect, useRef } from "react";

export const HtmlModeRender = ({
  htmlCode,
  isEditing,
}: {
  htmlCode?: string;
  isEditing: boolean;
}) => {
  const id = useId().replace(/:/g, "");
  const [iframeHeight, setIframeHeight] = useState("100%");
  const divRef = useRef<HTMLDivElement>(null);

  // Listen to resize messages from the sandboxed iframe (only used in edit mode)
  useEffect(() => {
    if (!isEditing) return;

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
  }, [id, isEditing]);

  // Production-only script execution effect
  useEffect(() => {
    if (isEditing || !divRef.current || !htmlCode) return;

    // Extract and run scripts in injected HTML
    const scripts = divRef.current.querySelectorAll("script");
    scripts.forEach((script) => {
      const newScript = document.createElement("script");
      Array.from(script.attributes).forEach((attr) =>
        newScript.setAttribute(attr.name, attr.value)
      );
      newScript.appendChild(document.createTextNode(script.innerHTML));
      script.parentNode?.replaceChild(newScript, script);
    });
  }, [htmlCode, isEditing]);

  if (!htmlCode) {
    return (
      <div style={{ padding: 48, textAlign: "center", color: "#666" }}>
        Belum ada kode HTML yang ditempel.
      </div>
    );
  }

  if (isEditing) {
    const resizeScript = `
      <script>
        function sendHeight() {
          const height = document.documentElement.scrollHeight || document.body.scrollHeight;
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
          sandbox="allow-scripts"
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
  }

  // Production/Interactive Preview: Render HTML directly to DOM
  return (
    <div
      ref={divRef}
      dangerouslySetInnerHTML={{ __html: htmlCode }}
      style={{ width: "100%" }}
    />
  );
};
