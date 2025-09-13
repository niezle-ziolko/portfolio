import NavMenu from "./nav-menu";

export default function Header() {
  return (
    <header className="z-50 h-11 fixed top-0 left-0 w-full border-b border-b-header-keyline">
      <div className="mx-0 my-auto bg-header/90 backdrop-blur-md flex justify-center">
        <NavMenu />
      </div>
    </header>
  );
};