"use client";
import useSWR from "swr";
import Image from "next/image";

const fetchSvg = async (src) => {
  const res = await fetch(src, { cache: "no-cache" });
  if (!res.ok) throw new Error(`Failed to fetch SVG: ${res.status} ${res.statusText}`);
  let text = await res.text();
  text = text.replace(/^\s*<\?xml[\s\S]*?\?>\s*/i, "");
  text = text.replace(/<!--[\s\S]*?-->/g, "");

  return text;
};

export default function Icon({ src, width = 24, height = 24, alt, className, style }) {
  const { data: svg, error } = useSWR(src, fetchSvg, { revalidateOnFocus: false });

  if (!svg && !error) {
    return (
      <div
        className={className}
        style={{
          display: "inline-block",
          width,
          height,
          backgroundColor: "transparent",
          ...style
        }}
      />
    );
  };

  if (error || !svg) {
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
  };

  return (
    <figure
      className={className}
      style={{
        display: "inline-block",
        width,
        height,
        lineHeight: 0,
        ...style
      }}
      role={alt ? "img" : undefined}
      aria-label={alt || undefined}
      dangerouslySetInnerHTML={{
        __html: svg.replace(
          /<svg([^>]*)>/,
          "<svg$1 style=\"width:100%;height:100%;display:block;\">"
        )
      }}
    />
  );
};