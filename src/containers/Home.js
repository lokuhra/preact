import React from 'react'
import { withSiteData } from 'react-static'
import SearchBox from '../components/SearchBox'

export default withSiteData(() => (
  <div>
    <h1 style={{ textAlign: 'center' }}>Welcome to</h1>
      <SearchBox />
  </div>
))
