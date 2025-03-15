import Image from 'next/image';

export default function Hello() {
  return (
    <section className='hello'>
      <div className='box' style={{ backgroundColor: '#0d0d0d' }}>
        <div style={{ paddingInline: '150px' }}>
          <h1>Siemanko,<br></br>nazywam się <span>Norman!</span></h1>
          <p>Jestem kreatywnym web deweloperem / Wordpress deweloprem, który chętnie zajmie się Twoim projektem.</p>
        </div>
      </div>
      <div className='box'>
        <Image src='/images/bitmoji.webp' width={398} height={398} quality={100} alt='memoji' />
      </div>
    </section>
  );
};