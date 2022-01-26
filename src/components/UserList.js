import React, { useEffect, useState } from "react";
import axios from "axios";
// Components
import User from "./User";

const UserList = () => {
	const [users, setUsers] = useState([]);

	const fetchUsers = async () => {
		const response = await axios.get("https://randomuser.me/api/?results=10");
		setUsers(response.data.results);
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	return (
		<div className='container'>
			{users.map((user, index) => (
				<User user={user} key={index} />
			))}
		</div>
	);
};

export default UserList;
