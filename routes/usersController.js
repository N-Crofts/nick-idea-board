const router = require('express').Router()
const { User } = require('../db/model')


////////////  S H O W   A L L  ////////////////
/// ( with dot-then promise version below ) ///

router.get('/', async (req, res) => {
  const response = await User.find()
  res.send(response)
})

// router.get('/', (req, res) => {
//   User.find()
//     .then((response) => {
//       res.send(response)
//     })
// })


/////////////  S H O W   O N E  //////////////
/////// ( with alternate find method ) ///////

router.get('/:id', async (req, res) => {
  // const user = await User.find({ _id: req.params.id})
  const user = await User.findById(req.params.id)
  res.send(user)
})


///////////////  C R E A T E  ////////////////

router.post('/', async (req, res) => {
  const user = await User.create(req.body)
  res.send(user)
})


///////////////  U P D A T E  ////////////////

router.put('/:id', async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.send(user)
})


///////////////  D E L E T E  ////////////////

router.delete('/:id', async (req, res) => {
  await User.findByIdAndRemove(req.params.id)
  res.sendStatus(200)
})


module.exports = router