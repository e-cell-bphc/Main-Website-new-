import React, { useState } from 'react'
import styles from '../styles/pitchers.module.css'
import Head from 'next/head'
import QA from '../components/gr/QA'
import axios from 'axios'


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
       id: 8,
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
       answer: 'You can register on our website.'
     },
     {
       id: 6,
       classy: 'three',
       questionid: 'qthree',
       question: 'When is the last date?',
       answer:
         'The last date for registration will be update soon.'
     },
  ]
  
  const [register, setRegister] = useState(false);

  const switchForm = (e) => {
    setRegister(true);
  }

  const [formdata, setData] = useState(
    {
      nameOfStartup: '',
      desc: '',
      contact: '',
      email: '',
      sector: '',
      stage: ' ',
      cofounders: '',
      revenue: '',
      link: '',
      website: '',
      deck: '',
      date:''

    }
  )


  const data = [
    {
      id: 1,

      label1: 'Name Of Startup',
      type1: 'text',
      name11: 'nameOfStartup',
      value1: formdata.nameOfStartup,

      label2: 'Description Of Startups',
      name2: 'desc',
      type2: 'text',
      value2: formdata.desc

    },
    {
      id: 2,

      label1: 'Contact Number',
      type1:"number",
      name11: 'contact',
      value1: formdata.contact,

      label2: 'Email ID',
      type22:"email",
      name2: 'email',
      value2: formdata.email
    },
    {
      id: 3,

      label1: 'Sector Of StartUp',
      type1:"text",
      name11: 'sector',
      value1: formdata.sector,

      label2: 'Stage OF StartUp',
      type2:"text",
      name2: 'stage',
      value2: formdata.stage
    },
    {
      id: 4,

      label1: 'Number Of Cofounders',
      type1:"number",
      name11: 'cofounders',
      value1: formdata.cofounders,

      label2: 'Revenue (if any)',
      type2:"number",
      name2: 'revenue',
      value2: formdata.revenue
    },
    {
      id: 5,

      label1: 'Date of Startup',
      type1:"date",
      name11: 'date',
      value1: formdata.date,

      label2: 'Pitch Deck(Drive link)',
      type2:"text",
      name2: 'deck',
      value2: formdata.deck
    },
    {
      id: 6,

      label1: 'Link of Video',
      type:"text",
      name11: 'link',
      value1: formdata.link,

      label2: 'Social media / Website Link (if any)',
      type:"text",
      name2: 'website',
      value2: formdata.website
    },
  ]
  const handlechange = (e) => {
    e.preventDefault();
    setData({ ...formdata, [ e.target.name ]: e.target.value})
    console.log(formdata)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(
      'https://sheet.best/api/sheets/c37f7ab7-1546-46ec-9e65-33239b0845f1',
      formdata).then(
        (formdata) => {
          console.log(formdata);
        }
      ).then(
        alert('Your Data has been Submitted :)')
      ).then(showRazorpay()).catch((err) => {
        alert("Form Data Not Submitted :( . Please Refresh and Try Again");
      });
    
  }

  const showloader = () => {
    console.log("loadinggg....")
  }
  const showRazorpay= async ()=> {
    const script = document.createElement('script');
   script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    document.body.appendChild(script);
    script.onload = showloader();

    const data = await fetch('/api/razor',{method: 'POST'})

     var options = {
       key: 'rzp_live_FWRQdHoaQSe74v',
       amount: '35000',
       currency: data.currency,
       name: 'Pitcher`s Pilot',
       description: 'Test Transaction',
       image:
         'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FeCELL.BPHC%2F&psig=AOvVaw35nBI8g6Br43zsJCHpUSXo&ust=1645856957114000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOD68oydmvYCFQAAAAAdAAAAABAD',
       order_id: data.id,
       callback_url: 'https://www.ecellbphc.in/razorCallback',
       prefill: {
         name: '',
         email: '',
         contact: ''
       },
       notes: {
         address: 'Razorpay Corporate Office'
       },
       theme: {
         color: '#3399cc'
       }
     }
    var rzp1 = new Razorpay(options)
   
      rzp1.open()
   
    }

  

    return (
      <>
        <Head>
          <title>Pitchers Pilot | E-Cell BPHC</title>
        </Head>
        {!register ? (
          <div className={styles.container}>
            <div className={styles.header}>
              <div className={styles.event}>
                <div className={styles.name}>Pitcher&apos;s Pilot</div>
              </div>
              <div
                className={styles.Register}
                onClick={(e) => {
                  switchForm(e)
                  
                }}
              >
                Register
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
        ) : (
          <div className={styles.formContainer}>
            <div className={styles.form}>
              <div className={styles.formheader}>Pitcher&apos;s Pilot</div>
                {data.map((data) => {
                return (
                  <div className={styles.row} key={data.id}>
                    <div className={styles.inputs}>
                      <label className={styles.label}>{data.label1}</label>
                      <input
                        className={styles.input}
                        type={data.type1}
                        name={data.name11}
                        value={data.value1}
                        required
                        onChange={
                          handlechange}
                      />
                    </div>
                    <div className={styles.inputs}>
                      <label className={styles.label}>{data.label2}</label>
                      <input
                        className={styles.input}
                        type={data.type2}
                        name={data.name2}
                        value={data.value2}
                        onChange={
                          handlechange
                        }
                      />
                    </div>
                  </div>
                  )
                })}
                <div className={styles.submit} onClick={
                  handleSubmit
                }>
                  Submit
                </div>
            </div>
          </div>
        )}
      </>
    )
}

export default PitchersPilot;
