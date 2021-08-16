import cstyles from "../../styles/esummit/cards.module.css";
import Card from "./card_esummit";
import events from "./eventlist_esummit";
export default function Cards() {
  return (
    <div className={cstyles.outer_container}>
      <div className={cstyles.highlighter}>
        <div className={cstyles.highlighter_events}>HIGHLIGHTER EVENT</div>
      </div>
      <div className={cstyles.container}>
        {events.map((event) => (
          <Card key={event.id} {...event} />
        ))}
      </div>
    </div>
  );
}
