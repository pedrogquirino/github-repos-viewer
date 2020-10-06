import React from 'react';
import { Card,Button } from 'react-bootstrap';


export default function CardComponent(props) {

    return(
        <Card className="card">
            <Card.Img className="card img" variant="top" src="https://pngimg.com/uploads/github/github_PNG20.png" />
            <Card.Body>
                <Card.Title>{props.data.name}</Card.Title>
                <Card.Text>{props.data.full_name}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        
    );
}

