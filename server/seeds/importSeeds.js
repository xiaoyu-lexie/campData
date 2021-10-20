import Campground from '../models/Campground.js'
import mongoose from 'mongoose'
import {descriptors, places} from './seedsHelper.js'
import cities from './cities.js'

const connectionUrl = 'mongodb+srv://xiaoyu:yelpcamp123@cluster0.wfltr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(connectionUrl, {useNewUrlParser: true, useUnifiedTopology: true})

const sample = (array) => {
  return array[Math.floor(Math.random()*array.length)]
}

const seedDB = async() => {
  await Campground.deleteMany({});
  for (var i = 0; i < 50; i++) {
    const randomNum = Math.floor(Math.random()*1000)
    const camp = new Campground({
      location: `${cities[randomNum].city}, ${cities[randomNum].state}`,
      title: `${sample(descriptors)} ${sample(places)}`
    })
    await camp.save()
  }
}

seedDB().then(() => {
  mongoose.connection.close()
})