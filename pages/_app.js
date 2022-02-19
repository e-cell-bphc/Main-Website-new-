import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Navbar1 from "../components/id/navbarID"
import { useState, useEffect } from "react";
import { set } from "date-fns";

function MyApp({ Component, pageProps }) {
  const [nav, setNav] = useState(true);
  const [foot, setFoot] = useState(false);
  useEffect(() => {

    if (process.browser) {
      let params = window.location.pathname;
      console.log(params);


      if (params == "/about" || params == "/" || params == "/competitions" || params == "/bpRegisteration" || params == "/commingsoon" || params == "/esummit" || params == "/peer" || params == "/programs" || params == "/404" || params == "/blog/" || params == "/groundreality" || params == "/beyondprofits" || params == "/startupexpo") {
        setNav(true);
        setFoot(false);
        console.log(nav);
      } else if (
        params == "/id/viewCompany" ||
        params == "/id/paynow" ||
        params == "/id/portal" ||
        params == "/id/profile"
      ) {
        setNav(false);
        setFoot(true);
        console.log(nav);
      }
      else if(params == "/id/paynow") {
        setNav(false);
        setFoot(true);
      }
    }
    console.log(nav);
  }, [])

// console.log(nav + "hello");
  return (
    <>
      <div className= {nav? "oldnav":"Navbar"}>
       {nav ? <Navbar/> : <Navbar1/>}
      </div>
      <div className={nav ? "nav0": 'null'}>
        <Component {...pageProps} />
      </div>
      {foot ? null:<Footer />}
    </>
  );
}

export default MyApp;
