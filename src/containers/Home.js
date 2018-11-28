import React from 'react'
import { withSiteData } from 'react-static'
import A from '../components/A'

export default withSiteData(() => (
  <div>
    <h1 style={{ textAlign: 'center' }}>Welcome to</h1>
      <A />
  </div>
))
