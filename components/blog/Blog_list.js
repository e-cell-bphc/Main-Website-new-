import React from 'react'
import style from "../../styles/blog/blog_list.module.css"
import Blog_Home from './Blog_Home'
import Blog_Tiles from './Blog_Tiles'


function Blog_list({selectedOption, allPostsData}) {
    
    return (
        <>
        <div className={style.blog_area}>
        {selectedOption == 1 ? <Blog_Tiles allPostsData = {allPostsData} /> : (selectedOption == 2 ? <Blog_Tiles allPostsData = {allPostsData} /> : null)}   
        </div>
        </>
    )
}

export default Blog_list
