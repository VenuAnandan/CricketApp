import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import './Rank.css';
import Score from "../components/Score";
import Footer from "../components/Footer";

function Ranking() {

    const [gender, setGender] = useState("men");
    const [formate, setFormate] = useState("T20");
    // const [cricketRankings, setCricketRankings] = useState([]);

    const cricketRankings = {
        T20: {
            title: "T20 serires Rank",
            men: [
                { position: 1, player: "Suryakumar Yadav", rating: 890 },
                { position: 2, player: "Mohammad Rizwan", rating: 850 },
                { position: 3, player: "Babar Azam", rating: 830 },
                { position: 4, player: "Aiden Markram", rating: 820 },
                { position: 5, player: "Jos Buttler", rating: 810 }
            ],
            women: [
                { position: 1, player: "Sophie Devine", rating: 870 },
                { position: 2, player: "Beth Mooney", rating: 860 },
                { position: 3, player: "Tahlia McGrath", rating: 840 },
                { position: 4, player: "Smriti Mandhana", rating: 830 },
                { position: 5, player: "Alyssa Healy", rating: 820 }
            ]
        },
        ODI: {
            title: "ODI series Rank",
            men: [
                { position: 1, player: "Babar Azam", rating: 890 },
                { position: 2, player: "Shubman Gill", rating: 860 },
                { position: 3, player: "Virat Kohli", rating: 850 },
                { position: 4, player: "David Warner", rating: 830 },
                { position: 5, player: "Quinton de Kock", rating: 820 }
            ],
            women: [
                { position: 1, player: "Alyssa Healy", rating: 880 },
                { position: 2, player: "Natalie Sciver", rating: 870 },
                { position: 3, player: "Beth Mooney", rating: 850 },
                { position: 4, player: "Smriti Mandhana", rating: 840 },
                { position: 5, player: "Laura Wolvaardt", rating: 830 }
            ]
        },
        Test: {
            title: "Test series Rank",
            men: [
                { position: 1, player: "Joe Root", rating: 890 },
                { position: 2, player: "Steve Smith", rating: 870 },
                { position: 3, player: "Marnus Labuschagne", rating: 860 },
                { position: 4, player: "Babar Azam", rating: 850 },
                { position: 5, player: "Kane Williamson", rating: 840 }
            ],
            women: [
                { position: 1, player: "Ellyse Perry", rating: 880 },
                { position: 2, player: "Natalie Sciver", rating: 860 },
                { position: 3, player: "Beth Mooney", rating: 850 },
                { position: 4, player: "Smriti Mandhana", rating: 840 },
                { position: 5, player: "Tammy Beaumont", rating: 830 }
            ]
        }
    };



    // const [summa, setSumma] = useState([]);

    // useEffect(()=>{
    //     axios.get('http://localhost:4000/cric-rank',{})
    //     .then(resposne => {setCricketRankings(resposne.data)});
    //     console.log("use==>")
    // },[])

    // console.log(summa);
    const keys = Object.keys(cricketRankings.Test.men[0]);
    const forTable = cricketRankings[formate][gender];

    return (
        <>
            <div>
                <Score />
                <Navbar />

                <div className="rank-container">
                    <h2>ICC Player Rankings - Men's and Women's Cricket Rankings</h2>
                    <div className="buttons">
                        <div>
                            <button onClick={() => { setGender("men") }}>Men</button>
                            <button onClick={() => { setGender("women") }}>Women</button>
                        </div>
                        <div>
                            <button onClick={() => { setFormate("T20") }}>T20</button>
                            <button onClick={() => { setFormate("ODI") }}>ODI</button>
                            <button onClick={() => { setFormate("Test") }}>Test</button>
                        </div>
                    </div>
                    <div className="table-container">
                        <div className="table">
                            {/* <h2>{formate} series ranking</h2> */}
                            <table border="1" style={{ borderCollapse: "collapse" }}>
                                <tr>
                                    {keys.map((element) => (
                                        <th>{element.toUpperCase()}</th>
                                    ))}
                                </tr>
                                <tbody>

                                    {forTable.map((item) => (
                                        <tr>
                                            <td>{item.position}</td>
                                            <td>{item.player}</td>
                                            <td>{item.rating}</td>
                                        </tr>

                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <Footer />

            </div>
        </>
        // <>
        // <div>

        // </div>
        // </>
    )

}

export default Ranking;