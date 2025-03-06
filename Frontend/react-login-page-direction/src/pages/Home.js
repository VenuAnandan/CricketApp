import React, { useEffect, useState } from "react";
import './Home.css';
import Navbar from "../components/Navbar";
import Score from "../components/Score";
import Footer from "../components/Footer";

function Home() {
    const [mc, setMc] = useState(3);
    const [matchCoverage, setMatchCoverage] = useState([]);

    // const matchCoverage = [
    //     {
    //         id: 3,
    //         series: "CT",
    //         year: "2025",
    //         teamA: "IND",
    //         teamB: "PAK",
    //         headline: "Live - King Kohil finished pakistan race in CT",
    //         result: "IND vs PAK:  India won by 4 wickets(with 15 balls remaining)",
    //         live: "https://youtu.be/p6DrIDJfSSg",
    //         img1: "https://www.siasat.com/wp-content/uploads/2022/10/India-vs-Pakistan.jpg",
    //         img2: "https://images.moneycontrol.com/static-mcnews/2022/10/Collage-Maker-23-Oct-2022-06.54-PM.jpg",
    //         img3: "https://th.bing.com/th/id/OIP.6aTSun_LVpLP6mPUxPwsXwHaEK?rs=1&pid=ImgDetMain",
    //         img4: "https://i.cdn.newsbytesapp.com/images/l30420211024185017.jpeg"

    //     },
    //     { id: 1, series: "CT", year: "2025", teamA: "ENG", teamB: "AUS", headline: "Inglish 120* seals record win for Australia", result: "ENG vs AUS: Australia won by 5 wickets(with 30 balls remaining)", live: "video" },
    //     { id: 2, series: "CT", year: "2025", teamA: "SAF", teamB: "AFG", headline: "Another one QTK 120* seals record win for South Africa", result: "SAF vs AFG: South Africa won by 2 wickets(with 0 balls remaining)", live: "video" }
    // ]

    const fetching = () => {
        fetch("http://localhost:4000/homeinfo")
            .then(response => response.json())
            .then(data => setMatchCoverage(data))
            .catch(error => console.log("Error is : ", error));
    }

    useEffect(() => {
        fetching();
    }, [])

    const handlechange = (value) => {
        setMc(value);
        // console.log(value);
    }


    return (
        <>
            <div>
                <Score />
                <Navbar />

                <div className="home-container">
                    <div className="leftside-container">
                        <div className="match-coverage-container">
                            <p className="for-bold">Match Coverage</p>
                            <div className="match-container">
                                {matchCoverage.map((match) => {
                                    return (

                                        <button className="m" onClick={() => handlechange(match.id)}>
                                            <p style={{ fontWeight: "bold", fontSize: "1rem" }}>{match.teamA} <span style={{ fontWeight: 'lighter' }}>vs</span> {match.teamB}</p>
                                            <p style={{ fontSize: '.8rem' }}>{match.series} <span>{match.year}</span></p>
                                        </button>
                                    );
                                })}
                            </div>
                            <hr style={{margin:"0 0 10px 0"}}></hr>
                            {matchCoverage.map((match) => {
                                if (match.id === mc) {
                                    return (
                                        <div className="match-container-body">
                                            <iframe width="560" height="315" src={match.live} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                                            <div>
                                                <h3>{match.headline}</h3>
                                                <p>{match.short}</p>
                                            </div>
                                        </div>
                                    );
                                }
                            })}
                            {matchCoverage.map((match) => {
                                if (match.id === mc) {
                                    return (
                                        <div className="watch-main">
                                            <p className="for-bold">Watch Online  |  <span>points table</span></p>
                                            <div className="watch-hilights">
                                                <div><img src={match.img1} alt="KeyMoment"></img><p>Rivarly Matchs</p></div>
                                                <div><img src={match.img2} alt="KeyMoment"></img><p>Kohil goes down the ground</p></div>
                                                <div><img src={match.img3} alt="KeyMoment"></img><p>Toss</p></div>
                                                <div><img src={match.img4} alt="KeyMoment"></img><p>History of Ind vs Pak</p></div>
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                            {/* <div className="watch-main">
                                <p>Watch Online  |  <span>points table</span></p>
                                <div className="watch-hilights">
                                    <div><img src={im} alt="KeyMoment"></img><p>Watch - innings</p></div>
                                    <div><img src="https://images.moneycontrol.com/static-mcnews/2022/10/Collage-Maker-23-Oct-2022-06.54-PM.jpg" alt="KeyMoment"></img><p>Watch - innings</p></div>
                                    <div><img src="https://th.bing.com/th/id/OIP.6aTSun_LVpLP6mPUxPwsXwHaEK?rs=1&pid=ImgDetMain" alt="KeyMoment"></img><p>Watch - innings</p></div>
                                    <div><img src="https://i.cdn.newsbytesapp.com/images/l30420211024185017.jpeg" alt="KeyMoment"></img><p>Watch - innings</p></div>
                                </div>
                            </div> */}


                        </div>
                    </div>

                    <div className="rightside-container">
                        <div>
                            <div className="story-head"><p style={{ fontSize: "1.1rem" }}>Recent Buzz</p><p style={{ fontSize: "1.1rem", cursor: "pointer" }}>see more</p></div>
                            <div className="topstories">
                                <img className="topstories-img" src="https://th.bing.com/th/id/OIP.9rDXmDqLqDiyr-luIsRWGQHaED?w=299&h=180&c=7&r=0&o=5&pid=1.7" alt="Top Stories"></img>
                            </div>
                            <div className="topstories">
                                <img className="topstories-img" src="https://th.bing.com/th/id/OIP.e-1a_xPAAZY5q-ntTEq4QgAAAA?rs=1&pid=ImgDetMain" alt="Top Stories"></img>
                            </div>
                            <div className="topstories">
                                <img className="topstories-img" src="https://mmnews.tv/wp-content/uploads/2023/10/South-africa.jpg" alt="Top Stories"></img>
                            </div>
                        </div>
                        <div>
                            <div className="advert"><h1>Advertesment*</h1></div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    )

}

export default Home;