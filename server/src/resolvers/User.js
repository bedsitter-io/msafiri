function safaris(parent, args, context) {
    return context.prisma.user({ id: parent.id }).safaris()
  }
  
  module.exports = {
    safaris,
  }