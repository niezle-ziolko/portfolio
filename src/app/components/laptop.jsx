import Icon from "lib/icon";

export default function Laptop() {
  const size = 250;

  return (
    <div className="max-w-x text-center">
      <div className="pb-8 md:py-8">
        <p className="p-0 text-white text-lg/6 md:text-3xl/8">Siemanko! </p>
        <p className="p-0 font-bold text-4xl/12 md:text-6xl/20">
          <span className="text-transparent bg-clip-text bg-[linear-gradient(97deg,#0096ff,#bb64ff_42%,#f2416b_74%,#eb7500)]">
            jestem Norman
          </span>
           👋
        </p>
      </div>
      <div className="grid justify-center scale-100">

        {/* Screen */}
        <div className="
            u1 relative mx-auto
            h-80 w-45 p-2 pb-6
            rounded-3xl

            bg-[linear-gradient(97deg,#0096ff,#bb64ff_42%,#f2416b_74%,#eb7500)]
            shadow-[inset_0_0_0_2px_var(--color-g-200),inset_0_0_0_10px_#000]

            [transform-style:preserve-3d] [transform-origin:50%_100%]
            [perspective:475rem]

            after:content-['']
            after:absolute after:bottom-[2px] after:left-[2px]
            after:h-6 after:w-128
            after:rounded-b-3xl
            after:bg-[linear-gradient(to_bottom,var(--color-b-300),#0d0d0d)]
            after:hidden

            md:w-130
            md:animate-open
            md:after:block
            md:[transform:perspective(475rem)_rotateX(-88.5deg)]
          ">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 h-3 w-18 rounded-b-md bg-black md:w-25" />

          {/* Avatar */}
          <Icon
            width={size}
            height={size}
            alt="Avatar"
            src="/avatar.svg"
            className="opacity-0 animate-avatar md:opacity-100 md:animate-none"
          />

          {/* Buttons */}
          <div className="u13 top-13 left-[-2px]" />
          <div className="u13 top-23 left-[-2px]" />
          <div className="u13 h-13 top-16 right-[-2px] animate-button" />
        </div>

        {/* Keyboard */}
        <div
          className="
            hidden relative z-[9] -mt-2
            h-6 w-152
            rounded-b-xl
            border border-t-0 border-x-[2px] border-b-0 border-[#a0a3a7]

            bg-[radial-gradient(circle_at_center,var(--color-g-100)_85%,#a9abac_100%)]
            shadow-[inset_0_-2px_8px_0_#6c7074]

            after:content-['']
            after:absolute after:top-0 after:left-1/2
            after:-ml-15
            after:h-2 after:w-30
            after:rounded-b-xl
            after:bg-(var(--color-g-100))
            after:shadow-[inset_0_0_4px_2px_#babdbf]

            before:content-['']
            before:absolute before:bottom-[-2px] before:left-1/2
            before:-ml-2
            before:h-[2px] before:w-10
            before:rounded-b-sm
            before:shadow-[-270px_0_var(--color-b-300),250px_0_var(--color-b-300)]

            md:block
          " />
      </div>

      {/* Paragraph */}
      <p className="py-5 text-lg/6 md:text-2xl/8 text-white [filter:drop-shadow(0_0_1px_#fff)_drop-shadow(0_0_10px_#fff)]">Tworzę nowoczesne aplikacje webowe i strony oparte o WordPress.</p>
      
    </div>
  );
};