import cards from "../../styles/Competitions/competition_cards.module.css";

export default function Cards() {
  const data = [
    {
      id: 1,
      head: "Manager’s Dilemma",
      Desc: `Manager’s Dilemma replicates managers’ real-life situations in enterprises by testing a participant’s skills to make the right decision at the right time. This exciting competition comprises of three rounds. The first round includes basic questions on how a manager will tackle situations that arise daily. The second round consists of a question on optimization, i.e., which type of good you will produce more depending on demand, availability, and feasibility to generate more profits. The final round requires you to pitch a given product to the judges.`,
    },
    {
      id: 2,
      head: "Sell it",
      Desc: `Sell it is a fantastic opportunity for all the marketing enthusiasts to showcase their communication skills and pitch in their ideas in this epic showdown. Given six unique and unconventional products like a single sock or a used pen refill, you must pitch the item in a video or poster. WIth prices worth RS. 3000, this battle of wits where Facebook reacts makes all the difference is an interesting one.`,
    },   
    {
      id: 4,
      head: "Suit Up",
      Desc: `Suit Up helps you know what it takes to be an administrator, as we simulate the corporate environment to test your decision-making skills and presence of mind. In this competition, we incline more towards the practical side of things and the starting team is given a sector for, e.g., Food, eCommerce, fintech, etc. Every team is provided with some money to decide how to market their company, make an ambassador, invest in publicity, and manage the amount. The final decision is made based on points allotted following a pre-decided algorithm.`,
    },
    {
      id: 5,
      head: "Ace the Case",
      Desc: ` 'Ace The Case' is a case study competition that is held every year and is sure to test your observations. With two rounds, each to determine a solution for the defined problem statement with respect to the product given, ACE THE CASE puts you in real-world situations where your expertise in understanding a subject and determining the fault will be examined. It’s a chance not worth missing to get an action-based learning and brainstorming experience from meticulously referenced and inspiring case studies.`,
    },   
  ];
  return (
    <>
      <div className={cards.Eventsname}>Competitions</div>
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
