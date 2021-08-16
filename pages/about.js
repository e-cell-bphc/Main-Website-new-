import Head from "next/head";
// import Image from 'next/dist/client/image';
// import Navbar from '../components/Navbar';
// import address from '../assets/images/address.png';
// import phone from '../assets/images/phone.png';
// import email from '../assets/images/email.png';
// import globe from '../assets/images/globe.png';
import About from "../components/about_us/aboutuspara";
import style from "../styles/AboutUs/aboutus.module.css";
import Aboutus from "../components/about_us/aboutuscards";
// import animation from "../styles/AboutUs/stars.module.css"

// import test_carousel from '../components/test_carousel';

export default function aboutUs() {
  return (
    <>
      <Head>
        <title>About Us | E-Cell BPHC</title>
      </Head>
      <div className={style.container}>
        <About />
        <Aboutus />
      </div>
    </>
  );
}
