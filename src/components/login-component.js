import React from 'react';
import propTypes from 'prop-types';
import {Button} from 'semantic-ui-react';
import validateData from '../utils/validate';

class LoginForm extends React.Component {
    state = {

        //creating the data variable that holds the email and password to be passed on
        data: {
            email: '',
            password: ''
        },
        loading: false,
        errors: {}
    };

    // changes the state when any of form fields value is changed
    onChange = e => this.setState({
        data: {
            ...this.state.data,
            [e.target.name]: e.target.value
        }
    });

    validate = (data) => {
        return validateData(data);
    };

    onSubmit = (e) => {
        // prevents the page from refreshing while submitting a form
        e.preventDefault();
        // validate user input
        let validationResults = this.validate([
                {type: 'email',value: this.state.data.email},
                { type: 'password', value: this.state.data.password},
            ]);
        if(validationResults === true) {
            // submits the data to the API.
            this.props.submit(this.state.data);
        } else {
            // show validation errors.
            let errors = validationResults;
            this.setState({...this.state,  errors})
        }
    };

    render() {
        const {data} = this.state;

        return(


            <form onSubmit = {this.onSubmit} >
                <label htmlFor="email"><b>Email</b></label><br/>
                <input
                    placeholder="Enter Email"
                    id="email"
                    name="email"
                    value={data.email}
                    onChange = {this.onChange}
                />
                {!this.state.errors.email && <p>{this.state.errors.email}</p>}
                <br/><br/>

                <label htmlFor="password"><b>Password</b></label><br/>
                <input type="password" placeholder="Enter Password" id="password" name="password" value={data.password} onChange = {this.onChange} />
                {this.state.errors.password !== undefined && <p>{this.state.errors.password}</p>}

                <br/><br/>
                <Button type="submit" primary>Login</Button>
            </form>


        );
    }
}

LoginForm.propTypes = {
    submit: propTypes.func.isRequired
};

export default LoginForm;
