import React, { useEffect, useState } from "react";
import './Score.css';


function Score() {

    const [scoreTable, setScoreTable] = useState([]);

    const fetching = () => {
        fetch("http://localhost:4000/scoreInformations")
            .then(response => response.json())
            .then(data => setScoreTable(data))
            .then((error) => console.log("Error is : ", error));
    }

    useEffect(() => {
        fetching();
    }, [])

    // const scoreTable = [
    //     { 
    //         live: "",
    //         match: "Champion Trophy", 
    //         teamA: "Eng", 
    //         teamB: "Aus", 
    //         result: "Australia won by 5 wickets", 
    //         teamAs: 351, 
    //         teamBs: 356, 
    //         teamAw: 8, 
    //         teamBw: 5, 
    //         overremaind: "" },
    //     { live: "🔴", match: "Champion Trophy", teamA: "Afg", teamB: "Saf", result: "Need 10 for 9 balls reminding ", teamAs: 351, teamBs: 356, teamAw: 8, teamBw: 5, overremaind: "(18.3/20 over)" },
    //     { live: "", match: "Champion Trophy", teamA: "Eng", teamB: "Aus", result: "Australia won by 5 wickets", teamAs: 351, teamBs: 356, teamAw: 8, teamBw: 5, overremaind: "" },
    //     { live: "🔴", match: "Champion Trophy", teamA: "Afg", teamB: "Saf", result: "Need 10 for 9 balls reminding ", teamAs: 351, teamBs: 356, teamAw: 8, teamBw: 5, overremaind: "(18.3/20 over)" }
    //     // { live: "", match: "Champion Trophy", teamA: "Eng", teamB: "Aus", result: "Australia won by 5 wickets", teamAs: 351, teamBs: 356, teamAw: 8, teamBw: 5, overremaind: "" },
    //     // { live: "$", match: "Champion Trophy", teamA: "Afg", teamB: "Saf", result: "Need 10 for 9 balls reminding ", teamAs: 351, teamBs: 356, teamAw: 8, teamBw: 5, overremaind: "(18.3/20 over)" },
    //     // { live: "", match: "Champion Trophy", teamA: "Eng", teamB: "Aus", result: "Australia won by 5 wickets", teamAs: 351, teamBs: 356, teamAw: 8, teamBw: 5, overremaind: "" },
    //     // { live: "$", match: "Champion Trophy", teamA: "Afg", teamB: "Saf", result: "Need 10 for 9 balls reminding ", teamAs: 351, teamBs: 356, teamAw: 8, teamBw: 5, overremaind: "(18.3/20 over)" },
    //     // { live: "$", match: "Champion Trophy", teamA: "Afg", teamB: "Saf", result: "Need 10 for 9 balls reminding ", teamAs: 351, teamBs: 356, teamAw: 8, teamBw: 5, overremaind: "(18.3/20 over)" },
    // ];
    // console.log(scoreTable[match].match);


    return (
        <>
            <div className="main-score">
                <h3>Recent Matchs</h3>
                <div className="mainofscore">
                    <div className="container">
                        {scoreTable.map((item, index) => {
                            return (
                                <div className="scorecard">
                                    <p style={{ fontWeight: 'bold', fontSize: '0.8rem' }}><span>{item.live} </span>{item.match}</p>
                                    <div style={{ display: "flex", flexDirection: "row" }}>
                                        <img src={item.teamAi} style={{ width: "25px", height: "25px" }}></img><p style={{ fontWeight: 'bold' }}>{item.teamA}: {item.teamAs}/{item.teamAw}</p>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "row" }}>
                                        <img src={item.teamBi} style={{ width: "25px", height: "25px" }}></img><p style={{ fontWeight: 'bold' }}>{item.teamB}: {item.teamBs}/{item.teamBw} <span style={{ fontWeight: 'normal' }}>{item.overremaind}</span></p>                                    </div>
                                    <p style={{ fontSize: '0.8rem' }}>{item.result}</p>
                                    <button style={{ height: "25px", color: "white", backgroundColor: "rgba(17, 24, 39, 1)", cursor:"pointer" }}>Watch Now!</button>
                                </div>
                            );
                        })}

                    </div>
                </div>
            </div>
            {/* <Home data={scoreTable} /> */}

        </>
    );
}

export default Score;