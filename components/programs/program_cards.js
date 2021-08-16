import cards from "../../styles/programs/program_cards.module.css";
import Link from "next/link";
export default function Cards() {
  const data = [
    {
      id: 1,
      head: "Passes",
      Desc: "Get free pass for the Launchpad 2021 - 5th Edition and access to internship drive. ",
    },
    {
      id: 2,
      head: "Certification",
      Desc: "The campus ambassador gets a certificate from E-Cell, BITS Pilani Hyderabad Campus, after the completion of the Summit.",
    },
    {
      id: 3,
      head: "Social Media",
      Desc: "You would be featured in our social media pages.",
    },
  ];
  return (
    <>
      <div className={cards.Eventsname}>Campus Ambassador</div>
      <div className={cards.flexbox}>
        <div className={cards.row}>
          {data.map((box) => (
            <div className={cards.card} key={box.id}>
              <div className={cards.head}>
                <div className={cards.headimage}></div>
                <div className={cards.headname}>{box.head}</div>
              </div>
              <div className={cards.info}>{box.Desc}</div>
              <div className={cards.more}>
                <Link href="#">Know more</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
