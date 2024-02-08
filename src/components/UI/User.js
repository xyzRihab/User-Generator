import React from 'react'

export default function User({ username, fullName, image }) {
	return (
		<div className="row-start-1 grid grid-cols-[1fr,4fr,1.5fr]">
			<img src={image} className="rounded-full w-14 h-14"></img>
			<div className="text-left">
				<p className="font-bold text-gray-300">{fullName}</p>
				<p>@{username}</p>
			</div>
			<button className="text-gray-300 bg-azureBlue rounded-3xl h-11 self-center hover:bg-skyBlue duration-300">
				Follow
			</button>
		</div>
	)
}
