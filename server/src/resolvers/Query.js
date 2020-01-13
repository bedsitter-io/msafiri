function feed(parent, args, context, info) {
    return context.prisma.safaris()
  }
  
  module.exports = {
    feed,
  }