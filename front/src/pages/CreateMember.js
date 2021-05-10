import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import {Link} from 'react-router-dom'
import { useHistory } from "react-router-dom";

export default function CreateMember(){


	const [name,setName] = useState ('')
	const [age,setAge] = useState (0)
	const [hobbies,setHobbies] = useState ('')

	let history = useHistory();

	function createMember (e){

	

	e.preventDefault()
	
		setName('')
		setAge(0)
		setHobbies('')

	/*	fetch('http://localhost:4000/api/member/allMember',{
			method: 'POST',
			headers: {
				'Content-Type': ''
			}
		})
		
		.catch(err => console.error(err));*/

		fetch('http://localhost:4000/api/member/createMember',{

		method: "POST",
		headers: {

			"Content-Type": "application/json"


			},

			body: JSON.stringify({

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

		<h1>Create New Member</h1>


			<Form onSubmit={(e)=> createMember(e)}>
				<Form.Group controlId="name">
					<Form.Label>Name:</Form.Label>
					<Form.Control type="text" placeholder="Enter Name" value={name} onChange={e => setName(e.target.value)} required/>
				</Form.Group>
				<Form.Group controlId="age">
					<Form.Label>Age:</Form.Label>
					<Form.Control type="number" placeholder="Enter Age" value={age} onChange={e => setAge(e.target.value)} required/>
				</Form.Group>
				<Form.Group controlId="hobbies">
					<Form.Label>Hobbies:</Form.Label>
					<Form.Control type="text" placeholder="Enter Hobbies" value={hobbies} onChange={e => setHobbies(e.target.value)} required/>
				</Form.Group>
				
				<Button type="submit">Add Member</Button>
				<Link to="/members"><button>Go Back to Members</button></Link>
			</Form>


		</>
		)
}