import React, { useEffect, useRef } from "react";

const Header = () => {
	const searchValue = useRef("");

	useEffect(() => {
		searchValue.current.focus();
	}, []);

	return (
		<div className='container'>
			<div className='title'>Random User Generator</div>
			<input
				type='text'
				ref={searchValue}
				placeholder='Search'
				className='form-control mb-5 mt-1'
			/>
		</div>
	);
};

export default Header;
