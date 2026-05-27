import React, { useState } from "react";
import { useAppStore } from "@/store";
import { AlertCircle, CheckCircle2, Copy, Check, LayoutGrid, Code } from "lucide-react";
import getClassNameFactory from "@/lib/get-class-name-factory";
import styles from "./styles.module.css";

const getClassName = getClassNameFactory("CodePanel", styles);

export const CodePanel = () => {
  const [copied, setCopied] = useState(false);
  const [promptType, setPromptType] = useState<"with-header" | "no-header">("with-header");

  const dispatch = useAppStore((s) => s.dispatch);
  const root = useAppStore((s) => s.state.data.root);
  
  const rootProps = root?.props || root;
  const currentMode = rootProps?.mode || "blocks";

  const aiPromptWithHeader = `Buatkan desain landing page lengkap dan premium dengan pendekatan mobile-first, modern, rapi, dan compact (padat & elegan) menggunakan HTML murni dan utilitas kelas Tailwind CSS. Halaman harus memuat struktur lengkap seperti Header/Navigation, Hero Section, Features/Layanan, Testimoni, Call-to-Action (CTA), dan Footer.

Ketentuan penulisan kode:
1. STRUKTUR BERSIH: Gunakan elemen semantik HTML5 seperti <section>, <header>, atau <div> sebagai wrapper utama per seksi. JANGAN sertakan tag <html>, <body>, <head>, atau <script>.
2. MOBILE-FIRST & RESPONSIF: Desain harus sepenuhnya responsif. Mulai dari layout ponsel (default), lalu gunakan breakpoint (sm:, md:, lg:, xl:) secara terstruktur untuk layar yang lebih besar.
3. ESTETIKA MODERN & PREMIUM: Gunakan skema warna harmonis (misal: warna gelap bernuansa glassmorphism, gradasi halus, border tipis semi-transparan, efek hover mikro interaktif).
4. COMPACT & EFISIEN: Hindari padding/margin berlebih yang membuat halaman kosong melompong. Pastikan konten padat, terbaca dengan baik, dan memiliki rasio grid/flexbox yang rapi.
5. BEBAS JAVASCRIPT: Seluruh interaktivitas dasar (seperti hover, focus, state) harus ditangani murni menggunakan utilitas kelas CSS Tailwind.`;

  const aiPromptNoHeader = `Buatkan desain landing page lengkap dan premium TANPA bagian Header/Navigation dengan pendekatan mobile-first, modern, rapi, dan compact (padat & elegan) menggunakan HTML murni dan utilitas kelas Tailwind CSS. Halaman harus memuat struktur lengkap seperti Hero Section, Features/Layanan, Testimoni, Call-to-Action (CTA), dan Footer (tanpa memuat menu navigasi atau header di bagian atas).

Ketentuan penulisan kode:
1. STRUKTUR BERSIH: Gunakan elemen semantik HTML5 seperti <section>, <header>, atau <div> sebagai wrapper utama per seksi. JANGAN sertakan tag <html>, <body>, <head>, atau <script>.
2. TANPA HEADER: Pastikan sama sekali tidak ada bagian Header/Navbar/Navigation menu di bagian atas halaman. Desain harus langsung dimulai dengan Hero Section yang menarik dan berdampak tinggi.
3. MOBILE-FIRST & RESPONSIF: Desain harus sepenuhnya responsif. Mulai dari layout ponsel (default), lalu gunakan breakpoint (sm:, md:, lg:, xl:) secara terstruktur untuk layar yang lebih besar.
4. ESTETIKA MODERN & PREMIUM: Gunakan skema warna harmonis (misal: warna gelap bernuansa glassmorphism, gradasi halus, border tipis semi-transparan, efek hover mikro interaktif).
5. COMPACT & EFISIEN: Hindari padding/margin berlebih yang membuat halaman kosong melompong. Pastikan konten padat, terbaca dengan baik, dan memiliki rasio grid/flexbox yang rapi.
6. BEBAS JAVASCRIPT: Seluruh interaktivitas dasar (seperti hover, focus, state) harus ditangani murni menggunakan utilitas kelas CSS Tailwind.`;

  const handleCopyPrompt = () => {
    const selectedPrompt = promptType === "with-header" ? aiPromptWithHeader : aiPromptNoHeader;
    navigator.clipboard.writeText(selectedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleActivateHtmlMode = () => {
    dispatch({
      type: "setData",
      data: (currentData: any) => {
        return {
          ...currentData,
          content: [],
          root: {
            ...currentData.root,
            props: {
              ...currentData.root?.props,
              mode: "html",
              htmlCode: "",
              htmlViewMode: "code",
            },
          },
        };
      },
    });
  };

  const handleResetToBlocks = () => {
    dispatch({
      type: "setData",
      data: (currentData: any) => {
        return {
          ...currentData,
          content: [],
          root: {
            ...currentData.root,
            props: {
              ...currentData.root?.props,
              mode: "blocks",
              htmlCode: "",
              htmlViewMode: "code",
            },
          },
        };
      },
    });
  };

  return (
    <div className={getClassName()}>
      {currentMode === "html" ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div className={getClassName("title")}>Tempel Kode HTML</div>
          
          <div className="p-3 bg-emerald-950/40 border border-emerald-800/40 rounded-lg">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold mb-3">
              <CheckCircle2 size={14} className="shrink-0" />
              <span>Mode HTML Aktif pada Kanvas</span>
            </div>
            
            <p className="text-[11px] leading-relaxed text-zinc-400 mb-4">
              Gunakan editor kode langsung yang lapang langsung di area kanvas tengah untuk mengedit kode.
            </p>

            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={handleResetToBlocks}
                className="w-full px-3 py-2 text-xs font-bold text-zinc-400 hover:text-white bg-zinc-950/50 border border-zinc-900 hover:border-zinc-800 rounded transition-colors cursor-pointer flex items-center justify-center gap-1.5"
              >
                <LayoutGrid size={13} />
                Matikan Mode HTML (Mode Blok)
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className={getClassName("title")}>Tempel Kode HTML</div>
          
          <div className="mb-4 p-3 bg-zinc-900/60 border border-zinc-800/60 rounded-lg text-[11px] leading-relaxed text-zinc-400">
            Kanvas saat ini menggunakan <strong>Mode Blok Visual</strong>. Klik tombol di bawah untuk beralih ke Mode HTML penuh pada kanvas.
          </div>
          
          <button
            type="button"
            onClick={handleActivateHtmlMode}
            className="w-full px-4 py-2 border border-zinc-800 rounded-md text-xs font-semibold text-zinc-300 bg-zinc-900 hover:bg-zinc-800 hover:text-white transition-colors cursor-pointer flex items-center justify-center gap-1.5 mb-4"
          >
            <Code size={13} />
            Aktifkan Mode HTML
          </button>
        </div>
      )}

      <div className={getClassName("promptSection")}>
        <div className={getClassName("promptHeader")}>
          <div className={getClassName("optionTitle")} style={{ margin: 0 }}>Prompt AI Generator</div>
          <button
            type="button"
            onClick={handleCopyPrompt}
            className={getClassName("copyBtn") + (copied ? ` ${styles["CodePanel-copyBtn--copied"]}` : "")}
          >
            {copied ? (
              <>
                <Check size={11} />
                Tersalin
              </>
            ) : (
              <>
                <Copy size={11} />
                Salin Prompt
              </>
            )}
          </button>
        </div>

        <div className={getClassName("optionsSection")} style={{ marginBottom: 12 }}>
          <div className={getClassName("radioGroup")}>
            <label className={getClassName("radioLabel")}>
              <input
                type="radio"
                name="promptType"
                value="with-header"
                checked={promptType === "with-header"}
                onChange={() => setPromptType("with-header")}
                className={getClassName("radioInput")}
              />
              <span>Dengan Header</span>
            </label>
            <label className={getClassName("radioLabel")}>
              <input
                type="radio"
                name="promptType"
                value="no-header"
                checked={promptType === "no-header"}
                onChange={() => setPromptType("no-header")}
                className={getClassName("radioInput")}
              />
              <span>Tanpa Header</span>
            </label>
          </div>
        </div>

        <div className={getClassName("promptText")}>
          {promptType === "with-header" ? aiPromptWithHeader : aiPromptNoHeader}
        </div>
      </div>
    </div>
  );
};
