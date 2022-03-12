import React from "react";
import logoInsta from "../../assets/instagram-64.png";
import lofoFb from "../../assets/facebook-64.png";
import { HeaderData } from "../../constants/constants";
import { LanguageContext } from "../Home/LanguageContext";
import "./header.scss";

const NavLink = (props) => {
  return (
    <div className="link-wrapper">
      <li>
        <a className="link hover-1" href={props.url} {...props}>
          {props.children}
        </a>
      </li>
    </div>
  );
};

const Header = (props) => {
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
    <div
      className={`header-container ${
        props.showBackground ? "nav-black" : "nav-transparent"
      }`}
    >
      <header className="header">
        <img
          className="logo-cp rotating"
          src="https://i.postimg.cc/dQNGXKFn/logoCP.png"
          alt="logo-chateau-perche"
          title="logo-chateau-perche"
        />
        <ul className="nav-links">
          <LanguageContext.Consumer>
            {({ language }) => {
              return HeaderData[language].map((link, index) => (
                <NavLink key={index} url={link.url}>
                  {link.title}
                </NavLink>
              ));
            }}
          </LanguageContext.Consumer>
        </ul>
        <div className="social-icons-container">
          <LanguageContext.Consumer>
            {({ language, setLanguage }) => {
              return (
                <button
                  className={`lang-button ${language === "en" ? "fr" : "en"}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setLanguage(language === "en" ? "fr" : "en");
                  }}
                ></button>
              );
            }}
          </LanguageContext.Consumer>
          {socials.map((social) => (
            <SocialIcon href={social.href} key={social.src} src={social.src} />
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
