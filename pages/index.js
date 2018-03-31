import Link from 'next/link';
const {key: _APIKEY} = require('../apikey')

export default () => (
  <div>
    <h1>Welcome to Baby Wiper ${_APIKEY}</h1>
  </div>
);
