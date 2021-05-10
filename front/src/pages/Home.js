import {useState,useEffect} from 'react'
import '../css/dashboard.css'



export default function Dashboard (){


const [count, setCount] = useState(0);


	let member = {
		name:"",
		age:"",
		hobbies:""
	}

	function edit(){
		console.log("edit")
	}


	function remove(){
		console.log("remove")
	}


	function add (){
		console.log("add")
	}


	function create(){
		console.log("create")
	}


	return (
		<>	
		<h1>Family Tree</h1>
		
		

		<table className="table">
			<tr>
				<th>name</th>
				<th>age</th>
				<th>hobbies</th>
				<th>role</th>
				<th colSpan="4">action</th>
			</tr>
			<tr>
				<td>{member.name}</td>
				<td>{member.age}</td>
				<td>{member.hobbies}</td>
				<td></td>
				<td><button onClick={edit}>edit</button></td>
				<td><button onClick={remove}>delete</button></td>
				<td><button onClick={add}>Add</button></td>
				<td><button onClick={create}>Create</button></td>
			</tr>
		</table>

		</>
	)


}