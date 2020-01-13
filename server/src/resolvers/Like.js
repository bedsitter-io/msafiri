function safari(parent, args, context) {
    return context.prisma.like({ id: parent.id }).safari()
  }
  
function user(parent, args, context) {
    return context.prisma.like({ id: parent.id }).user()
  }
  
  module.exports = {
    safari,
    user,
  }