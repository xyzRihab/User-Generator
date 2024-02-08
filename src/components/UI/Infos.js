import React from 'react'

export default function Infos({ bio, gender }) {
	return (
		<div className="row-start-2 py-4">
			<p>{bio}</p>
			<p>{gender}</p>
		</div>
	)
}
