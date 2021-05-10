const express =require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors())

mongoose.connection.once('open',() => console.log('Now Connected to MongoDB'))
mongoose.connect('mongodb+srv://jamilriotoc:riotoc123@cluster0.kj492.mongodb.net/practice?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

const memberRoutes = require('./routes/memberRoute')
const familyRoutes = require('./routes/familyRoute')

app.use('/api/member', memberRoutes)
app.use('/api/family', familyRoutes)

app.listen(process.env.PORT || 4000, () => {
	console.log(`API is now online on port ${ process.env.PORT || 4000}`)
})

