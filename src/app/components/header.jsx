import dynamic from "next/dynamic";

const NavMenu = dynamic(() => import("./nav-menu"), { ssr: true });

export default function Header() {
  return (
    <header className="z-50 h-11 fixed top-0 left-0 w-full">
      <div className="flex mx-0 my-auto bg-header/90 justify-center backdrop-blur-md">
        <NavMenu />
      </div>

      <hr className="opacity-20 text-font-secondary" />
    </header>
  );
};