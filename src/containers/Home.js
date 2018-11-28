import React from 'react'
import { withSiteData } from 'react-static'
import A from '../components/AutoComplete'
import Calendar from '../components/Calendar'

export default withSiteData(() => (
  <div>
    <h1 style={{ textAlign: 'center' }}>Welcome to</h1>
      <A />
      <Calendar />
  </div>
))
