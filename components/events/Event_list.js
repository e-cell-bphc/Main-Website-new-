import React from "react";
import style from "../../styles/events/event_list.module.css";
import Event_Home from "./Event_Home";
import Event_Tiles from "./Event_Tiles";

function Event_list({ selectedOption, allPostsData }) {
  return (
    <>
      <div className={style.blog_area}>
        {selectedOption == 1 ? (
          <>
            <div className={style.heading}>
              Ground Reality Form
            </div>
            <Event_Tiles />
          </>
        ) : selectedOption == 2 ? (
          <>
            <div className={style.heading}>
              Beyond Profits Form
            </div>
            <Event_Tiles />
          </>
        ) : null}
      </div>
    </>
  );
}

export default Event_list;
