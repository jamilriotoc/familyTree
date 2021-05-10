const Member = require("../models/member")
const Family = require("../models/family")



module.exports.createNewMember = (params) => {

	let newMember = new Member({

		name: params.name,
		age: params.age,
		hobbies: params.hobbies
		
		
	})

	return newMember.save().then((member, err) =>{

		return (err) ? false : true
	})
}

module.exports.showAllMember = () => {

	return Member.find().then(allMember => allMember)
}

module.exports.updateMember = (details) => {

	
	console.log(details)

	let updatedMember = {
		name: details.name,
		age: details.age,
		hobbies: details.hobbies

	}

	return Member.findByIdAndUpdate(details._id, updatedMember).then((member, err) => {


		return (err) ? false : true
	})

}


module.exports.deleteMember = (params) => {

	return Member.findByIdAndDelete(params._id).then((member,err)=>{

		return (err) ? false : true
	})
}



