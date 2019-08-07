import React, {Component} from 'react';
import {Link} from "react-router-dom";

const LandingPage = () => (
            <div className="ui container">
                <h1>Welcome to TODOs</h1>
                <Link to='/login' className="button"> Login </Link><br/>
                <Link to='/register' className ="button"> Registration</Link>
            </div>
        );

LandingPage.propTypes = {
    // foo: PropTypes.bar
};

export default LandingPage;