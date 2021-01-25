import React from 'react';
import './Home.css';

const Home = () => {

    return(
        <div>
                <center><img src="https://www.cuny.edu/wp-content/uploads/sites/4/media-assets/skyline-1200x627_CUNY_Logo.jpg"/></center><br></br>
                
                <center><h1>Welcome to CUNY!</h1></center>

                <hr></hr>


            <div class="row">

                <div class = "column">
                <center>
                    <img src="https://www.cuny.edu/wp-content/uploads/sites/4/page-assets/global/Student_Awards_891x891.jpg" width="600" height="500"></img>
                </center>
                    <hr class="goldDec"></hr>
                <div class= "columnAdj">
                <p> 
                    The nation’s largest urban university, offering a range of undergraduate, graduate degrees and continuing education opportunities
                    to over 500,000 students of all ages and backgrounds on 25 NYC campuses.
                    25 campuses located across one of the international capitals of the world. With cutting edge technologies, labs,
                    and equipment. Along with a diverse academic staff that stand at the forefront of their respective fields. Join us to learn 
                    to become a leader in your field and become part of the bright future of New York City. The city where if you can make it 
                    here than you can make it anywhere.</p> 
                </div>
                    
               

                </div>

                <div class="column">

                <div class="columnAdj2">
                  <p> More than 50 students from the City University of New York are winners of prestigious national academic awards. 
                        Their success reflects the University’s mandate to provide a quality education to students of all backgrounds and socioeconomic circumstances.
                        Affirming the mission that we sought to uphold in 1874 to bring higher education to previously underserved communities.
                        We are so incredibly proud of our students and are extremely excited to see what our future graduates achieve.

                     </p> 
                </div>

                <hr class="goldDec2"></hr>
               
                    <img src="https://www.cuny.edu/wp-content/uploads/sites/4/page-assets/global/25-Campuses_891x891.jpg" width="600" height="500"></img>
               
               </div>
            </div>
        </div>
     );
}

export default Home;
