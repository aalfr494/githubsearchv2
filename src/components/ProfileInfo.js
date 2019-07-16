import React, { Component } from 'react';


const ProfileInfo = ({username, avatarURL, name, followers, following, company, blog, location, email, bio}) => {


	return (
			<ul className="col-md-4 list-group">
				<div className="video-list media">
					<li className="list-group-item">
							<img className="media-object" src={avatarURL} />
					</li>
					<li className="list-group-item">Username: {username}</li>
					<li className="list-group-item">Name: {name}</li>
					<li className="list-group-item"><u>Bio:</u> {bio}</li>
					<li className="list-group-item">Location: {location}</li>
					<li className="list-group-item">Followers: <b className="follower-count">{followers}</b></li>
					<li className="list-group-item">Following: <b className="follower-count">{following}</b></li>
				</div>
			</ul>
	);
};

export default ProfileInfo;
