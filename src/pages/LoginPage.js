import React, {Component} from 'react';
import {Link} from "react-router-dom";
import LoginForm from "../components/login-component";

class LoginPage extends Component {
    constructor(props) {
        super(props);
    }

    submit = data => {

        // calls the URL to submit the post request.
        fetch('http://192.168.0.71:3000/api/v1/register', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res=>res.json())
            .then(function(response){
                // handle success login by saving user data
                // and show some welcome message
                let email = response.data.email;
            });
    };

    render() {
        return (
            <div>
                <h1>Login Page</h1>
                <LoginForm submit={this.submit}/>
                <p id="status"></p>
                <p>Make a new account? Right here.</p>
                <Link to="/registration" className="button">Registration</Link>
            </div>
        );
    }
}

LoginPage.propTypes = {
    // foo: PropTypes.bar
};

export default LoginPage;