const app = require('express');
const path = require('path');
const shortid = require('shortid')
const Razorpay = require('razorpay')

const razorpay = new Razorpay({
  key_id: 'rzp_live_FWRQdHoaQSe74v',
  key_secret: 'KcsG7egR0TmHmwLD5rN4tFMO'
})

app.post('/razorpay', async (req, res) => {
  const amount =49900
  const currency = 'INR'

  const options = {
    amount,
    currency,
    receipt: shortid.generate(),
  }

//   try {
//     const response = await razorpay.orders.create(options)
//     console.log(response)
//     res.json({
//       id: response.id,
//       currency: response.currency,
//       amount: response.amount
//     })
//   } catch (error) {
//     console.log(error)
//   }
})