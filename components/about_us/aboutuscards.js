import Image from "next/image";
import style from "../../styles/AboutUs/aboutuscards.module.css";
import Anushka from "../../assets/images/Executives/1.jpg";
import sonakshi from "../../assets/images/Executives/2.jpg";
import nikhil from "../../assets/images/Executives/nikhil.jpg";
import Yashsav from "../../assets/images/Executives/Yashsav_Gupta.jpg";
import Pratyush from "../../assets/images/Executives/Pratyush_Choudhary.png";
import Sneh from "../../assets/images/Executives/sneh.png";
import Sanchit from "../../assets/images/tech/sanchit.jpeg";
import Akshat from "../../assets/images/tech/AkshatK.jpg";
import Raghuvir from "../../assets/images/tech/Raghuvir.jpg";
import Rushil from "../../assets/images/tech/Rushil.jpg";
import Ashwin from "../../assets/images/tech/ashwin-pic.jpeg";
import Sambhav from "../../assets/images/Executives/Sambhav.jpeg";
import AkshatO from "../../assets/images/tech/AkshatO.jpg";

export default function Aboutus() {
  const list = [
    {
      id: 1,
      src: Anushka,
      name: "Anushka Chaudhary",
      classy: "position",
      position: "President",
      email: "f20190393@hyderabad.bits-pilani.ac.in",
    },
    {
      id: 2,
      src: sonakshi,
      name: "Sonakshi Mishra",
      classy: "positionlong",
      position: "Vice-President Events and Learning",
      email: "f20190866@hyderabad.bits-pilani.ac.in",
    },
    {
      id: 3,
      src: nikhil,
      name: "Nikhil Gupta",
      classy: "position",
      position: "Launchpad Chairman",
      email: "f20191562@hyderabad.bits-pilani.ac.in",
    },
    {
      id: 4,
      src: Yashsav,
      name: "Yashsav Gupta",
      classy: "positionlong",
      position: "Vice-President Projects and Initiatives",
      email: "f20191459@hyderabad.bits-pilani.ac.in",
    },
    {
      id: 5,
      src: Pratyush,
      name: "Pratyush Choudhary",
      classy: "position",
      position: "Videography Head",
      email: "f20190372@hyderabad.bits-pilani.ac.in",
    },
    {
      id: 6,
      src: Sneh,
      name: "Sneh Chellani",
      classy: "position",
      position: "Editorial Head",
      email: "f20191193@hyderabad.bits-pilani.ac.in",
    },
    {
      id: 7,
      src: Sambhav,
      name: "Sambhav Jain",
      classy: "position",
      position: "Design Head",
      email: "f20190192@hyderabad.bits-pilani.ac.in",
    },
  ];

  const tech = [
    {
      id: 1,
      src: Sanchit,
      name: "Sanchit Kalra",
      email: "seccsyboi@gmail.com",
    },
    {
      id: 2,
      src: Akshat,
      name: "Akshat Khaitan",
      email: "seccsyboi@gmail.com",
    },
    {
      id: 3,
      src: Raghuvir,
      name: "Raghuvir Singh",
      email: "seccsyboi@gmail.com",
    },
    {
      id: 4,
      src: Rushil,
      name: "Rushil Shrivastava",
      email: "seccsyboi@gmail.com",
    },
    {
      id: 5,
      src: Ashwin,
      name: "Ashwin Singh",
      email: "seccsyboi@gmail.com",
    },
    {
      id: 5,
      src: AkshatO,
      name: "Akshat Oke",
      email: "seccsyboi@gmail.com",
    },
  ];
  return (
    <>
      <div className={style.Team}>
        <div className={style.whichTeam}>
          <div className={style.teamheader}>Executives</div>

          <div className={style.teamcards}>
            {list.map((data) => (
              <div className={style.card} key={data.id}>
                <Image src={data.src} height={290} width={290} />
                <div className={style.name}>{data.name}</div>
                <div className={style[`${data.classy}`]}>{data.position}</div>
                <a href={`mailto:${data.email}`} className={style.mail}>
                  {data.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*   <div className={style.Team}>
                <div className={style.whichTeam}>
                    <div className={style.teamheader}>Tech Team</div>
                    
                    <div className={style.teamcards}>
                        {tech.map((data) => (
                        <div className={style.cardTech} key={data.id}>
                            <Image src={data.src} height={290000} width={290000} />
                            <div className={style.nameTech}>{data.name}</div>
                            <div className={style.emailTech}>{data.email}</div>
                        </div>))}
                    </div>
                </div>
            </div>*/}
    </>
  );
}
