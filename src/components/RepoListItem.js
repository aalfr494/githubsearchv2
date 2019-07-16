import React, { Component } from 'react';


const RepoListItem = (props) => {




	return (
			<div>
					<br />
						<li className="list-group-item">
							<h4 className="card-header">{props.repo.name}</h4>
							<p><b>Repo Name: {props.repo.full_name}</b></p>
							<p>Project ID: {props.repo.id}</p>
						</li>
					<br />

			</div>
	);
};

export default RepoListItem;
