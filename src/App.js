import "./App.css";
// Components
import Header from "./components/Header";
import UserList from "./components/UserList";

function App() {
	return (
		<div className='container'>
			<Header />
			<UserList />
		</div>
	);
}

export default App;
