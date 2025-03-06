import React, { useState } from "react";
import './Series.css';
import Navbar from "../components/Navbar";
import Score from "../components/Score";
import Footer from "../components/Footer";

function Series() {


    const cricketSeries = {
        championsTrophy: [
            {
                id: 1,
                name: "ICC Champions Trophy 2025",
                format: "ODI",
                venue: "Pakistan",
                status: "Upcoming",
                matches: [
                    {
                        matchId: "CT1",
                        teams: ["https://img.icons8.com/?size=100&id=32584&format=png&color=000000", "India", "https://img.icons8.com/?size=100&id=60223&format=png&color=000000", "Pakistan"],
                        date: "2025-02-15",
                        venue: "Lahore",
                        status: "Upcoming",
                        time: "1:00 AM",
                        GMT: "09:00 AM GMT / 02:00 PM LOCAL"
                    },
                    {
                        matchId: "CT2",
                        teams: ["https://img.icons8.com/?size=100&id=22557&format=png&color=000000", "Australia", "https://img.icons8.com/?size=100&id=18212&format=png&color=000000", "England"],
                        date: "2025-02-17",
                        venue: "Karachi",
                        status: "Upcoming",
                        time: "1:00 AM",
                        GMT: "09:00 AM GMT / 02:00 PM LOCAL"
                    },
                    {
                        matchId: "CT3",
                        teams: ["https://img.icons8.com/?size=100&id=60230&format=png&color=000000", "South Africa", "https://img.icons8.com/?size=100&id=20192&format=png&color=000000", "New Zealand"],
                        date: "2025-02-19",
                        venue: "Islamabad",
                        status: "Upcoming",
                        time: "1:00 AM",
                        GMT: "09:00 AM GMT / 02:00 PM LOCAL"
                    },
                ],
            }
        ],
        IPL: [
            {
                id: 1,
                name: "Indian Premier League 2024",
                format: "T20",
                venue: "India",
                status: "Upcoming",
                matches: [
                    {
                        matchId: "IPL1",
                        teams: ["https://img.icons8.com/?size=100&id=fCmgcgyc2has&format=png&color=000000", "Chennai Super Kings", "https://img.icons8.com/?size=100&id=CXXtTbAlsHpe&format=png&color=000000", "Mumbai Indians"],
                        date: "2024-03-20",
                        venue: "Chennai",
                        status: "Upcoming",
                        time: "7:00 AM",
                        GMT: "09:00 AM GMT / 02:00 PM LOCAL"
                    },
                    {
                        matchId: "IPL2",
                        teams: ["https://img.icons8.com/?size=100&id=24970&format=png&color=000000", "Royal Challengers Bangalore", "https://img.icons8.com/?size=100&id=9xflPvS4vNYs&format=png&color=000000", "Kolkata Knight Riders"],
                        date: "2024-03-22",
                        venue: "Bangalore",
                        status: "Upcoming",
                        time: "7:00 AM",
                        GMT: "09:00 AM GMT / 02:00 PM LOCAL"
                    },
                    {
                        matchId: "IPL3",
                        teams: ["https://img.icons8.com/?size=100&id=Axt3hhItGNKP&format=png&color=000000", "Delhi Capitals", "https://img.icons8.com/?size=100&id=sdR3lJUHFxZP&format=png&color=000000", "Rajasthan Royals"],
                        date: "2024-03-24",
                        venue: "Delhi",
                        status: "Upcoming",
                        time: "7:00 AM",
                        GMT: "09:00 AM GMT / 02:00 PM LOCAL"
                    },
                ],
            },
        ],
        WPL: [
            {
                id: 1,
                name: "Women's Premier League 2024",
                format: "T20",
                venue: "India",
                status: "Ongoing",
                matches: [
                    {
                        matchId: "WPL1",
                        teams: ["https://img.icons8.com/?size=100&id=CXXtTbAlsHpe&format=png&color=000000", "Mumbai Indians Women", "https://img.icons8.com/?size=100&id=Axt3hhItGNKP&format=png&color=000000", "Delhi Capitals Women"],
                        date: "2024-02-22",
                        venue: "Mumbai",
                        status: "Ongoing",
                        time: "7:00 AM",
                        GMT: "09:00 AM GMT / 02:00 PM LOCAL"
                    },
                    {
                        matchId: "WPL2",
                        teams: ["https://img.icons8.com/?size=100&id=115554&format=png&color=000000", "UP Warriorz", "https://img.icons8.com/?size=100&id=gSvgm4SJ7InJ&format=png&color=000000", "Gujarat Giants"],
                        date: "2024-02-24",
                        venue: "Lucknow",
                        status: "Upcoming",
                        time: "7:00 AM",
                        GMT: "09:00 AM GMT / 02:00 PM LOCAL"
                    },
                    {
                        matchId: "WPL3",
                        teams: ["https://img.icons8.com/?size=100&id=24970&format=png&color=000000", "Royal Challengers Bangalore Women", "https://img.icons8.com/?size=100&id=CXXtTbAlsHpe&format=png&color=000000", "Mumbai Indians Women"],
                        date: "2024-02-26",
                        venue: "Bangalore",
                        status: "Upcoming",
                        time: "7:00 AM",
                        GMT: "09:00 AM GMT / 02:00 PM LOCAL"
                    },
                ],
            },
        ],
    };


    return (
        <>
            <div>
                <Score />
                <Navbar />

                <div className="series-container">


                    {Object.values(cricketSeries).map((series, index) => {
                        return (
                            <>
                                <div className="series-table-container">
                                    <div><h2 style={{color:"rgba(17, 24, 39, 1)"}}>{series[0].name}<span>({series[0].format})</span><span>{series[0].venue}</span></h2></div>
                                    <div>
                                        <table className="series-table">
                                            <tr>
                                                <th>Date</th>
                                                <th>Match details</th>
                                                <th>Time</th>
                                            </tr>
                                            <tbody>
                                                {series[0].matches.map((match) => (
                                                    <tr className="tr">
                                                        <td style={{ width: "20%" }}>{match.date}</td>
                                                        <td style={{ width: "60%" }}>
                                                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                                                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
                                                                    <img src={match.teams[0]} style={{ width: "25px", height: "25px" }}></img>  <p>{match.teams[1]} vs {match.teams[3]}</p>  <img src={match.teams[2]} style={{ width: "25px", height: "25px" }}>
                                                                    </img>
                                                                </div>
                                                                <div>
                                                                    <p>{match.venue} - {match.status}</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td style={{ width: "20%" }}><div><p>{match.time}</p><p style={{ fontSize: "13px" }}>{match.GMT}</p></div></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </>
                        )
                    })}

                </div>
                <Footer />
            </div>
        </>
    )

}

export default Series;