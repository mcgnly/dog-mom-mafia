import Sora from "./sora.jpeg";
import NavBar from "./NavBar";
import "./App.css";

function App() {
	return (
		<>
			<NavBar />
			<h1 id="home">Dog Mom Mafia</h1>
			<div>
				<img src={Sora} className="logo" alt="Vite logo" />
			</div>
			<div className="card">
				<h4 id="aboutUs">About Us</h4>
				<p>
					We are a collective of dog moms who love our dogs and want to make
					sure there is a safe, accessible place for us to meet, support the
					community, and make sure our dogs have a safe place to play.
				</p>
			</div>
			<div className="card">
				<h4 id="events">Upcoming Events</h4>
				<p>none so far ¯\_(ツ)_/¯</p>
			</div>
			<div className="card">
				<h4 id="contactUs">Contact Us</h4>
				<p>Please don't</p>
			</div>
		</>
	);
}

export default App;
