'use client';
import PhoneIcon from 'public/icons/phone';
import MailIcon from 'public/icons/mail';
import GitHubIcon from 'public/icons/github';

export default function Header() {
  const handlePhoneClick = () => {
    window.location.href = 'tel:+48733196208';
  };

  const handleMailClick = () => {
    window.location.href = 'mailto:wgwcompany@duck.com';
  };

  const handleGithubClick = () => {
    window.location.href = 'https://github.com/niezle-ziolko';
  };

  return (
    <header>
      <nav>
        <div className='item'>
          <a>O mnie</a>
        </div>
        <div className='item'>
          <a>Prace</a>
        </div>
        <div className='item'>
          <a>Kontakt</a>
        </div>
      </nav>
      <div className='icon'>
        <div onClick={handlePhoneClick} style={{ cursor: 'pointer' }}>
          <PhoneIcon />
        </div>
        <div onClick={handleMailClick} style={{ cursor: 'pointer' }}>
          <MailIcon />
        </div>
        <div onClick={handleGithubClick} style={{ cursor: 'pointer' }}>
          <GitHubIcon />
        </div>
      </div>
    </header>
  );
};