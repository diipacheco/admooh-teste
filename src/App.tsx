import React from "react";
import GlobalStyle from "./Styles/Global";
import Routes from "./routes";
import { Provider } from "react-redux";
import store from "./Store";
const App: React.FC = () => {
	return (
		<>
			<div className="App">
				<Provider store={store}>
					<Routes />
					<GlobalStyle />
				</Provider>
			</div>
		</>
	);
};

export default App;
