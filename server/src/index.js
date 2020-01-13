const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')

const resolvers = {
    Query: {
        info: () => `This is the API of Msafiri`,
        feed: (root, args, context, info) => {
            return context.prisma.safaris()
          },
    },

    Mutation: {
        post: (root, args, context) => {
          return context.prisma.createSafari({
            title: args.title,
            description: args.description,
          })
        },
      },
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: { prisma },
})

server.start(() => console.log(`Server is running on http://localhost:4000`))