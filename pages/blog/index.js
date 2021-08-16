import React, { useEffect, useState } from "react";
import SideMenu from "../../components/blog/SideMenu";
import styles from "../../styles/blog/index_blog.module.css";
import Blog_list from "../../components/blog/Blog_list";
import {getSortedPostsData} from "../../lib/posts"
import Head from "next/head"


export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	console.log(allPostsData);
	return {
		props: {
			allPostsData
		}		
	};
}

function Blogs({allPostsData}) {
	const [selectedOption, setSelectedOption] = useState({
		activeOption: { id: 1, name: "Homepage" },
		options : [
			{ id: 1, name: "Homepage" },
			{ id: 2, name: "Entrepreneurship"},
			{ id: 3, name: "Finance" },
			{ id: 4, name: "Marketing" },
			{ id: 5, name: "Cryptocurrency" },
			{ id: 6, name: "Product Management" },
		]	
	});
	return (
		<>
		<Head>
			<title>
				Blog | E-Cell BPHC
			</title>
		</Head>
			<div className={styles.outer}>
				<div className={styles.blogspace}>
					<SideMenu setSelectedOption={setSelectedOption} selectedOption={selectedOption} />
					<Blog_list selectedOption={selectedOption.activeOption.id} allPostsData={allPostsData} />
				</div>
			</div>
		</>
	);
}
export default Blogs;
