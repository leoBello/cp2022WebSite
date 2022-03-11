import React from "react";
import logoInsta from "../../assets/instagram-64.png";
import lofoFb from "../../assets/facebook-64.png";
import "./header.scss";



const NavLink = (props) => {
  return (
    <div className="link-wrapper">
      <li>
        <a className="link hover-1" href={props.href} {...props}>
          {props.children}
        </a>
      </li>
    </div>
  );
};

const Header = (props) => {
  const navLinks = ["Billetterie" ,"Bénévolat", "FAQ", "Contact"];

  const socials = [
    {
      href: "https://www.instagram.com/chateauperchefestival/?hl=fr",
      src: logoInsta,
    },
    {
      href: "https://www.facebook.com/chateauperchefestival/",
      src: lofoFb,
    },
  ];

  

  return (
    <div className={`header-container ${props.showBackground ? 'nav-black' : 'nav-transparent'}`}>
      <header className="header">
        <img
          className="logo-cp rotating"
          src="https://i.postimg.cc/dQNGXKFn/logoCP.png"
          alt="logo-chateau-perche"
          title="logo-chateau-perche"
        />
        <ul className="nav-links">
          {navLinks.map((link) => (
            <NavLink href={`#${link.toLocaleLowerCase()}`} key={link}>
              {link}
            </NavLink>
          ))}
        </ul>
        <div className="social-icons-container">
          {socials.map((social) => (
            <SocialIcon
              href={social.href}
              key={social.src}
              src={social.src}
            />
          ))}
        </div>
      </header>
    </div>
  );
};

const SocialIcon = (props) => {
  return (
    <a href={props.href} target="_blank" rel="noreferrer">
     
        <img className="social-logo" src={props.src} alt={props.alt} />
     
    </a>
  );
};

export { Header, NavLink, SocialIcon };
