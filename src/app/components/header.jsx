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
        <div>
          <a>Kontakt</a>
        </div>
        <div>
          <a>O mnie</a>
        </div>
        <div>
          <a>Prace</a>
        </div>
      </nav>
    </header>
  );
};