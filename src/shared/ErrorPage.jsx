import React from 'react';



const style = {
    "paddingTop": "200px",
    "font-size": "25px"
}

export default function ErrorPage(props) {

    return(
        <div style={style} >
            Httpcode: {props.error.code}
            Message: {props.error.msg}
        </div>
    );
}