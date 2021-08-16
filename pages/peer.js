import peer from "../styles/peer/peer.module.css";
import Cards from "../components/PeerToPeer/cards";
import what from "../styles/peer/aim.module.css";
import Head from "next/head"

export default function Programs() {
	return (
		<>
		<Head>
			<title>Peer To Peer | E-Cell BPHC </title>
		</Head>
			<div className={peer.container}>
				<div className={peer.head}>
					<div className={peer.header}>Peer To Peer</div>

					<div className={peer.headerlow}>
						An integral part of entrepreneurship is learning. In this direction,
						CEL’s peer-to-peer program has been
					</div>
				</div>
				<section className={what.box}>
					<h2 className={what.head}> Aim and Vision.</h2>
					<p className={what.info}>
						An integral part of entrepreneurship is learning. In this direction,
						CEL’s peer-to-peer program has been planned to impart knowledge and
						insights into start-ups via learning sessions and discussions held
						with the members. With carefully curated sessions with assignments
						such as case studies, the main aim is to enrich everyone’s
						entrepreneurship-related knowledge. Preparing a structure of topics
						to be discussed or samples of assignments such as case studies
						following the ECell team members’ response is not an easy task, but
						the dedication and commitment to learning and spreading knowledge
						make it possible.
					</p>
				</section>
				<Cards />
			</div>
		</>
	);
}
