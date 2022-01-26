import React from "react";

const User = ({ user }) => {
	return (
		<div className='card mb-3' style={{ width: "540px" }}>
			<div className='row g-0'>
				<div className='col-md-4 img'>
					<img src={user.picture.large} className='img-fluid rounded-start' alt='user' />
				</div>
				<div className='col-md-8'>
					<div className='card-body'>
						<h5 className='card-title'>
							{user.name.first} {user.name.last}
						</h5>
						<p className='card-text'>
							<ul>
								<li>
									<span>Username:</span> {user.login.username}
								</li>
								<li>
									<span>Password:</span> {user.login.password}
								</li>
								<li>
									<span>Email:</span> {user.email}
								</li>
								<li>
									<span>Phone:</span> {user.phone}
								</li>
								<li>
									<span>Age:</span> {user.dob.age}
								</li>
							</ul>
						</p>
						<p className='card-text location'>
							<small className='text-muted'>
								{user.location.city} {user.location.country}
							</small>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default User;
