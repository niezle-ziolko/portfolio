import 'public/css/laptop.css';

import Avatar from 'public/icons/avatars';

export default function Laptop() {
  return(
    <div className='laptop'>
      <div className='screen'>
        <div className='header' />
        <Avatar />
      </div>
      <div className='keyboard' />
    </div>
  );
};