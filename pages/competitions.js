import comp from "../styles/Competitions/competitions.module.css";
import Cards from "../components/Competitions/cards";
import Head from "next/head"

export default function Competitions() {
	return (
		<>
		<Head>
			<title>Competitions | E-Cell BPHC </title>
		</Head>
			<div className={comp.container}>
				<div className={comp.headpage}>
					<div className={comp.headpageblur}>
						<div className={comp.header}>Competitions</div>
						<div className={comp.subheader}>
							A test for your Entrepreneural skills and knowledge.
						</div>
					</div>
				</div>

				<Cards />
			</div>
		</>
	);
}
