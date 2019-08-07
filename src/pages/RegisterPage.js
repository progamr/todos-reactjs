import React, {Component} from 'react';
import PropTypes from 'prop-types';

class RegisterPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Hello register</h1>
            </div>
        );
    }
}

RegisterPage.propTypes = {
    // foo: PropTypes.bar
};

export default RegisterPage;