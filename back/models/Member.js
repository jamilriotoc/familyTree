const mongoose = require('mongoose')

const memberSchema = new mongoose.Schema({

	name: {
		type: String
		
	},

	age: {
		type: Number
		
	},

	hobbies: {
		type: String
	},

	familyName: {
		type: String
	}

	


})

module.exports = mongoose.model('Member', memberSchema)