import Link from "next/link";

export default function Footer() {
  return(
    <footer className="u1">
      <div className="u22 px-3 py-6">
        <hr className="mb-2 text-font-footer" />

        <hr className="mb-2 mt-2 text-font-footer" />

        <span className="text-sm text-font-footer">Copyright © 2025</span>

        <ul className="m-0 gap-0 text-sm flex">
          <li className="w-auto">
            <Link
              rel="noopener noreferrer"
              href="/polityka-prywatnosci"
              className="
                text-font-footer

                hover:underline
                focus:underline
                active:underline
              "
            >
              Polityka prywatnosci
            </Link>
          </li>
          <li
            className="
              u1
              w-auto

              before:content-['']
              before:inline-block
              before:w-px
              before:h-3
              before:bg-font-footer
              before:mx-2
            "
          >
            <Link
              rel="noopener noreferrer"
              href="/kontakt"
              className="
                text-font-footer
                
                hover:underline
                focus:underline
                active:underline
              "
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};