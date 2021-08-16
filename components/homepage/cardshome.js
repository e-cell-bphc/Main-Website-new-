import cards from "../../styles/homepage/cards.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Cards({ src, info, headname, link }) {
  return (
    <>
      <div className={cards.card}>
        <div className={cards.head}>
          <div className={cards.headimage}>
            <Image
              src={src}
              alt="Picture of the author"
              width={50}
              height={50}
            />
          </div>
          <div className={cards.headname}>{headname}</div>
        </div>
        <div className={cards.info}>{info} </div>
        <div className={cards.more}>
          <Link href={link}>Know more</Link>
        </div>
      </div>
    </>
  );
}
