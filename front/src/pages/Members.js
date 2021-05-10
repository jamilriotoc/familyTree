import {useState,useEffect} from 'react'
import '../css/dashboard.css'
import {Link} from 'react-router-dom'
import MemberList from './MemberList.js'



export default function Members (){


const [member, setMember] = useState([]);




	function editMember(){
		console.log("edit button")
	}

	
	function getMembers(){

		console.log("lalabells")

		fetch('http://localhost:4000/api/member/allMember')
		.then(response => response.json())
		.then(data => setMember([...data]))
		.catch(err => console.error(err));


	}

	console.log(member)

	

	





	
	return (
		<>	
		<h1>Select Member</h1>
		
		
		<table className="table">
			<tr>
				<th>name</th>
				<th>age</th>
				<th>hobbies</th>
				<th colSpan="3">action</th>
			</tr>
				{member.map(mem=>(

					<MemberList {...mem} key={mem._id}/>

					))}
			<tr>
				<td><button onClick={getMembers}>All Members</button></td>
				<td><Link to="/createMember"><button>Create Member</button></Link></td>
			</tr>
			

		</table>

		</>
	)


}