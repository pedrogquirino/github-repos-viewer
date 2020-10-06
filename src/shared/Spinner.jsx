import React from "react";
import BeatLoader from "react-spinners/BeatLoader";
 

const style = {
  "paddingTop": "200px",  
}

export default function Spinner(props) {

  return (
    <div style={style} className="sweet-loading">
      <BeatLoader
        size={15}
        margin={2}       
        color={"#36D7B7"}        
        loading={props.loading}
      />
    </div>
  );
}