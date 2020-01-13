function newSafariSubscribe(parent, args, context, info) {
    return context.prisma.$subscribe.safari({ mutation_in: ['CREATED'] }).node()
  }
  
const newSafari = {
    subscribe: newSafariSubscribe,
    resolve: payload => {
      return payload
    },
  }

function newLikeSubscribe(parent, args, context, info) {
    return context.prisma.$subscribe.like({ mutation_in: ['CREATED'] }).node()
  }
  
const newLike = {
    subscribe: newLikeSubscribe,
    resolve: payload => {
      return payload
    },
  }
  
  module.exports = {
    newSafari,
    newLike
  }