import React, { useState } from "react";
import './Navbar.css';
import { Link, Route, Router, useLocation, useNavigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import user from './component images/user.jpg'




function Navbar() {

    const navigate = useNavigate();
    // const location = useLocation();
    // const {d} = location.state || {};
    // const {setD} = location.le || {};
    // console.log({d},"d value");

    // function change(){
    //     setD("From Navbar..")
    // }

    const userInfo = JSON.parse(localStorage.getItem("hi")); 

    function logout() {
        localStorage.removeItem("authentication");
        navigate('/');
    }

    const [showprofile, setShowprofile] = useState(false);


    return (
        <>
            {/* ------ This is for get and change the value from the login page */}
            {/* <h1>Navbar is worked</h1>
            <button onClick={change}>Get value from Navbar</button>
            <h2>Name: {d}</h2>
            <h2>Age: {}</h2> */}


            <nav className="nav-container">
                <div className="navbar-left">
                    <img src="https://img.icons8.com/external-goofy-color-kerismaker/96/external-Cricket-sport-goofy-color-kerismaker.png" alt="Logo" className="nav-img" />
                    <Link to="/home" className="nav-link">Home</Link>
                    <Link to="/series" className="nav-link">Series</Link>
                    <Link to="/teams" className="nav-link">Teams</Link>
                    <Link to="/ranking" className="nav-link">Ranking</Link>
                </div>

                <div className="navbar-right">
                    <input type="text" className="nav-search" placeholder="Search..." />
                    <img src="https://img.icons8.com/ios/50/alarm--v1.png" alt="Notifications" style={{ background: "white", borderRadius: "30px" }} className="nav-img" />
                    <img src="https://img.icons8.com/pulsar-gradient/48/user.png" alt="User" onClick={() => { setShowprofile(!showprofile) }} style={{ cursor: "pointer" }} className="nav-img" />
                    {/* <button className="logoutbtn" onClick={logout}>LogOut</button> */}
                </div>
            </nav>

            {showprofile && (
                <div className="profile">
                    <div><svg onClick={() => { setShowprofile(false) }} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                        <path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 32.990234 15.986328 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.990234 15.986328 z"></path>
                    </svg></div>
                    <h2>User Profile</h2>
                    <div className="user-profile-info">
                        <img src="https://img.icons8.com/carbon-copy/100/test-account.png" alt="user"></img>
                        <p style={{ fontWeight: "bold", fontSize: "1.3rem" }}>{userInfo.name}</p>
                        <p>{userInfo.email}</p>
                        <p>{userInfo.phone}</p>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgb(163, 156, 156)", borderRadius: "8px" }}>
                            <p style={{ padding: "10px" }}>Cricket is a game of skill, strategy, and passion. It blends patience with aggression, teamwork with individual brilliance. From elegant cover drives to fiery yorkers, every moment is a spectacle. The roar of the crowd, the thrill of a last-over finish - cricket is more than a sport. Ist's pure emotion. 🏏🔥</p>
                            {/* <button><img src=""></img>Edit Profile</button> */}
                        </div>
                        <div className="b"><button className="logoutbtn" onClick={()=>{navigate('/subscription')}}>Subscription</button><button className="logoutbtn" onClick={logout}>LogOut</button></div>
                    </div>
                </div>
            )}




        </>

    );
}

export default Navbar;