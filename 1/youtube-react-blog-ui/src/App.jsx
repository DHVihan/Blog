import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Single2 from "./pages/single2/Single2";
import Single3 from "./pages/single3/Single3";
import Single4 from "./pages/single4/Single4";
import Single5 from "./pages/single5/Single5";
import "./app.css";

function App() {
	const currentUser = true;
	return (
		<Router className="home">
			<Topbar />
			<Switch>
				<Route exact path="/">
					<Homepage />
				</Route>
				<Route path="/posts">
					<Homepage />
				</Route>
				<Route path="/register">{currentUser ? <Homepage /> : <Register />}</Route>
				<Route path="/login">{currentUser ? <Homepage /> : <Login />}</Route>
				<Route path="/post/Post2">
					<Single2 />
				</Route>
				<Route path="/post/Post3">
					<Single3 />
				</Route>
				<Route path="/post/Post4">
					<Single4 />
				</Route>
				<Route path="/post/Post5">
					<Single5 />
				</Route>
				<Route path="/post/Post">
					<Single />
				</Route>

				<Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
				<Route path="/settings">{currentUser ? <Settings /> : <Login />}</Route>
			</Switch>
		</Router>
	);
}

export default App;
