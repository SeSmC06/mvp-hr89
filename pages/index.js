import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
const { Link } = require('next/link');
const { key: _APIKEY } = require('../apikey');

export default class extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  onClick = ({ x, y, lat, lng, event }) =>
    console.log(x, y, lat, lng, event);

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '50%vh' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: _APIKEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onClick={this.onClick}
        />
      </div>
    );
  }
}
