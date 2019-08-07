import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodosListPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Hello todos</h1>
            </div>
        );
    }
}

TodosListPage.propTypes = {
    // foo: PropTypes.bar
};

export default TodosListPage;