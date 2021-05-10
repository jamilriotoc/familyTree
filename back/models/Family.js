const mongoose = require('mongoose');

const familySchema = new mongoose.Schema({

	familyName: {
		type: String
	}
	
})


module.exports = mongoose.model('Family', familySchema)
