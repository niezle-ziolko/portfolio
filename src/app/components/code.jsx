export default function Code() {
  return (
    <div className='card'>
      <div className='top'>
        <div className='dots'>
          <div className='dot dot-1'></div>
          <div className='dot dot-2'></div>
          <div className='dot dot-3'></div>
        </div>
      </div>
      <div className='bottom'>
        <span className='gray'>{`<!`}</span>
        <span className='blue'>DOCTYPE </span>
        <span className='blues'>html</span>
        <span className='gray'>{`>`}</span><br />
        <span className='gray'>{`<`}</span>
        <span className='blue'>html </span>
        <span className='blues'>lang</span>
        <span className='white'>=</span>
        <span className='brown'>&quot;pl&quot;</span>
        <span className='gray'>{`>`}</span><br />
        <span className='gray' style={{ paddingLeft: '15px' }}>{`<`}</span>
        <span className='blue'>body</span>
        <span className='gray'>{`>`}</span><br />
        <span className='gray' style={{ paddingLeft: '30px' }}>{`<`}</span>
        <span className='blue'>h1</span>
        <span className='gray'>{`>`}</span>
        <span className='white'>Moje Prace</span>
        <span className='gray'>{`</`}</span>
        <span className='blue'>h1</span>
        <span className='gray'>{`>`}</span><br />
        <span className='gray' style={{ paddingLeft: '15px' }}>{`</`}</span>
        <span className='blue'>body</span>
        <span className='gray'>{`>`}</span><br />
        <span className='gray'>{`</`}</span>
        <span className='blue'>html</span>
        <span className='gray'>{`>`}</span><br />
      </div>  
    </div>
  );
};