// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  safari: (where?: SafariWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  safari: (where: SafariWhereUniqueInput) => SafariNullablePromise;
  safaris: (args?: {
    where?: SafariWhereInput;
    orderBy?: SafariOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Safari>;
  safarisConnection: (args?: {
    where?: SafariWhereInput;
    orderBy?: SafariOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => SafariConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createSafari: (data: SafariCreateInput) => SafariPromise;
  updateSafari: (args: {
    data: SafariUpdateInput;
    where: SafariWhereUniqueInput;
  }) => SafariPromise;
  updateManySafaris: (args: {
    data: SafariUpdateManyMutationInput;
    where?: SafariWhereInput;
  }) => BatchPayloadPromise;
  upsertSafari: (args: {
    where: SafariWhereUniqueInput;
    create: SafariCreateInput;
    update: SafariUpdateInput;
  }) => SafariPromise;
  deleteSafari: (where: SafariWhereUniqueInput) => SafariPromise;
  deleteManySafaris: (where?: SafariWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  safari: (
    where?: SafariSubscriptionWhereInput
  ) => SafariSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type SafariOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "title_ASC"
  | "title_DESC"
  | "description_ASC"
  | "description_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type SafariWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface SafariWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  description?: Maybe<String>;
  description_not?: Maybe<String>;
  description_in?: Maybe<String[] | String>;
  description_not_in?: Maybe<String[] | String>;
  description_lt?: Maybe<String>;
  description_lte?: Maybe<String>;
  description_gt?: Maybe<String>;
  description_gte?: Maybe<String>;
  description_contains?: Maybe<String>;
  description_not_contains?: Maybe<String>;
  description_starts_with?: Maybe<String>;
  description_not_starts_with?: Maybe<String>;
  description_ends_with?: Maybe<String>;
  description_not_ends_with?: Maybe<String>;
  AND?: Maybe<SafariWhereInput[] | SafariWhereInput>;
  OR?: Maybe<SafariWhereInput[] | SafariWhereInput>;
  NOT?: Maybe<SafariWhereInput[] | SafariWhereInput>;
}

export interface SafariCreateInput {
  title: String;
  description: String;
}

export interface SafariUpdateInput {
  title?: Maybe<String>;
  description?: Maybe<String>;
}

export interface SafariUpdateManyMutationInput {
  title?: Maybe<String>;
  description?: Maybe<String>;
}

export interface SafariSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<SafariWhereInput>;
  AND?: Maybe<SafariSubscriptionWhereInput[] | SafariSubscriptionWhereInput>;
  OR?: Maybe<SafariSubscriptionWhereInput[] | SafariSubscriptionWhereInput>;
  NOT?: Maybe<SafariSubscriptionWhereInput[] | SafariSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Safari {
  id: ID_Output;
  createdAt: DateTimeOutput;
  title: String;
  description: String;
}

export interface SafariPromise extends Promise<Safari>, Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  title: () => Promise<String>;
  description: () => Promise<String>;
}

export interface SafariSubscription
  extends Promise<AsyncIterator<Safari>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  title: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
}

export interface SafariNullablePromise
  extends Promise<Safari | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  title: () => Promise<String>;
  description: () => Promise<String>;
}

export interface SafariConnection {
  pageInfo: PageInfo;
  edges: SafariEdge[];
}

export interface SafariConnectionPromise
  extends Promise<SafariConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<SafariEdge>>() => T;
  aggregate: <T = AggregateSafariPromise>() => T;
}

export interface SafariConnectionSubscription
  extends Promise<AsyncIterator<SafariConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<SafariEdgeSubscription>>>() => T;
  aggregate: <T = AggregateSafariSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface SafariEdge {
  node: Safari;
  cursor: String;
}

export interface SafariEdgePromise extends Promise<SafariEdge>, Fragmentable {
  node: <T = SafariPromise>() => T;
  cursor: () => Promise<String>;
}

export interface SafariEdgeSubscription
  extends Promise<AsyncIterator<SafariEdge>>,
    Fragmentable {
  node: <T = SafariSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateSafari {
  count: Int;
}

export interface AggregateSafariPromise
  extends Promise<AggregateSafari>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateSafariSubscription
  extends Promise<AsyncIterator<AggregateSafari>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface SafariSubscriptionPayload {
  mutation: MutationType;
  node: Safari;
  updatedFields: String[];
  previousValues: SafariPreviousValues;
}

export interface SafariSubscriptionPayloadPromise
  extends Promise<SafariSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = SafariPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = SafariPreviousValuesPromise>() => T;
}

export interface SafariSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<SafariSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = SafariSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = SafariPreviousValuesSubscription>() => T;
}

export interface SafariPreviousValues {
  id: ID_Output;
  createdAt: DateTimeOutput;
  title: String;
  description: String;
}

export interface SafariPreviousValuesPromise
  extends Promise<SafariPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  title: () => Promise<String>;
  description: () => Promise<String>;
}

export interface SafariPreviousValuesSubscription
  extends Promise<AsyncIterator<SafariPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  title: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Safari",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
