import React from 'react';
import CardComponent from '../shared/card/CardComponent';


const style = {
    "paddingTop": "15px"
}

export default function GridComponent(props) {

    return (        
        <div className="container-fluid d-flex justify-content-center">
            <div className="row" >
                {
                    props.data.map((card,i) =>                       
                        <div key={i} className="col-md-2" style={style}>
                            <CardComponent data={card}/>
                        </div>
                    )
                }
            </div>                                       
        </div>              
    );
}