import React from 'react'
import User from './User'
import Infos from './Infos'

export default function Card({ username, fullName, gender, image, bio }) {
	return (
		<div className="grid grid-rows-3 gap-2 p-6 col-start-2 row-start-2 w-full h-60 bg-darkGray rounded-3xl">
			<User username={username} fullName={fullName} image={image} />
			<Infos bio={bio} gender={gender} />
			<div className="row-start-3 self-end">
				<h4>
					<span className="font-bold">4</span> Following{' '}
					<span className="font-bold">97.1K</span> Followers
				</h4>
			</div>
		</div>
	)
}
