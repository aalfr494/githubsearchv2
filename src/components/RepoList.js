import React, { Component } from 'react';
import RepoListItem from './RepoListItem';


const RepoList = (props) => {
	const repoUserName = props.username;
	const repoURL = props.reposURL;

	const repos = props.repos;






	return (
			<div>
				<h4>Repo Link</h4>
				<a href={repoURL} className="embed-responsive-item">{repoURL}</a>
				<br />
				<br />
				<h3>List of repositories</h3>
				<ul className="col-md-4 list-group">
					{
						repos.map(repo => {
							return <RepoListItem
							 					repo={repo}
												key={repo.id}
												{...props}
											/>
						})
					}
				</ul>
			</div>
	);
};

export default RepoList;
