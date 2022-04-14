import "./footer.scss";
import logoInsta from "../../assets/instagram-64.png";
import lofoFb from "../../assets/facebook-64.png";
import lofoSoundCloud from "../../assets/soundcloud.png";


import { SocialIcon } from "../Header/Header";

const Footer = () => {
  const socials = [
    {
      href: "https://www.instagram.com/chateauperchefestival/?hl=fr",
      src: logoInsta,
    },
    {
      href: "https://www.facebook.com/chateauperchefestival/",
      src: lofoFb,
    },
    {
      href: "https://soundcloud.com/perchepolis-label",
      src: lofoSoundCloud,
    },

  ];
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-item logo">
          {" "}
          <img
            className="logo-cp"
            src="https://i.postimg.cc/dQNGXKFn/logoCP.png"
            alt="logo-chateau-perche"
          />
        </div>
        <div className="footer-item  text">
          <p>
            Festival Château Perché 2022
            <br />
            Poésie Futur-Orient
            <br />
            7 - 10 juillet 2022
            <br />
            Château d'Avrilly
            <br />
            <br />
            Organisé par Perchépolis
          </p>
        </div>

        <div className="footer-item social-icons">
          {socials.map((social) => (
            <SocialIcon href={social.href} key={social.src} src={social.src} />
          ))}
        </div>
      </div>
      <div className="footer-copyright">
        <p>© 2022, Château Perché, réalisé par <a href="https://www.malt.fr/profile/leobello?overview=true" target="_blank" rel="noreferrer"><span className="signature">Léo Bello</span></a></p>
      </div>
    </footer>
  );
};

export { Footer };
