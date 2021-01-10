import React from "react";
import {Button, Modal} from "react-bootstrap";


export function WinModel(props) {
    const handleClose = () => {
        window.location.reload();
    }

    return(
        <div>
            <Modal show={props.show} onHide={handleClose} centered>
                <Modal.Header>
                    <Modal.Title>{props.win ? "Winner ✅": "Game Over 🙁"}</Modal.Title>
                </Modal.Header>
                {props.win ? <Modal.Body>🏁{props.winner}🏁</Modal.Body>: null}
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

    )
}

export default WinModel;