import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";


function IconFooter () {
    return (
        <div className="icons">
           <div className="FB"> <AiFillFacebook /> </div>
           <div> <AiFillInstagram /> </div>
           <div> <AiFillLinkedin /> </div>
           <div> <AiFillTwitterSquare /> </div>
        </div>
    )
}

export default IconFooter;