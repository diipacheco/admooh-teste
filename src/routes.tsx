import React from "react";
import PhotoList from "./Pages/PhotosList";

import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={PhotoList} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
