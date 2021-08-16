import program from "../styles/programs/programcss.module.css";
import Cards from "../components/programs/program_cards";
import Link from "next/dist/client/link";
import Head from "next/head"

export default function programs() {
  return (
    <>
    <Head>
      <title>Programs | E-Cell BPHC </title>
    </Head>
      <section className={program.section}>
        <div className={program.title}>
          <h1>Programs</h1>
          <h2>Embibing the spirit of entrepreneurship</h2>
        </div>
      </section>

      <section className={program.section}>
        <div className={program.container}>
          <div className={program.left}>
            
              <video width="80%" autoPlay controls className = {program.video}>
                <source src="../public/sweep.mp4" type="video/mp4" />
            </video>
            
          </div>
          <div className={program.right}>

            <h2>SWEEPSTAKES</h2>
            <h3>ECELL BRINGS TO YOU, SWEEPSTAKES</h3>
            <p>Not Available right now.</p>
            <br></br>
            <br></br>
            <Link href="/commingsoon">
            <button type="button" className={program.button}>
              Register Now
            </button>
            </Link>
          </div>
        </div>
      </section>

      <section className={program.section3}>
        <Cards />
      </section>
    </>
  );
}
