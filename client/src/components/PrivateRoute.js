import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={
				props => {
					if (window.localStorage.getItem("bubbleToken")) {
						return <Component {...props} />;
					} else {
						return <Redirect to="/" />;
					}
				}
		} 
		/>
	)
}

export default PrivateRoute;