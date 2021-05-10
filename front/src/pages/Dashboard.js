import {useState,useEffect} from 'react'
import '../css/dashboard.css'



export default function Dashboard (){


const [count, setCount] = useState(0);


	let heroes = {
		name:"",
		stat:"",
		team:""
	}

	function edit(){
		console.log("edit")
	}
	function remove(){}
	function add (){}
	function create(){}


	return (
		<>	
		<h1>Dashboard</h1>
		
		

		<table className="table">
			<tr>
				<th>name</th>
				<th>stats</th>
				<th>team</th>
				<th colspan="4">action</th>
			</tr>
			<tr>
				<td>{heroes.name}</td>
				<td>{heroes.stat}</td>
				<td>{heroes.team}</td>
				<td><button onClick={edit}>edit</button></td>
				<td><button onClick={remove}>delete</button></td>
				<td><button onClick={add}>Add</button></td>
				<td><button onClick={create}>Create</button></td>
			</tr>
		</table>

		</>
	)


}