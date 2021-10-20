import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'

import campRoute from './routes/camps.js'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

app.use('/camps', campRoute)

//这个位置很重要，放在30行就行不通，为什么？
app.get('/', (req,res) => {
  res.send('welcome HOME!')
})
const connectionUrl = 'mongodb+srv://xiaoyu:yelpcamp123@cluster0.wfltr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const PORT = process.env.PORT || 8000

//这里先连mongoose，再设置server listen的原因是什么？以及怎么把mongoose和app连在一起了呢？
mongoose.connect(connectionUrl, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch(err => console.log({message: err.message}))


