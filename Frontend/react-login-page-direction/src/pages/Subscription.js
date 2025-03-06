import axios from "axios";
import React, { useEffect, useState } from "react";
import './Subscription.css'
import Score from "../components/Score";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Subscription = () => {

    const [plans, setPlans] = useState();

    const planss = async () => {
        axios.post('http://localhost:4000/subscriptionplan', {
            method: "getall"
        })
            .then(response => { setPlans(response.data) })
            .catch(error => (`Error is : ${error}`))
    }
    useEffect(() => { planss(); }, [])

    const Monthplan = async () => {
        axios.post('http://localhost:4000/subscriptionplan', {
            type: "month",
            method: "get"
        })
            .then(response => { setPlans(response.data) })
            .catch((error) => (`Error is : ${error}`))
    }

    const Yearlyplan = async () => {
        axios.post('http://localhost:4000/subscriptionplan', {
            type: "year",
            method: "get"
        })
            .then(response => { setPlans(response.data) })
            .catch(error => (`Error is : ${error}`))
    }

    const Groupplan = async () => {
        axios.post('http://localhost:4000/subscriptionplan', {
            type: "group",
            method: "get"
        })
            .then(resposne => { setPlans(resposne.data) })
            .catch(error => (`error is : ${error}`))
    }


    return (
        <>
            <div>
                {/* <Score /> */}
                <Navbar />
                <div className="sub-head">
                    <h2 className="color">Subscription</h2>
                    <p>The Cric-Score subscription offers amazing benefits, such as:</p>
                    <ul>
                        <li>Live streaming of cricket matches such as TATA IPL 2024 and more(subject to availability in your region)</li>
                        <li>Fantasy Handbook featuring expert-selected teams, player matchups, differential players, and insightful stats for TATA IPL 2024 and over 200+ matches</li>
                        <li>Ad-free experience, excluding live match broadcasts</li>
                        <li>Exclusive premium articles, interviews, inside stories, and Cricbuzz Originals web series</li>
                        <li>Cricbuzz has an app for Android TV, Apple TV, and Amazon Fire Stick. Search for Cricbuzz and just Sign up or log in to your subscribed account to watch live streaming of TATA IPL 2024 and other cricket matches.</li>
                        <li>Currently, there is no free trial offer. You can watch 10 minutes of live streaming for free for select matches in select regions only (subject to availability).</li>
                    </ul>
                </div>
                <div className="sub-buttons">
                    <button className="sub-button" onClick={Monthplan}>Monthly plans</button>
                    <button className="sub-button" onClick={Yearlyplan}>Yearly plans</button>
                    <button className="sub-button" onClick={Groupplan}>Group plans</button>
                </div>
                <div className="plan-main">
                    {plans ? (
                        plans.map((plan) => (
                            <div className="plan-container">
                                <div>
                                    <h3>{plan.duration}</h3>
                                    <p>{plan.planName}</p>
                                    <h2>₹{plan.price}<span style={{fontSize:"1rem"}}>Only/-</span></h2>
                                    {plan.features.map((li) => {
                                        return (
                                            <ul style={{marginTop:"0px"}}>
                                                <li className="list">{li}</li>
                                            </ul>
                                        )
                                    })}
                                    <button className="plan-button">Buy Now!</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>null</p>
                    )}
                </div>
                <Footer />



                {/* {plans ? (
                    plans.map((plan) => (
                        <p key={plan.planName}>{plan.planName}</p>
                    ))
                ) : (
                    <p>null</p>
                )} */}

            </div>
        </>
    )
}

export default Subscription;