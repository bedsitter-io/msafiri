function postedBy(parent, args, context) {
    return context.prisma.safari({ id: parent.id }).postedBy()
  }
  
  module.exports = {
    postedBy,
  }