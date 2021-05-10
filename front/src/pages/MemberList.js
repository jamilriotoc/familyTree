import {Link} from 'react-router-dom'


export default function MemberList(mem){


function deleteMember(){

	console.log(mem._id)


		fetch('http://localhost:4000/api/member/deleteMember',{

			method: "DELETE",

			headers: {

			"Content-Type": "application/json"


			},

			body: JSON.stringify({

				_id: mem._id
			})
			
	
			})
			.then(res => res.json())
			.then(data=>{

				window.location.reload()
			})

		}


return(
	<>
			<tr>
				<td>{mem.name}</td>
				<td>{mem.age}</td>
				<td>{mem.hobbies}</td>
				
				<td><Link to={`/editMember/${mem._id}`}><button>Edit</button></Link></td>
				<td><button onClick={deleteMember}>Delete</button></td>

			</tr>

	</>
)

}