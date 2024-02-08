import { useState } from 'react'
import './App.css'
import Card from './components/UI/Card'
import './styles/output.css'

function App() {
	const [users, setusers] = useState([])

	const getData = async () => {
		const result = await fetch('https://randomuser.me/api/')
		const data = await result.json()
		setusers(data.results)
	}

	return (
		<div className="text-lg text-gray-500 bg-blackBg w-full h-screen grid place-items-center grid-cols-3 grid-rows-3 ">
			{users.map((user, index) => {
				return (
					<Card
						username={user.login.username}
						fullName={user.name.first + ' ' + user.name.last}
						bio={
							user.location.street.number +
							' ' +
							user.location.city +
							', ' +
							user.location.country
						}
						gender={user.gender}
						image={user.picture.medium}
					/>
				)
			})}
			<button
				className="col-start-2 row-start-3 text-gray-300 bg-azureBlue rounded-3xl h-11 self-center hover:bg-skyBlue duration-300 w-1/2"
				onClick={getData}>
				Get new user
			</button>
		</div>
	)
}

export default App
