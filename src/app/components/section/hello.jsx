import Image from "next/image";

export default function Hello() {
  return (
    <section className='hello'>
      <div className='left'>
      
      </div>
      <div className='right'>
        <Image src='/memoji.webp' width={150} height={180} quality={100} alt="memoji" />
      </div>
    </section>
  );
};