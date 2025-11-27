"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Icon from "lib/icon";

export default function Breadcramps() {
  const avatar = 16;
  const arrow = 14;
  const pathname = usePathname();
  const lastSegment = pathname.split("/").filter(Boolean).pop();

  const label = lastSegment ?.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());

  return (
    <div className="flex items-center gap-2">

      {/* Logo */}
      <Link href="/" alt="Logo">
        <Icon
          width={avatar}
          height={avatar}
          alt="Avatar"
          src="/assets/icons/zQJna22Ox9.svg"
        />
      </Link>

      {/* Breadcramp */}
      {label && (
        <>
          <Icon
            width={arrow}
            height={arrow}
            alt="Breadcrumb Icon"
            src="/assets/icons/XyNeAHolcY.svg"
            className="stroke-font-footer -rotate-90"
          />

          <Link
            rel="noopener noreferrer"
            href={`${pathname}`}
            className="
              text-sm
              text-font-footer

              hover:underline
              focus:underline
              active:underline
            "
          >
            {label}
          </Link>
        </>
      )}
    </div>
  );
};