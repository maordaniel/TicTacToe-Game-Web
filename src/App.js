import React, {useState} from "react";
import TableGame from "./components/Table";
import StartButton from "./components/StartButton";
import "./App.css"


function App() {
    const [start, setStart] = useState(false);
    const [turn, setTurn] = useState("Player1");

    const underLineStyle = {
        fontSize: "2.5rem",
        fontWeight: "700",
        borderBottom:" 5px solid #73C663",
        display: "inline-block",
        paddingBottom: "10px",
        fontFamily: "sans-serif",
    }

    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            {start ?
                <div style={{marginTop:"3em"}}>
                    <div style={{display:"flex", justifyContent: "space-between", marginBottom:"3em"}}>
                        <h1 style={turn === "Player1"  ? underLineStyle : null}>Player1</h1>
                        <h1 style={turn === "Player2" ? underLineStyle : null}>Player2</h1>
                    </div>
                    <TableGame turn={turn} setTurn={setTurn}/>
                </div>
                :
                <StartButton setStart={setStart}/>
            }
        </div>
    );
}

export default App;
