import React from "react";
import useSWR from "swr";
import Image from "next/image";

// Funkcja fetchująca SVG
const fetchSvg = async (src) => {
  const res = await fetch(src, { cache: "force-cache" });
  if (!res.ok) throw new Error(`Failed to fetch SVG: ${res.status} ${res.statusText}`);
  let text = await res.text();
  text = text.replace(/^\s*<\?xml[\s\S]*?\?>\s*/i, ""); // usuwa deklarację XML
  text = text.replace(/<!--[\s\S]*?-->/g, ""); // usuwa komentarze
  return text;
};

const Icon = ({ src, width = 24, height = 24, alt, className, style }) => {
  const { data: svg, error } = useSWR(src, fetchSvg, { revalidateOnFocus: false });

  // fallback przy błędzie lub jeszcze niezaładowanym SVG
  if (!svg || error) {
    return (
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        className={className}
        style={style}
        loading="lazy"
      />
    );
  }

  // SVG załadowane
  return (
    <span
      className={className}
      style={{
        display: "inline-block",
        width,
        height,
        lineHeight: 0,
        ...style,
      }}
      role={alt ? "img" : undefined}
      aria-label={alt || undefined}
      dangerouslySetInnerHTML={{
        __html: svg.replace(
          /<svg([^>]*)>/,
          "<svg$1 style=\"width:100%;height:100%;display:block;\">"
        ),
      }}
    />
  );
};

export default Icon;
