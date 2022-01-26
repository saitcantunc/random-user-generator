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
								<li>Email: {user.email}</li>
								<li>Phone: {user.phone}</li>
								<li>Age: {user.dob.age}</li>
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
