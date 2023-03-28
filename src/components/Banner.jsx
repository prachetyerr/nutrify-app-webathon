import React from "react";
import { Link } from "react-router-dom";
import * as routes from "../constants/routes";

const MainBanner = () => (
    <div style={{marginTop: "110px", marginBottom: "20px"}}>
        <center >
            <Link to={routes.LANDING}>
                <img src="./logoother.png" alt="Nutrify" height={"200px"} />
            </Link>
            <hr/>
        </center> 
    </div>
);

export default MainBanner;
