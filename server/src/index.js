const { GraphQLServer } = require('graphql-yoga')

// 1
let safaris = [{
    id: 'safari-0',
    title: '5 Days in the Mara',
    description: 'Game Drive in the morning, bird watching in the evening'
  }]

let idCount = safaris.length
const resolvers = {
    Query: {
        info: () => `This is the API of Msafiri`,
        feed: () => safaris,
    },

    Mutation: {
        post: (parent, args) => {
            const safari= {
                id: `safari-${idCount++}`,
                title: args.title,
                description: args.description
            }
            safaris.push(safari)
            return safari
        }
    }
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
})

server.start(() => console.log(`Server is running on http://localhost:4000`))