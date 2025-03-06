import React, { useEffect, useState } from "react";
import './Team.css'
import Navbar from "../components/Navbar";
import Score from "../components/Score";
import Footer from "../components/Footer";

function Teams() {

    const [iplTeams, setIplTeams] = useState([]);

    const [team, setTeam] = useState("");
    console.log(team, "first");

    const fetching = () => {
        fetch("http://localhost:4000/playersinformation")
            .then(response => response.json())
            .then(data => setIplTeams(data))
            .then(error => console.log("Error fetching : ", error));
    }
    useEffect(() => {
        fetching();
    }, [])
    console.log(iplTeams);

    // const iplTeams = [
    //     {
    //         teamName: "Chennai Super Kings",
    //         teamLogo: require('./image/csk.jpg'),
    //         teamCap: "MS Dhoni",
    //         players: [
    //             { pic: "https://en.wikipedia.org/wiki/MS_Dhoni#/media/File:MS_Dhoni_(Prabhav_'23_-_RiGI_2023).jpg", name: "MS Dhoni", runs: 5000, age: 42 },
    //             { pic: "https://en.wikipedia.org/wiki/Ravindra_Jadeja#/media/File:PM_Shri_Narendra_Modi_with_Ravindra_Jadeja_(Cropped).jpg", name: "Ruturaj Gaikwad", runs: 1500, age: 27 },
    //             { pic: "https://en.wikipedia.org/wiki/Ravindra_Jadeja#/media/File:PM_Shri_Narendra_Modi_with_Ravindra_Jadeja_(Cropped).jpg", name: "Ravindra Jadeja", runs: 2500, age: 35 }
    //         ]
    //     },
    //     {
    //         teamName: "Mumbai Indians",
    //         teamLogo: require('./image/mi.jpg'),
    //         teamCap: "Rohit Sharma",
    //         players: [
    //             { pic: require('./image/RS.jpg'), name: "Rohit Sharma", runs: 6000, age: 37 },
    //             { pic: require('./image/SKY.jpg'), name: "Suryakumar Yadav", runs: 3000, age: 33 },
    //             { pic: require('./image/JB.jpg'), name: "Jasprit Bumrah", runs: 500, age: 30 }
    //         ]
    //     },
    //     {
    //         teamName: "Royal Challengers Bangalore",
    //         teamLogo: require('./image/rcb.jpg'),
    //         teamCap: "Virat Kohli",
    //         players: [
    //             { pic: require('./image/VK.jpg'), name: "Virat Kohli", runs: 7500, age: 36 },
    //             { pic: require('./image/FDP.jpg'), name: "Faf du Plessis", runs: 3500, age: 39 },
    //             { pic: require('./image/GM.jpg'), name: "Glenn Maxwell", runs: 3000, age: 35 },
    //             { pic: require('./image/RP.jpg'), name: "Rajath Patidhar", runs: 3000, age: 35 }
    //         ]
    //     }
    // ];

    // console.log(iplTeams[0].players.name);

    const chooseteam = (event) => {
        setTeam(event.target.value);
        // console.log(team);
    }



    return (
        <>
            <div>
                <Score />
                <Navbar />





                <div className='DropDowns'>


                    <div class="menu">
                        <div class="item">
                            <a class="link">
                                <span> Select Team </span>
                                <svg viewBox="0 0 360 360" space="preserve">
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            id="XMLID_225_"
                                            d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                                        ></path>
                                    </g>
                                </svg>
                            </a>
                            <div class="submenu">
                                {iplTeams.map((team, index) => (
                                    // <div class="submenu-item">
                                    <option class="submenu-link" onClick={chooseteam} key={index} value={index}> {team.teamName} </option>
                                    // </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    {team != '' ? <div>
                        <p className='teamName'>Team Name : {iplTeams[team].teamName} <span className="teamCap">Captain {iplTeams[team].teamCap}</span></p>
                        <div className="intro">
                            <img src={iplTeams[team].teamlogo}></img>
                            <p>{iplTeams[team].teamintro}</p>
                        </div>
                        <div className='playerscard' style={{ display: 'flex' }}>

                            {console.log("check", iplTeams[team].players)}
                            {iplTeams[team].players.map((player) => {
                                return (
                                    <div className='playerCard'>
                                        <img className='image' src={player.pic}></img>
                                        <div className="overlay">
                                            <h3>{player.name}</h3>
                                            <p>{player.name}, an exceptional cricketer aged {player.age}, has amassed {player.runs} runs in his career. With impressive performances in {player.T20} T20 matches and {player.ODI} ODI games, he consistently demonstrates skill and determination. His ability to adapt across formats makes him a valuable asset to his team, inspiring many aspiring players.</p>
                                        </div>
                                        {/* <div className="info">
                                            <div >
                                                <p>Name -</p>
                                                <p>Age -</p>
                                                <p>IPL Runs -</p>
                                                <p>T20 -</p>
                                                <p>ODI -</p>
                                            </div>
                                            <div >
                                                <p>{player.name}</p>
                                                <p>{player.age}</p>
                                                <p>{player.runs}</p>
                                                <p>{player.T20}</p>
                                                <p>{player.ODI}</p>
                                            </div>
                                        </div> */}
                                    </div>
                                )
                            })}

                        </div>
                    </div> : (
                        <h2 className='teamName'>Please select Any Team</h2>
                    )}
                </div>
                <Footer />




            </div>
        </>
    )

}

export default Teams;