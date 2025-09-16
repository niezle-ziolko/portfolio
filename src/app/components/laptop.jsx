import Icon from "lib/icon";

export default function Laptop() {
  const size = 250;

  return (
    <div className="grid justify-center scale-[0.8]">
      {/* Screen */}
      <div className="relative mx-auto flex h-80 w-130 items-center justify-center rounded-3xl
          bg-[linear-gradient(15deg,#3f51b1_0%,#5a55ae_13%,#7b5fac_25%,#8f6aae_38%,#a86aa4_50%,#cc6b8e_62%,#f18271_75%,#f3a469_87%,#f7c978_100%)]
          p-2 pb-6 animate-open shadow-[inset_0_0_0_2px_#c8cacb,inset_0_0_0_10px_#000] [transform-style:preserve-3d] [transform-origin:50%_100%] [perspective:1900px] [transform:perspective(1900px)_rotateX(-88.5deg)]
          after:content-[''] after:absolute after:bottom-[2px] after:left-[2px] after:w-[514px] after:h-[24px] after:rounded-b-[20px] after:bg-[linear-gradient(to_bottom,#272727,#0d0d0d)]">
        {/* Pasek nad ekranem */}
        <div className="absolute top-[10px] left-1/2 h-[12px] w-[100px] -translate-x-1/2 rounded-b-[6px] bg-black" />

        {/* Avatar */}
        <Icon width={size} height={size} alt="Avatar" src="/avatar.svg" />
      </div>

      {/* Klawiatura */}
      <div
        className="
          relative z-[9] mt-[-10px] h-[24px] w-[620px]
          rounded-b-[12px]
          border border-t-0 border-x-[2px] border-b-0 border-[#a0a3a7]
          bg-[radial-gradient(circle_at_center,#e2e3e4_85%,#a9abac_100%)]
          shadow-[inset_0_-2px_8px_0_#6c7074]
          after:content-['']
          after:absolute
          after:top-0
          after:left-1/2
          after:ml-[-60px]
          after:h-[10px]
          after:w-[120px]
          after:rounded-b-[10px]
          after:bg-[#e2e3e4]
          after:shadow-[inset_0_0_4px_2px_#babdbf]
          before:content-['']
          before:absolute
          before:bottom-[-2px]
          before:left-1/2
          before:ml-[-10px]
          before:h-[2px]
          before:w-[40px]
          before:rounded-b-[3px]
          before:shadow-[-270px_0_#272727,250px_0_#272727]
        "
      />
    </div>
  );
}
