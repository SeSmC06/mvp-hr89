import React, { Component } from 'react';
import Link from 'next/link';
const { key: _APIKEY } = require('../apikey');


export default class extends Component {

  render () {
    return (
        <div>
          <h1>Welcome to Baby Wiper ${_APIKEY} Say hello Daddy</h1>
        </div>
    )
  }
}