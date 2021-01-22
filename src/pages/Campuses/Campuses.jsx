import CampusesArray from "./components/CampusesArray";

import React, { Component } from "react"

class Campuses extends Component {

    render(){

        console.log("Render Campus Listing Blank Slate");
        return(

            <div>
                <h1> Campus Listing Blank Slate </h1>
                <hr></hr>

              <div>
                    <center>
                      <h2> All Campuses</h2> 
                    </center>
             </div>

                {/* Navbar in between h1 and h2. 
                
                To display campuses we'll have a list */ }
                <CampusesArray />

               <center>  
                   <button> Add Campus </button> 
                </center>

            </div>

        );
    }
}

export default Campuses;