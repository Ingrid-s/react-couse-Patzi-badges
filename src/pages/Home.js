import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css';
//import stars from '../images/stars.svg';
import astronauts from '../images/astronauts.svg';
import platziconfLogo from '../images/platziconf-logo.svg';


function Home(){
    return (
        <div className="home">
            <div className="row container">
                <div className="col-3">
                    <img className="logo_conf"src={platziconfLogo} alt="logo"></img>
                    <h1 className="white_text">BADGE MANAGEMENT SYSTEM</h1>
                    <Link to="/badges/new" className="btn btn-primary">
                    Start
                    </Link>
                </div>
            <div className="col-8">
                <img className="astronauts" src={astronauts} alt="imagen de astronautas" />
            </div>

            </div>
           
        </div>
    )
}

export default Home;

