import styles from './Footer.module.css';

const links = [
  { label: 'linkedin', href: 'https://www.linkedin.com/in/sanjaysaravanan21' },
  { label: 'square-facebook', href: 'https://www.facebook.com/sanjaysaravanan21' },
  { label: 'instagram', href: 'https://www.instagram.com/sanjaysaravanan_21' },
  { label: 'x-twitter', href: 'https://twitter.com/sanjaysaravan21' },
  { label: 'whatsapp', href: 'https://wa.me/+919790889427' },
]

const Footer = () => {
  return (
    <div
      className={styles.container}
    >
      <div
        className={styles.linksContainer}
      >
        {links.map((link) => (
          <a
            key={link.label}
            className={styles.linkBox}
            href={link.href}
            target='_blank'
          >
            <i className={`fa-brands fa-${link.label}`}></i>
          </a>
        ))}
      </div>
      <p>
        Sanjay Saravanan{' '}
        <i className="fa-regular fa-copyright"></i>{' '}
        {new Date().getFullYear()}
      </p>
    </div>
  )
};

export default Footer;
