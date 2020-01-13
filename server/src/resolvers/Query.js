async function feed(parent, args, context, info) {
    const where = args.filter ? {
      OR: [
        { description_contains: args.filter },
        { title_contains: args.filter },
      ],
    } : {}
  
    const safaris = await context.prisma.safaris({
        where,
        skip: args.skip,
        first: args.first,
        orderBy: args.orderBy
        })  
    const count = await context.prisma
        .safarisConnection({
        where,
        })
        .aggregate()
        .count()
    return {
        safaris,
        count,
    }
}

  module.exports = {
    feed,
  }