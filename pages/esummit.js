import Launchpad from "../components/esummit/Launchpad";
import Head from "next/head";
import Cards from "../components/esummit/Launchpad_cards";
import SummitEvents from "../components/esummit/events_esummit";
import Carousel from "../components/esummit/carousel";
import { carouselData } from "../components/esummit/carouselData";
export default function Esummit() {
  return (
    <>
      <Head>
        <title>Launchpad | E-Cell BPHC </title>
      </Head>
      <Launchpad />
      <Cards />
      {/* <SummitEvents/> */}
    </>
  );
}
