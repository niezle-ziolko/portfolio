import Image from "next/image";

export default function Home() {
  const size = 1000;

  return (
    <div>
      <Image
        width={size}
        height={size}
        alt="Avatar"
        src="/avatar.svg"
      />
    </div>
  );
};