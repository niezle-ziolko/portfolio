import { useRef, useEffect } from "react";

export default function Video({ src, ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.src = src;
        observer.disconnect();
      }
    });

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <video ref={ref} {...props}>
      <source src={src.video} type="video/webm" />

      {/* fallback text */}
      Twoje przeglądarki nie obsługuje odtwarzania wideo.
    </video>
  );
};