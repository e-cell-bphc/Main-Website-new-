import React from 'react'
import styles from '../styles/pitchers.module.css'
import Head from 'next/head'
import QA from '../components/gr/QA'


function PitchersPilot() {
   const faq_list = [
    //  {
    //    id: 1,
    //    classy: 'one',
    //    questionid: 'qone',
    //    question: 'What is Launchpad?',
    //    answer:
    //      'Launchpad is the Annual Entrepreneurship Summit organized by the Entrepreneurship Cell, BITS Pilani Hyderabad Campus. A grand confluence of keynote speakers, founders, entrepreneurship enthusiasts, investors, VCs, and influencers to expose multiple elements of the start-up ecosystem to the attendees will provide an excellent platform for learning and growing while networking with a stimulating start-up community.'
    //  },
     {
       id: 10,
       classy: 'oneP',
       questionid: 'qone',
       question:
         'STAGE 1',
       answer:
         'Startups will register for the event through our online portal with all the required submission. Top 50 pitch decks will be selected for the next round. Decision for the same will completely rest upon the discretion of LAUNCHPAD `22 Organizing Committee.Results will be announced via mail.'
     },
     {
       id: 11,
       classy: 'oneP',
       questionid: 'qone',
       question:
         'STAGE 2',
       answer:
         'The selected startups might be required to submit further details to LAUNCHPAD `22 which will be redirected to our Investor panel for further evaluation. Investors will finally select the finalists who will be given a chance to enter the finals of Pitchers Pilot. If a startup is selected for the finals, they will be required to pay a nominal fee to confirm their availability for the finals.'
     },
     {
       id: 11,
       classy: 'oneP',
       questionid: 'qone',
       question:
         'STAGE 3',
       answer:
         'Top 7 startups selected from all the registered startups will be given a chance to pitch on the grand stage on Launchpad 22 live in front of our investor panel. Each session will be of 15-20 minutes where startups will be given 5 minutes to pitch and it will be followed by QnA round led by investors. If there are multiple offers, the startup can choose any one, all or neither of the offers. '
     },

     {
       id: 5,
       classy: 'three',
       questionid: 'qthree',
       question: 'How can I register for the competitions?',
       answer: 'You can register on our website. (The registerations for Launchpad 22` are closed. Hope to see you next year!)'
     },
     {
       id: 6,
       classy: 'three',
       questionid: 'qthree',
       question: 'When is the last date?',
       answer:
         'The last date for registration of the competition was 10th February 2022.'
     },
   ]

    return (
      <>
        <Head>
          <title>Pitchers Pilot | E-Cell BPHC</title>
        </Head>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.event}>
              <div className={styles.name}>Pitcher&apos;s Pilot</div>
            </div>
          </div>
          <div className={styles.aboutHead}>
            What is Pitcher&apos;s Pilot?
          </div>
          <div className={styles.about}>
            Pitcher&apos;s Pilot provides a platform for seed-stage startups
            seeking funds and mentorship to pitch their ideas directly to our
            esteemed panel, who can choose to invest in the company based on
            their reasoning. Touted as the central attraction of Launchpad
            &apos;21, startups from all across the country, including various
            prestigious universities, will be hosted to contest the event.
          </div>
          <div className={styles.container_fluid}>
            <div className={styles.faq}>
              {faq_list.map((data) => (
                <QA key={data.id} {...data} />
              ))}
            </div>
          </div>
        </div>
      </>
    )
}

export default PitchersPilot;