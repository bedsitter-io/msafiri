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
  like: (where?: LikeWhereInput) => Promise<boolean>;
  safari: (where?: SafariWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
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

  like: (where: LikeWhereUniqueInput) => LikeNullablePromise;
  likes: (args?: {
    where?: LikeWhereInput;
    orderBy?: LikeOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Like>;
  likesConnection: (args?: {
    where?: LikeWhereInput;
    orderBy?: LikeOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => LikeConnectionPromise;
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
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createLike: (data: LikeCreateInput) => LikePromise;
  updateLike: (args: {
    data: LikeUpdateInput;
    where: LikeWhereUniqueInput;
  }) => LikePromise;
  upsertLike: (args: {
    where: LikeWhereUniqueInput;
    create: LikeCreateInput;
    update: LikeUpdateInput;
  }) => LikePromise;
  deleteLike: (where: LikeWhereUniqueInput) => LikePromise;
  deleteManyLikes: (where?: LikeWhereInput) => BatchPayloadPromise;
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
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  like: (
    where?: LikeSubscriptionWhereInput
  ) => LikeSubscriptionPayloadSubscription;
  safari: (
    where?: SafariSubscriptionWhereInput
  ) => SafariSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
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

export type LikeOrderByInput = "id_ASC" | "id_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "email_ASC"
  | "email_DESC"
  | "password_ASC"
  | "password_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type LikeWhereUniqueInput = AtLeastOne<{
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
  postedBy?: Maybe<UserWhereInput>;
  likes_every?: Maybe<LikeWhereInput>;
  likes_some?: Maybe<LikeWhereInput>;
  likes_none?: Maybe<LikeWhereInput>;
  AND?: Maybe<SafariWhereInput[] | SafariWhereInput>;
  OR?: Maybe<SafariWhereInput[] | SafariWhereInput>;
  NOT?: Maybe<SafariWhereInput[] | SafariWhereInput>;
}

export interface UserWhereInput {
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
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  email?: Maybe<String>;
  email_not?: Maybe<String>;
  email_in?: Maybe<String[] | String>;
  email_not_in?: Maybe<String[] | String>;
  email_lt?: Maybe<String>;
  email_lte?: Maybe<String>;
  email_gt?: Maybe<String>;
  email_gte?: Maybe<String>;
  email_contains?: Maybe<String>;
  email_not_contains?: Maybe<String>;
  email_starts_with?: Maybe<String>;
  email_not_starts_with?: Maybe<String>;
  email_ends_with?: Maybe<String>;
  email_not_ends_with?: Maybe<String>;
  password?: Maybe<String>;
  password_not?: Maybe<String>;
  password_in?: Maybe<String[] | String>;
  password_not_in?: Maybe<String[] | String>;
  password_lt?: Maybe<String>;
  password_lte?: Maybe<String>;
  password_gt?: Maybe<String>;
  password_gte?: Maybe<String>;
  password_contains?: Maybe<String>;
  password_not_contains?: Maybe<String>;
  password_starts_with?: Maybe<String>;
  password_not_starts_with?: Maybe<String>;
  password_ends_with?: Maybe<String>;
  password_not_ends_with?: Maybe<String>;
  safaris_every?: Maybe<SafariWhereInput>;
  safaris_some?: Maybe<SafariWhereInput>;
  safaris_none?: Maybe<SafariWhereInput>;
  likes_every?: Maybe<LikeWhereInput>;
  likes_some?: Maybe<LikeWhereInput>;
  likes_none?: Maybe<LikeWhereInput>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export interface LikeWhereInput {
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
  safari?: Maybe<SafariWhereInput>;
  user?: Maybe<UserWhereInput>;
  AND?: Maybe<LikeWhereInput[] | LikeWhereInput>;
  OR?: Maybe<LikeWhereInput[] | LikeWhereInput>;
  NOT?: Maybe<LikeWhereInput[] | LikeWhereInput>;
}

export type SafariWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  email?: Maybe<String>;
}>;

export interface LikeCreateInput {
  safari: SafariCreateOneWithoutLikesInput;
  user: UserCreateOneWithoutLikesInput;
}

export interface SafariCreateOneWithoutLikesInput {
  create?: Maybe<SafariCreateWithoutLikesInput>;
  connect?: Maybe<SafariWhereUniqueInput>;
}

export interface SafariCreateWithoutLikesInput {
  title: String;
  description: String;
  postedBy?: Maybe<UserCreateOneWithoutSafarisInput>;
}

export interface UserCreateOneWithoutSafarisInput {
  create?: Maybe<UserCreateWithoutSafarisInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateWithoutSafarisInput {
  name: String;
  email: String;
  password: String;
  likes?: Maybe<LikeCreateManyWithoutUserInput>;
}

export interface LikeCreateManyWithoutUserInput {
  create?: Maybe<LikeCreateWithoutUserInput[] | LikeCreateWithoutUserInput>;
  connect?: Maybe<LikeWhereUniqueInput[] | LikeWhereUniqueInput>;
}

export interface LikeCreateWithoutUserInput {
  safari: SafariCreateOneWithoutLikesInput;
}

export interface UserCreateOneWithoutLikesInput {
  create?: Maybe<UserCreateWithoutLikesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateWithoutLikesInput {
  name: String;
  email: String;
  password: String;
  safaris?: Maybe<SafariCreateManyWithoutPostedByInput>;
}

export interface SafariCreateManyWithoutPostedByInput {
  create?: Maybe<
    SafariCreateWithoutPostedByInput[] | SafariCreateWithoutPostedByInput
  >;
  connect?: Maybe<SafariWhereUniqueInput[] | SafariWhereUniqueInput>;
}

export interface SafariCreateWithoutPostedByInput {
  title: String;
  description: String;
  likes?: Maybe<LikeCreateManyWithoutSafariInput>;
}

export interface LikeCreateManyWithoutSafariInput {
  create?: Maybe<LikeCreateWithoutSafariInput[] | LikeCreateWithoutSafariInput>;
  connect?: Maybe<LikeWhereUniqueInput[] | LikeWhereUniqueInput>;
}

export interface LikeCreateWithoutSafariInput {
  user: UserCreateOneWithoutLikesInput;
}

export interface LikeUpdateInput {
  safari?: Maybe<SafariUpdateOneRequiredWithoutLikesInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutLikesInput>;
}

export interface SafariUpdateOneRequiredWithoutLikesInput {
  create?: Maybe<SafariCreateWithoutLikesInput>;
  update?: Maybe<SafariUpdateWithoutLikesDataInput>;
  upsert?: Maybe<SafariUpsertWithoutLikesInput>;
  connect?: Maybe<SafariWhereUniqueInput>;
}

export interface SafariUpdateWithoutLikesDataInput {
  title?: Maybe<String>;
  description?: Maybe<String>;
  postedBy?: Maybe<UserUpdateOneWithoutSafarisInput>;
}

export interface UserUpdateOneWithoutSafarisInput {
  create?: Maybe<UserCreateWithoutSafarisInput>;
  update?: Maybe<UserUpdateWithoutSafarisDataInput>;
  upsert?: Maybe<UserUpsertWithoutSafarisInput>;
  delete?: Maybe<Boolean>;
  disconnect?: Maybe<Boolean>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserUpdateWithoutSafarisDataInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
  likes?: Maybe<LikeUpdateManyWithoutUserInput>;
}

export interface LikeUpdateManyWithoutUserInput {
  create?: Maybe<LikeCreateWithoutUserInput[] | LikeCreateWithoutUserInput>;
  delete?: Maybe<LikeWhereUniqueInput[] | LikeWhereUniqueInput>;
  connect?: Maybe<LikeWhereUniqueInput[] | LikeWhereUniqueInput>;
  set?: Maybe<LikeWhereUniqueInput[] | LikeWhereUniqueInput>;
  disconnect?: Maybe<LikeWhereUniqueInput[] | LikeWhereUniqueInput>;
  update?: Maybe<
    | LikeUpdateWithWhereUniqueWithoutUserInput[]
    | LikeUpdateWithWhereUniqueWithoutUserInput
  >;
  upsert?: Maybe<
    | LikeUpsertWithWhereUniqueWithoutUserInput[]
    | LikeUpsertWithWhereUniqueWithoutUserInput
  >;
  deleteMany?: Maybe<LikeScalarWhereInput[] | LikeScalarWhereInput>;
}

export interface LikeUpdateWithWhereUniqueWithoutUserInput {
  where: LikeWhereUniqueInput;
  data: LikeUpdateWithoutUserDataInput;
}

export interface LikeUpdateWithoutUserDataInput {
  safari?: Maybe<SafariUpdateOneRequiredWithoutLikesInput>;
}

export interface LikeUpsertWithWhereUniqueWithoutUserInput {
  where: LikeWhereUniqueInput;
  update: LikeUpdateWithoutUserDataInput;
  create: LikeCreateWithoutUserInput;
}

export interface LikeScalarWhereInput {
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
  AND?: Maybe<LikeScalarWhereInput[] | LikeScalarWhereInput>;
  OR?: Maybe<LikeScalarWhereInput[] | LikeScalarWhereInput>;
  NOT?: Maybe<LikeScalarWhereInput[] | LikeScalarWhereInput>;
}

export interface UserUpsertWithoutSafarisInput {
  update: UserUpdateWithoutSafarisDataInput;
  create: UserCreateWithoutSafarisInput;
}

export interface SafariUpsertWithoutLikesInput {
  update: SafariUpdateWithoutLikesDataInput;
  create: SafariCreateWithoutLikesInput;
}

export interface UserUpdateOneRequiredWithoutLikesInput {
  create?: Maybe<UserCreateWithoutLikesInput>;
  update?: Maybe<UserUpdateWithoutLikesDataInput>;
  upsert?: Maybe<UserUpsertWithoutLikesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserUpdateWithoutLikesDataInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
  safaris?: Maybe<SafariUpdateManyWithoutPostedByInput>;
}

export interface SafariUpdateManyWithoutPostedByInput {
  create?: Maybe<
    SafariCreateWithoutPostedByInput[] | SafariCreateWithoutPostedByInput
  >;
  delete?: Maybe<SafariWhereUniqueInput[] | SafariWhereUniqueInput>;
  connect?: Maybe<SafariWhereUniqueInput[] | SafariWhereUniqueInput>;
  set?: Maybe<SafariWhereUniqueInput[] | SafariWhereUniqueInput>;
  disconnect?: Maybe<SafariWhereUniqueInput[] | SafariWhereUniqueInput>;
  update?: Maybe<
    | SafariUpdateWithWhereUniqueWithoutPostedByInput[]
    | SafariUpdateWithWhereUniqueWithoutPostedByInput
  >;
  upsert?: Maybe<
    | SafariUpsertWithWhereUniqueWithoutPostedByInput[]
    | SafariUpsertWithWhereUniqueWithoutPostedByInput
  >;
  deleteMany?: Maybe<SafariScalarWhereInput[] | SafariScalarWhereInput>;
  updateMany?: Maybe<
    | SafariUpdateManyWithWhereNestedInput[]
    | SafariUpdateManyWithWhereNestedInput
  >;
}

export interface SafariUpdateWithWhereUniqueWithoutPostedByInput {
  where: SafariWhereUniqueInput;
  data: SafariUpdateWithoutPostedByDataInput;
}

export interface SafariUpdateWithoutPostedByDataInput {
  title?: Maybe<String>;
  description?: Maybe<String>;
  likes?: Maybe<LikeUpdateManyWithoutSafariInput>;
}

export interface LikeUpdateManyWithoutSafariInput {
  create?: Maybe<LikeCreateWithoutSafariInput[] | LikeCreateWithoutSafariInput>;
  delete?: Maybe<LikeWhereUniqueInput[] | LikeWhereUniqueInput>;
  connect?: Maybe<LikeWhereUniqueInput[] | LikeWhereUniqueInput>;
  set?: Maybe<LikeWhereUniqueInput[] | LikeWhereUniqueInput>;
  disconnect?: Maybe<LikeWhereUniqueInput[] | LikeWhereUniqueInput>;
  update?: Maybe<
    | LikeUpdateWithWhereUniqueWithoutSafariInput[]
    | LikeUpdateWithWhereUniqueWithoutSafariInput
  >;
  upsert?: Maybe<
    | LikeUpsertWithWhereUniqueWithoutSafariInput[]
    | LikeUpsertWithWhereUniqueWithoutSafariInput
  >;
  deleteMany?: Maybe<LikeScalarWhereInput[] | LikeScalarWhereInput>;
}

export interface LikeUpdateWithWhereUniqueWithoutSafariInput {
  where: LikeWhereUniqueInput;
  data: LikeUpdateWithoutSafariDataInput;
}

export interface LikeUpdateWithoutSafariDataInput {
  user?: Maybe<UserUpdateOneRequiredWithoutLikesInput>;
}

export interface LikeUpsertWithWhereUniqueWithoutSafariInput {
  where: LikeWhereUniqueInput;
  update: LikeUpdateWithoutSafariDataInput;
  create: LikeCreateWithoutSafariInput;
}

export interface SafariUpsertWithWhereUniqueWithoutPostedByInput {
  where: SafariWhereUniqueInput;
  update: SafariUpdateWithoutPostedByDataInput;
  create: SafariCreateWithoutPostedByInput;
}

export interface SafariScalarWhereInput {
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
  AND?: Maybe<SafariScalarWhereInput[] | SafariScalarWhereInput>;
  OR?: Maybe<SafariScalarWhereInput[] | SafariScalarWhereInput>;
  NOT?: Maybe<SafariScalarWhereInput[] | SafariScalarWhereInput>;
}

export interface SafariUpdateManyWithWhereNestedInput {
  where: SafariScalarWhereInput;
  data: SafariUpdateManyDataInput;
}

export interface SafariUpdateManyDataInput {
  title?: Maybe<String>;
  description?: Maybe<String>;
}

export interface UserUpsertWithoutLikesInput {
  update: UserUpdateWithoutLikesDataInput;
  create: UserCreateWithoutLikesInput;
}

export interface SafariCreateInput {
  title: String;
  description: String;
  postedBy?: Maybe<UserCreateOneWithoutSafarisInput>;
  likes?: Maybe<LikeCreateManyWithoutSafariInput>;
}

export interface SafariUpdateInput {
  title?: Maybe<String>;
  description?: Maybe<String>;
  postedBy?: Maybe<UserUpdateOneWithoutSafarisInput>;
  likes?: Maybe<LikeUpdateManyWithoutSafariInput>;
}

export interface SafariUpdateManyMutationInput {
  title?: Maybe<String>;
  description?: Maybe<String>;
}

export interface UserCreateInput {
  name: String;
  email: String;
  password: String;
  safaris?: Maybe<SafariCreateManyWithoutPostedByInput>;
  likes?: Maybe<LikeCreateManyWithoutUserInput>;
}

export interface UserUpdateInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
  safaris?: Maybe<SafariUpdateManyWithoutPostedByInput>;
  likes?: Maybe<LikeUpdateManyWithoutUserInput>;
}

export interface UserUpdateManyMutationInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
}

export interface LikeSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<LikeWhereInput>;
  AND?: Maybe<LikeSubscriptionWhereInput[] | LikeSubscriptionWhereInput>;
  OR?: Maybe<LikeSubscriptionWhereInput[] | LikeSubscriptionWhereInput>;
  NOT?: Maybe<LikeSubscriptionWhereInput[] | LikeSubscriptionWhereInput>;
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

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Like {
  id: ID_Output;
}

export interface LikePromise extends Promise<Like>, Fragmentable {
  id: () => Promise<ID_Output>;
  safari: <T = SafariPromise>() => T;
  user: <T = UserPromise>() => T;
}

export interface LikeSubscription
  extends Promise<AsyncIterator<Like>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  safari: <T = SafariSubscription>() => T;
  user: <T = UserSubscription>() => T;
}

export interface LikeNullablePromise
  extends Promise<Like | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  safari: <T = SafariPromise>() => T;
  user: <T = UserPromise>() => T;
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
  postedBy: <T = UserPromise>() => T;
  likes: <T = FragmentableArray<Like>>(args?: {
    where?: LikeWhereInput;
    orderBy?: LikeOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface SafariSubscription
  extends Promise<AsyncIterator<Safari>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  title: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  postedBy: <T = UserSubscription>() => T;
  likes: <T = Promise<AsyncIterator<LikeSubscription>>>(args?: {
    where?: LikeWhereInput;
    orderBy?: LikeOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface SafariNullablePromise
  extends Promise<Safari | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  title: () => Promise<String>;
  description: () => Promise<String>;
  postedBy: <T = UserPromise>() => T;
  likes: <T = FragmentableArray<Like>>(args?: {
    where?: LikeWhereInput;
    orderBy?: LikeOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface User {
  id: ID_Output;
  name: String;
  email: String;
  password: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  safaris: <T = FragmentableArray<Safari>>(args?: {
    where?: SafariWhereInput;
    orderBy?: SafariOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  likes: <T = FragmentableArray<Like>>(args?: {
    where?: LikeWhereInput;
    orderBy?: LikeOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  safaris: <T = Promise<AsyncIterator<SafariSubscription>>>(args?: {
    where?: SafariWhereInput;
    orderBy?: SafariOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  likes: <T = Promise<AsyncIterator<LikeSubscription>>>(args?: {
    where?: LikeWhereInput;
    orderBy?: LikeOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  safaris: <T = FragmentableArray<Safari>>(args?: {
    where?: SafariWhereInput;
    orderBy?: SafariOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  likes: <T = FragmentableArray<Like>>(args?: {
    where?: LikeWhereInput;
    orderBy?: LikeOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface LikeConnection {
  pageInfo: PageInfo;
  edges: LikeEdge[];
}

export interface LikeConnectionPromise
  extends Promise<LikeConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<LikeEdge>>() => T;
  aggregate: <T = AggregateLikePromise>() => T;
}

export interface LikeConnectionSubscription
  extends Promise<AsyncIterator<LikeConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<LikeEdgeSubscription>>>() => T;
  aggregate: <T = AggregateLikeSubscription>() => T;
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

export interface LikeEdge {
  node: Like;
  cursor: String;
}

export interface LikeEdgePromise extends Promise<LikeEdge>, Fragmentable {
  node: <T = LikePromise>() => T;
  cursor: () => Promise<String>;
}

export interface LikeEdgeSubscription
  extends Promise<AsyncIterator<LikeEdge>>,
    Fragmentable {
  node: <T = LikeSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateLike {
  count: Int;
}

export interface AggregateLikePromise
  extends Promise<AggregateLike>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateLikeSubscription
  extends Promise<AsyncIterator<AggregateLike>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
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

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
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

export interface LikeSubscriptionPayload {
  mutation: MutationType;
  node: Like;
  updatedFields: String[];
  previousValues: LikePreviousValues;
}

export interface LikeSubscriptionPayloadPromise
  extends Promise<LikeSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = LikePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = LikePreviousValuesPromise>() => T;
}

export interface LikeSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<LikeSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = LikeSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = LikePreviousValuesSubscription>() => T;
}

export interface LikePreviousValues {
  id: ID_Output;
}

export interface LikePreviousValuesPromise
  extends Promise<LikePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
}

export interface LikePreviousValuesSubscription
  extends Promise<AsyncIterator<LikePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
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

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserPreviousValues {
  id: ID_Output;
  name: String;
  email: String;
  password: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
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
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "Like",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
