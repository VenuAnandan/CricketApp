import React from "react";
import './admin.css';

function Admin(){


    // const MatchCoverage =()=>{
    //     console.log("----")
    //     return(
    //         <>
    //         <div>
    //             <h3 style={{marginTop:"300px"}}> Hello From MatchCoverage</h3>
    //         </div>
    //         </>
    //     )
    // }

    // return(
    //     <>
    //     <div>
    //         <div className="header">
    //             <h3>Admin Page</h3>
    //             <div>
    //                 <p onClick={MatchCoverage}>Match Coverage</p>
    //                 <p>Team Player</p>
    //             </div>
    //         </div>

    //     </div>
    //     </>
    // )

    let weather = 'sunny';
    function WeatherForecast({ weather }) {
        
        switch(weather) {
          case 'sunny':
            return <p>It's a beautiful day!</p>;
          case 'rainy':
            return <p>Don't forget your umbrella!</p>;
          case 'snowy':
            return <p>Bundle up, it's cold outside!</p>;
          default:
            return <p>Weather forecast unavailable.</p>;
        }
      }
      WeatherForecast()

    //   return(
    //     <button onClick={WeatherForecast}>click</button>
    //   )

}

export default Admin;