import React from 'react'
import Layout from '../components/Layout'
import CardRoll from '../components/CardRoll'

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <p id="recent"> Recent Posts</p>
        <CardRoll></CardRoll>
      </div>
    </Layout>
  )
}

export default IndexPage
 