import React from "react";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/blog/date";
import styles from "../../styles/blog/individual_blog.module.css";
export default function Blog({ postData }) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
        <script
          type="text/javascript"
          src={`https://platform-api.sharethis.com/js/sharethis.js#property=61194574dc7d7400121ac70b&product=sticky-share-buttons`}
          async="async"
        ></script>
      </Head>
      <div className="sharethis-sticky-share-buttons"></div>
      <div className={styles.wrapper}>
        <div>
          <h1 className={styles.heading}>{postData.title}</h1>
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <div className={styles.info}>
          <Date dateString={postData.date} />
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
