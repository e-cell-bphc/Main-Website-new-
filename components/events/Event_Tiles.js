import Link from "next/link";
import React from "react";
import { useState } from "react";
import styles from "../../styles/events/event_tiles.module.css";
import Date from "./date";

function Event_Tiles() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [contact, setContact] = useState();
  const [team, setTeam] = useState();
  const [college, setCollege] = useState();
  const [start, setStart] = useState();
  const [desc, setDesc] = useState();
  console.log(name);
  return (
    <div>
      <form className={styles.form}>
        <div className={styles.distri}>
          <div className={styles.input}>
            <div className={styles.div}>Name</div>
            <input type="text" name="name" value={name} onChange={()=>{setName()}} className={styles.inputbox} required />
          </div>
          <div className={styles.input}>
            <div className={styles.div}>Email Address</div>
            <input type="email" name="email" value={email} onChange={()=>{setEmail()}} className={styles.inputbox} required />
          </div>
          <div className={styles.input}>
            <div className={styles.div}>Contact Number</div>
            <input type="text" name="number" value={contact} onChange={()=>{setContact()}} className={styles.inputbox} required />
          </div>
        </div>
        <div className={styles.distri}>
          <div className={styles.input}>
            <div className={styles.div}>Team Members&apos; name</div>
            <input type="text" name="members" value={team} onChange={()=>{setTeam()}} className={styles.inputbox} required />
          </div>
          <div className={styles.input}>
            <div className={styles.div}>College(if any)</div>
            <input type="text" name="college" value={college} onChange={()=>{setCollege()}} className={styles.inputbox} />
          </div>
        </div>
        <div className={styles.distri}>
          <div className={styles.input}>
            <div className={styles.div}>Name of Start-Up</div>
            <input type="text" name="startUpName" value={start} onChange={()=>{setStart()}} className={styles.inputbox} required />
          </div>
          <div className={styles.input}>
            <div className={styles.div}>Short Description of Start-Up</div>
            <textarea name="description" placeholder="Short description..." value={desc} onChange={()=>{setDesc()}} className={styles.inputbox1} required></textarea>
          </div>
        </div>
        <button type="submit" className={styles.submit}>Sign Up</button>
      </form>
    </div>
  )
}

export default Event_Tiles

