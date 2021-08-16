import cards from "../../styles/peer/peer.module.css";
import Link from "next/link";
export default function Cards() {
  const data = [
    {
      id: 1,
      head: "Value Proposition",
      Desc: " by Amritanshu Nayak ",
    },
    {
      id: 2,
      head: "Fampay",
      Desc: "by Saransh Agarwal",
    },   
    {
      id: 4,
      head: "Revenue Models",
      Desc: "by Bhavya Tibrewala",
    },
    {
      id: 5,
      head: "Guesstimates",
      Desc: "by Rafe Moin, Animesh Rajput, Yash Atal",
    },
    {
      id: 6,
      head: "Data Privacy",
      Desc: "by Bhavya Tibrewala",
    },
    {
      id: 7,
      head: "Customer Development",
      Desc: "by Bhavya Tibrewala",
    },
    {
      id: 8,
      head: "Interview Preparation",
      Desc: "by  Rafe Moin",
    },
    {
      id: 9,
      head: "Amazon v/s Flipkart",
      Desc: "by  Rishab Jaina",
    },
    {
      id: 10,
      head: "Finance & stockmarket",
      Desc: "by Sonakshi Mishra, Harsh Tomar",
    },
  ];
  return (
    <>
      <div className={cards.Eventsname}>Past Sessions</div>
      <div className={cards.flexbox}>
        
          {data.map((box) => (
            <div className={cards.card} key={box.id}>
              <div className={cards.headcard}>
                <div className={cards.headimage}></div>
                <div className={cards.headname}>{box.head}</div>
              </div>
              <div className={cards.info}>{box.Desc}</div>
            </div>
          ))}
        
      </div>
    </>
  );
}
