import Avatar from 'public/icons/avatars';

export default function Hello() {
  return (
    <section className='hello'>
      <div className='box' style={{ backgroundColor: '#0d0d0d' }}>
        <div style={{ paddingInline: '100px' }}>
          <h1>Siemanko,<br></br>nazywam się <span>Norman!</span></h1>
          <p>Jestem kreatywnym web deweloperem / Wordpress deweloprem, który chętnie zajmie się realizacją Twojego projektu.</p>
        </div>
      </div>
      <div className='box'>
        <Avatar />
      </div>
    </section>
  );
};