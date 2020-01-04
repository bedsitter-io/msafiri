import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Safari from './Safari'

const FEED_QUERY = gql`
  {
    feed {
        id
        title
        description
    }
  }
`

class SafariList extends Component {
  render() {
    return (
    <Query query={FEED_QUERY}>
      {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
    
          const safarisToRender = data.feed
    
          return (
            <div>
              {safarisToRender.map(safari => <Safari key={safari.id} safari={safari} />)}
            </div>
          )
        }}
    </Query>
    )
  }
}

export default SafariList