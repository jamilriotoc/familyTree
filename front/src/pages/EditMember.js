import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import {Link} from 'react-router-dom'
import { useHistory } from "react-router-dom";



export default function EditMember(props){

	console.log(props)
	const [name,setName] = useState ('')
	const [age,setAge] = useState (0)
	const [hobbies,setHobbies] = useState ('')

	let history = useHistory();

	function editMember(e){

	e.preventDefault()
	
		setName('')
		setAge(0)
		setHobbies('')

	fetch('http://localhost:4000/api/member/editMember/:id',{

		method: "PUT",
		headers: {

			"Content-Type": "application/json"


			},

			body: JSON.stringify({

						_id: props.match.params.id,
						name,
						age,
						hobbies
					})


			})
			.then(res => res.json())
			.then(data => {
					 		
			console.log(data)
			if(data){

			history.push('/members')
					
			}
		})

	}

	return(
		<>
			<h1>Edit Member</h1>


			<Form onSubmit={(e)=> editMember(e)}>
				<Form.Group controlId="name">
					<Form.Label>Name:</Form.Label>
					<Form.Control type="text" placeholder="Enter New Name" value={name} onChange={e => setName(e.target.value)} required/>
				</Form.Group>
				<Form.Group controlId="age">
					<Form.Label>Age:</Form.Label>
					<Form.Control type="number" placeholder="Enter New Age" value={age} onChange={e => setAge(e.target.value)} required/>
				</Form.Group>
				<Form.Group controlId="hobbies">
					<Form.Label>Hobbies:</Form.Label>
					<Form.Control type="text" placeholder="Enter New Hobbies" value={hobbies} onChange={e => setHobbies(e.target.value)} required/>
				</Form.Group>
				
				<Button type="submit">Update Member</Button>
				<Link to="/members"><button>Go Back to Members</button></Link>
			</Form>


		</>
		)
}