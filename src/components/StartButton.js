import React from "react";
import {Button} from "react-bootstrap";


export function StartButton(props) {
    return(
        <div style={{position: "absolute", top: "45%"}}>
            <Button style={{backgroundColor:"green", width:"15em", height:"5em"}} onClick={() => props.setStart(true)}>
                Start A Game !
            </Button>
        </div>
    )
}

export default StartButton;