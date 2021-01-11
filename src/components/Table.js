import React, {useState} from "react";
import Table from "react-bootstrap/Table"
import WinModel from "./WinModel";


function TableGame(props) {
    const [show, setShow] = useState(false);

    const [player1, setPlayer1] = useState([]);
    const [player2, setPlayer2] = useState([]);

    const [fullTable, setFullTable] = useState(1);
    const [win, setWin] = useState(true);

    const style = {
        td:{
            textAlign:"center",
            verticalAlign: "middle",
            fontSize:"2em",
            cursor: "pointer",
        }
    }

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const checker = (arr, target) => target.every(v => arr.includes(v));

    const chooseSquare = (square) =>{
        if(document.getElementById(square).innerText)
            return;

        let array;
        let playerTurn;

            if (props.turn === "Player1"){
                array = [...player1, square];
                setPlayer1(array);
                playerTurn = "Player2";
                document.getElementById(square).innerText = "X";
            }else {
                array = [...player2, square];
                setPlayer2(array);
                playerTurn = "Player1";
                document.getElementById(square).innerText = "O";
            }

            for (let i=0; i < winningConditions.length; i++){
                if (checker(array, winningConditions[i]))
                    return setShow(true);
            }

            if (fullTable === 9){
                setWin(false);
                return setShow(true);
            }

            setFullTable(fullTable + 1);
            props.setTurn(playerTurn);
    };

    return(
        <div>
            <WinModel winner={props.turn} show={show} win={win}/>
            <Table striped bordered hover size="xl" style={{ maxWidth: "35em", tableLayout:"fixed"}}>
                <thead>
                <tr style={{ height:"10em"}}>
                    <th onClick={() => chooseSquare(0)} id={"0"} style={style.td}></th>
                    <th onClick={() => chooseSquare(1)} id={"1"} style={style.td}></th>
                    <th onClick={() => chooseSquare(2)} id={"2"} style={style.td}></th>
                </tr>
                <tr style={{ height:"10em"}}>
                    <th onClick={() => chooseSquare(3)} id={"3"} style={style.td}></th>
                    <th onClick={() => chooseSquare(4)} id={"4"} style={style.td}></th>
                    <th onClick={() => chooseSquare(5)} id={"5"} style={style.td}></th>
                </tr>
                <tr style={{ height:"10em"}}>
                    <th onClick={() => chooseSquare(6)} id={"6"} style={style.td}></th>
                    <th onClick={() => chooseSquare(7)} id={"7"} style={style.td}></th>
                    <th onClick={() => chooseSquare(8)} id={"8"} style={style.td}></th>
                </tr>
                </thead>
            </Table>
        </div>
    )
}

export default TableGame;
