import PhoneIcon from 'public/icons/phone';
import MailIcon from 'public/icons/mail';
import GitHubIcon from 'public/icons/github';

export default function Header() {
  return (
    <header>
      <div className='icon'>
        <PhoneIcon />
        <MailIcon />
        <GitHubIcon />
      </div>
      <nav>
        <div className='item'>
          <a>Kontakt</a>
        </div>
        <div className='item'>
          <a>O mnie</a>
        </div>
        <div className='item'>
          <a>Prace</a>
        </div>
      </nav>
    </header>
  );
};