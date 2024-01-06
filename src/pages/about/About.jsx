import style from "./About.module.css";
import aboutImg from "../../assets/about.png";
import { useNavigate } from "react-router-dom";

const About = () => {

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/vans')
  }

  return (
    <section className={style.about_container}>
      <img src={aboutImg} alt="stargazing on van" />
      <div className={style.content}>
        <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className={style.add_container}>
          <h3>Your destination is waiting. Your van is ready.</h3>
          <button className={style.ad_btn} onClick={handleNavigate}>Explore our vans</button>
        </div>
      </div>
    </section>
  );
};

export default About;
