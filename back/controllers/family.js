const Family = require("../models/family")


module.exports.createFamily = (params) => {

	let newFamily = new Family({

		familyName: params.familyName

	})

	return newFamily.save()
	
}


module.exports.updateFamily = (params) => {

	let updatedFamilyName = {

		familyName: params.familyName
	}

	return Family.findByIdAndUpdate(params._id, updatedFamilyName).then((family,err) => {
		
		return (err) ? false : true
	}) 	

}

module.exports.showAllFamily = () => {

	return Family.find().then(allFamily => allFamily)
}

module.exports.deleteFamily = (params) => {

	return Family.findByIdAndDelete(params._id).then((family,err)=>{

		return (err) ? false : true
	})
}
