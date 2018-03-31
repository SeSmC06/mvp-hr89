import React, { Component } from 'react';
const { Link } = require('next/link');
const { key: _APIKEY } = require('../apikey');

export default class extends Component {

  onClick = ({ x, y, lat, lng, event }) =>
    console.log('hello current location');

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '50%vh' }}>
        <h1>HHello to Baby Wiper</h1>
      </div>
    );
  }
}
