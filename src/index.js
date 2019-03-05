import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
//import App from './App';
import './index.css';

var data = 123;

class MyTitle extends React.Component {
    static propTypes = {
        title: PropTypes.number.isRequired,
    }
    render() {
        return <h1> {this.props.title} </h1>;
    }
}


ReactDOM.render(<MyTitle title={data} />, document.getElementById('root'));