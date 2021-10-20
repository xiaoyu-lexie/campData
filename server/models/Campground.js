import mongoose from 'mongoose';

const campSchema = mongoose.Schema({
  title: String,
  price: String,
  description: String,
  location:String
})

const Campground = mongoose.model('yelpcamp', campSchema);

export default Campground;