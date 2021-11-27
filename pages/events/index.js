import React, { useEffect, useState } from "react";
import SideMenu from "../../components/blog/SideMenu";
import styles from "../../styles/blog/index_blog.module.css";
import Event_list from "../../components/events/Event_list";
import { getSortedPostsData } from "../../lib/posts";
import Head from "next/head";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  console.log(allPostsData);
  return {
    props: {
      allPostsData,
    },
  };
}

function Events({ allPostsData }) {
  const [selectedOption, setSelectedOption] = useState({
    activeOption: { id: 1, name: "Homepage" },
    options: [
      { id: 1, name: "Ground Reality" },
      { id: 2, name: "Beyond Profits" },
    ],
  });
  return (
    <>
      <Head>
        <title>Events | Launchpad</title>
      </Head>
      <div className={styles.outer}>
        <div className={styles.blogspace}>
          <SideMenu
            setSelectedOption={setSelectedOption}
            selectedOption={selectedOption}
          />
          <Event_list
            selectedOption={selectedOption.activeOption.id}
            allPostsData={allPostsData}
          />
        </div>
      </div>
    </>
  );
}
export default Events;
