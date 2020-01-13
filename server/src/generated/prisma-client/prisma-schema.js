module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateSafari {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createSafari(data: SafariCreateInput!): Safari!
  updateSafari(data: SafariUpdateInput!, where: SafariWhereUniqueInput!): Safari
  updateManySafaris(data: SafariUpdateManyMutationInput!, where: SafariWhereInput): BatchPayload!
  upsertSafari(where: SafariWhereUniqueInput!, create: SafariCreateInput!, update: SafariUpdateInput!): Safari!
  deleteSafari(where: SafariWhereUniqueInput!): Safari
  deleteManySafaris(where: SafariWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  safari(where: SafariWhereUniqueInput!): Safari
  safaris(where: SafariWhereInput, orderBy: SafariOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Safari]!
  safarisConnection(where: SafariWhereInput, orderBy: SafariOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SafariConnection!
  node(id: ID!): Node
}

type Safari {
  id: ID!
  createdAt: DateTime!
  title: String!
  description: String!
}

type SafariConnection {
  pageInfo: PageInfo!
  edges: [SafariEdge]!
  aggregate: AggregateSafari!
}

input SafariCreateInput {
  title: String!
  description: String!
}

type SafariEdge {
  node: Safari!
  cursor: String!
}

enum SafariOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
}

type SafariPreviousValues {
  id: ID!
  createdAt: DateTime!
  title: String!
  description: String!
}

type SafariSubscriptionPayload {
  mutation: MutationType!
  node: Safari
  updatedFields: [String!]
  previousValues: SafariPreviousValues
}

input SafariSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SafariWhereInput
  AND: [SafariSubscriptionWhereInput!]
  OR: [SafariSubscriptionWhereInput!]
  NOT: [SafariSubscriptionWhereInput!]
}

input SafariUpdateInput {
  title: String
  description: String
}

input SafariUpdateManyMutationInput {
  title: String
  description: String
}

input SafariWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [SafariWhereInput!]
  OR: [SafariWhereInput!]
  NOT: [SafariWhereInput!]
}

input SafariWhereUniqueInput {
  id: ID
}

type Subscription {
  safari(where: SafariSubscriptionWhereInput): SafariSubscriptionPayload
}
`
      }
    