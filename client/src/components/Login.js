import React, { useState } from "react";
import { authAxios } from "../utils/authAxios";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState({username: '', password: ''});
  const [isFetching, setIsFetching] = useState(false);

  const handleLogin = event => {
  	event.preventDefault();
  	setIsFetching(true);
  	authAxios().post("/login", credentials)
  			   .then(res => {
  			   		setIsFetching(true);
  			   		console.log(res)
  			   })
  			   .catch(err => {
  			   	console.log(err)
  			   	alert("an error occured");
  			   	setIsFetching(false);
  			   });
  }

  const handleChanges = event => {
  	setCredentials({ ...credentials, [event.target.name]: event.target.value})
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      {isFetching ? <p>...fetching...</p> : <></>}
      <form onSubmit={handleLogin}>
      	<input
      		type="text"
      		name="username"
      		onChange={handleChanges}
      		value={credentials.username}
      	/>
      	<input
      		type="text"
      		name="password"
      		onChange={handleChanges}
      		value={credentials.password}
      	/>
      	<button>Login</button>
      </form>
    </>
  );
};

export default Login;
