import { useState } from 'react';

export default function Files() {
  const [isActive, setIsActive] = useState(false);
  const [delayedActive, setDelayedActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    setTimeout(() => {
      setDelayedActive(!isActive);
    }, 1000);
  };

  return (
    <div>
      <div className='files'>
        {[...Array(6)].map((_, index) => (
          <div key={index} className='file' id={delayedActive ? 'active' : 'hidden'}>
            <div className='body' />
            <div className='fold' />
            <div className='line'>
              {[...Array(6)].map((_, i) => (
                <hr key={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className='folder'>
        <button onClick={handleClick}>
          <div className='fold' />
          <div className='body' />
        </button>
      </div>
      <iframe src="document.pdf" width="100%" height="300px"></iframe>
    </div>
  );
};