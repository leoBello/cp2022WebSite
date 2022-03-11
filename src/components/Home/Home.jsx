import { useEffect, useState } from "react";
import { Header } from "../Header/Header";
import { Section, SectionPrecepte, SectionText } from "../Section/Section";
import { Hero } from "../Hero/Hero";
import { PreceptesData } from "../../constants/constants";
import { Footer } from "../Footer/Footer";
import "./home.scss";

const Home = () => {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 0) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("sroll", transitionNavBar);
  }, []);

  return (
    <div className="home">
      <Header showBackground={show} />
      <Hero
        title="Poésie Futur-Orient"
        text="Château Perché 2022"
        showScrollDown={show}
      />
      <section className="infos-section">
        <Section title="Nos préceptes">
          <div className="preceptes-container">
            {PreceptesData[0].map((precepte, index) => (
              <SectionPrecepte
                key={index}
                title={precepte.precepte}
                text={precepte.description}
              />
            ))}
          </div>
        </Section>
        <Section title="Billetterie" center>
          <div className="buttons-container billetterie">
            <button className="button">Billetterie</button>
          </div>
        </Section>
        <Section title="Infos Navettes" center>
          <SectionText text="Patiente, nous nous occupons de tout..." />
        </Section>
        <Section title="Bénévolat" center>
          <div className="buttons-container benevoles">
            <button className="button">Bénévoles</button>
            <button className="button">Managers</button>
          </div>
        </Section>
       
        <Section title="Event" center>
          <div className="buttons-container billetterie">
            <button className="button2">See facebook event</button>
          </div>
        </Section>
        <Footer />
      </section>
      {/* <CastleSvg /> */}
    </div>
  );
};

export { Home };
