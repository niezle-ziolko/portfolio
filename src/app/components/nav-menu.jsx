export default function NavMenu() {
  return(
    <div className="flex justify-center items-center">
      <label className="relative cursor-pointer hover:text-white">
        <input type="checkbox" id="menu" className="absolute opacity-0 z-20 peer" />
        <span className="u11 peer-checked:translate-y-[4.5px] peer-checked:rotate-45 " />
        <span className="u11 peer-checked:translate-y-[-4px] peer-checked:-rotate-45" />
      </label>
    </div>
  );
};