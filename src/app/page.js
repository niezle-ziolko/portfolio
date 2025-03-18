import Paper from 'components/paper';
import Laptop from 'components/laptop';
import Examples from 'components/section/examples';
import Contact from 'components/section/contact';

export default function Home() {
  return (
    <>
      <section>
        <div className='box' id='box'>
          <div style={{ paddingInline: '100px' }}>
            <h1>Siemanko,<br></br>nazywam się <span>Norman!</span></h1>
            <p>Jestem kreatywnym web deweloperem / Wordpress deweloprem, który chętnie zajmie się realizacją Twojego projektu.</p>
          </div>
        </div>
        <div className='box'>
          <Laptop />
        </div>
      </section>
      <section id='about'>
        <div className='box'>
          <Paper />
        </div>
        <div className='box'>

        </div>
      </section>
      <Examples />
      <Contact />
    </>
  );
};