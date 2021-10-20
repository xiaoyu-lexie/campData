import express from 'express'
import Campground from '../models/Campground.js'

const router = express.Router()

//注意getCamps的位置一定要在router.get的前面
const getCamps = async(req, res) => {
  try {
    const camps = await Campground.find();
    res.json(camps)
  }
  catch(err){
    res.json({message: err.message})
  }
}

const getCamp = async(req, res) => {
  // console.log(req.params)
  const {id} = req.params
  try {
    const camp = await Campground.findById(id)
    res.json(camp)
  } catch (err) {
    res.json({message: err.message})
  }
}

const createCamp = async(req, res) => {
  const body = req.body;
  const newCamp = new Campground(body)
  try {
    await newCamp.save();
    // res.redirect(`/`)
  } catch(err){
    res.json({message: err.message})
  }
}

const updateCamp = async(req,res) => {
  // console.log('req.params', req.params)
  const {id} = req.params;
  const body = req.body;

  const updatedCamp = {...body, _id: id}

  await Campground.findByIdAndUpdate(id, updatedCamp, {new:true})
  // res.json(updatedCamp)
}

const deleteCamp = async(req, res) => {
  const {id} = req.params;
  console.log('id', id)

  await Campground.findByIdAndRemove(id)

  res.json({ message: "Delete successfully!"})
}

router.get('/', getCamps)
router.get('/:id', getCamp)

router.post('/', createCamp)

router.put('/:id', updateCamp)

router.delete('/:id', deleteCamp)


export default router;