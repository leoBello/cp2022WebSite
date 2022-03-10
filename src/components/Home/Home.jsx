import { useEffect, useState } from "react";
import { CastleSvg } from "../Castle/Castle";
import { Header } from "../Header/Header";
import { Section, SectionText } from "../Section/Section";
import { Hero } from "../Hero/Hero";
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
      <Header showBackground={show}/>
      <Hero
        title="Poésie futur Orient"
        text="Château Perché 2022"
        showScrollDown={show}
      />
      <section className="infos-section">
        <Section title="Précèpte">
          <SectionText text="nos préceptes blabjdjdi dzdzdz dzdzdzdd"/>
        </Section>
      </section>
      {/* <CastleSvg /> */}
    </div>
  );
};

export { Home };
