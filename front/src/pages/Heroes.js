import {useState,useEffect} from 'react'
import '../css/dashboard.css'



export default function Heroes (){


const [count, setCount] = useState(0);


	let heroes = [



	]

	
	
	function addHero(){}

	function getHeroes(){

		console.log("lalabells")

		fetch('http://localhost:4000/api/char/allChar')
		.then(response => response.json())
		.then(data => data.forEach(element=>console.log(element)))
		.catch(err => console.error(err));


	}

	console.log(heroes)
	
	return (
		<>	
		<h1>Select Hero</h1>
		
		

		<table className="table">
			<tr>
				<th>name</th>
				<th>stats</th>
				<th>team</th>
				<th>action</th>
			</tr>
			<tr>
				<td>{heroes.name}</td>
				<td>{heroes.stat}</td>
				<td>{heroes.team}</td>
				<td><button onClick={addHero}>Select Hero</button></td>
				<td><button onClick={getHeroes}>All Heroes</button></td>

			</tr>
		</table>

		</>
	)


}