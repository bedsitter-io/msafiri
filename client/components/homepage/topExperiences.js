import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Safari from './Safari'

const FEED_QUERY = gql`
  {
    feed(first: 3) {
      count
      safaris {
        id
        title
        description
        likes {
          id
          user {
            id
          }
      }
      }
    }
  }
`

const ExperiencesList = () => {
    return (
      <Query query={FEED_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <div>Fetching</div>
        if (error) return <div>Error</div>
        const safarisToRender = data.feed.safaris

        return (
          <Query query={FEED_QUERY}>
            {() => safarisToRender.map(safari => <Safari key={safari.id} safari={safari}  />)}
          </Query>
        )
      }}
      </Query>
    )
}

export default ExperiencesList
