import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Routes from '../constants/Routes'

class App extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
};


const mapStateToProps = (state, owrProps) => {
    return {
        //
    }
};

export default connect(mapStateToProps)(App);
