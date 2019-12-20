import React, { useState, useEffect } from "react";
//import axios from "axios";
import { authAxios } from "../utils/authAxios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = (props) => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  const [fetching, isFetching] = useState(false);

  useEffect(() => {
  	if(colorList.length === 0) {
	  	authAxios().get("/colors")
	  			 .then(res => {
	  			 	isFetching(true)
	  			 	setColorList(res.data)
	  			 	isFetching(false)
	  			 })
	  			 .catch(err => console.log(err))
  	} else {
  		console.log("color list has something")
  	}
  }, [colorList])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
