import about from "../../styles/AboutUs/aboutuspara.module.css";
export default function About() {
  return (
    <section className={about.box}>
      <h2 className={about.head}> About Us</h2>
      <p className={about.info}>
        The Entrepreneurship Cell is one of the largest and active, student-run
        organizations of BITS Pilani Hyderabad Campus that aims at igniting the
        entrepreneurial spirit in young minds by providing innovators with a
        platform to jump from ‘Idea’ to ‘Product’.
      </p>
    </section>
  );
}
