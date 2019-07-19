import React from "react";
import mainProPic from "../assets/images/mainProPic.png";

function Home() {
    return (
        <div className="card">
            <div className="card-block">
                <img src={mainProPic}/>
                <h4>THIS IS THE HOME COMPONENT</h4>
            </div>
        </div>
    );
}
export default Home;
