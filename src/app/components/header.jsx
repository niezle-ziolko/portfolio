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

  const handleAboutClick = () => {
    const aboutSection = document.getElementById('about');

    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    };
  };

  const handleCertyficatesClick = () => {
    const examplesSection = document.getElementById('certyficates');

    if (examplesSection) {
      examplesSection.scrollIntoView({ behavior: 'smooth' });
    };
  };

  const handleExamplesClick = () => {
    const examplesSection = document.getElementById('examples');

    if (examplesSection) {
      examplesSection.scrollIntoView({ behavior: 'smooth' });
    };
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    };
  };

  return (
    <header>
      <nav>
        <div className='item'>
          <button onClick={handleAboutClick} style={{ cursor: 'pointer' }}>O mnie</button>
        </div>
        <div className='item'>
          <button onClick={handleCertyficatesClick} style={{ cursor: 'pointer' }}>Dyplomy</button>
        </div>
        <div className='item'>
          <button onClick={handleExamplesClick} style={{ cursor: 'pointer' }}>Projekty</button>
        </div>
        <div className='item'>
          <button onClick={handleContactClick} style={{ cursor: 'pointer' }}>Kontakt</button>
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