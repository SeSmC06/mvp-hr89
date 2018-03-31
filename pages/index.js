import React, { Component } from 'react';
import Link from 'next/link';
const { key: _APIKEY } = require('../apikey');

export default class extends Component {
  initmap = () => {
    return new google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
  };
  render() {
    return (
      <div>
        <h1>Welcome to Baby Wiper ${_APIKEY} Say hello Daddy</h1>
        <div id="map" />
      </div>
    );
  }
}
