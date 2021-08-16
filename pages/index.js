import style from "../styles/homepage/homepage.module.css";
import Cards from "../components/homepage/cardshome";
import Whatwedo from "../components/homepage/whatwedo";
import program from "../assets/images/EC.png";
import Esummit from "../assets/images/ES.png";
import Competitions from "../assets/images/CC.png";
import id from "../assets/images/DV.png";
import startupsupp from "../assets/images/SS.png";
import peer from "../assets/images/Peer.png";
import cards from "../styles/homepage/cards.module.css";
import Social from "../components/homepage/socialmedianew";
import Head from "next/head";

export default function Home() {
  const cardlist = [
    {
      id: 1,
      src: program,
      headname: "Programs",
      info: `
			The essence of entrepreneurship is challenging the realm of possibility, delving into the unknown, and overcoming obstacles to achieve the impossible. E-Cell, BITS Pilani Hyderabad Campus has several initiatives, programs and events to help enthusiasts in the journey of entrepreneurship.`,
      link: "/commingsoon",
    },
    {
      id: 2,
      src: Esummit,
      headname: "Esummit",
      info: `Our annual E-Summit is a majestic confluence of keynote speakers, founders, entrepreneurship enthusiasts, investors, VCs, influencers, and other prominent personalities to introduce the start-up ecosystem’s multi-dimensional elements to the attendees. 
			An incredible opportunity to learn from industry leaders and for networking.`,
      link: "/esummit",
    },
    {
      id: 3,
      src: Competitions,
      headname: "Competitions",
      info: `With a wide range of competitions, including Ace the Case, Manager’s Dilemma, and Suit Up, the E-Cell at BITS Hyderabad provides a platform for entrepreneurs and enthusiasts to showcase their skills and talent through numerous competitions.`,
      link: "/competitions",
    },
    {
      id: 4,
      src: id,
      headname: "Internship Drive",
      info: `Internship Drive is an amazing opportunity for students to find an ideal internship, based on their skills or interests, from 30+ startups providing stipends from 3k to 30k INR. With a wide variety of opportunities, including work from home options, it is a great chance to gain experience and learn about the versatility of a job environment.  `,
      link: "/commingsoon",
    },
    {
      id: 5,
      src: startupsupp,
      headname: "Startup Support",
      info: `We assist entrepreneurs in bringing their ideas to fruition by guiding them and connecting them to investors, mentors, and interns, thereby helping them overcome any hurdles they may face while achieving their dream. By providing a platform and opportunities to those with a vision, we aim to build a thriving community of entrepreneurs.
`,
      link: "/commingsoon",
    },
    /*{
			id: 6,
			src: peer,
			headname: "Peer to Peer",
			info: `The Peer To Peer programme promotes learning within the members of E-Cell, by compounding the knowledge of members through active discussions. This, along with analysis and research about existing companies, and other events, helps members gather insights and experience related to entrepreneurship.`,
			link: "/peer",
		},*/
  ];
  return (
    <>
      <Head>
        <title>E-Cell BITS Pilani Hyderabad Campus</title>
      </Head>
      <div className={style.upperhome}>
        <div className={style.stars}></div>
        <div className={style.stars2}></div>
        <div className={style.innerdiv}>
          <div className={style.head}>E-Cell</div>
          <div className={style.bitshead}>BITS Hyderabad</div>
          <div className={style.low}>
            Embibing the spirit of Enterpreneurship
          </div>
        </div>
        <Social />
      </div>

      <Whatwedo />
      <div className={cards.container}>
        <h2 className={cards.Eventsname}>Events</h2>
        <div className={cards.flexbox}>
          {cardlist.map((data) => (
            <Cards key={data.id} {...data} />
          ))}
        </div>
      </div>
    </>
  );
}
