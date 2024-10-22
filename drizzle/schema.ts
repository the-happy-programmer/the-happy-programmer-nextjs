import {
  pgTable,
  foreignKey,
  text,
  timestamp,
  uuid,
  json,
  date,
  boolean,
  primaryKey,
  integer,
  pgTableCreator,
} from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'

export const session = pgTable(
  'session',
  {
    sessionToken: text().primaryKey().notNull(),
    userId: text().notNull(),
    expires: timestamp({ mode: 'string' }).notNull(),
  },
  (table) => {
    return {
      sessionUserIdSerIdFk: foreignKey({
        columns: [table.userId],
        foreignColumns: [user.id],
        name: 'session_userId_ser_id_fk',
      }).onDelete('cascade'),
    }
  },
)

export const user = pgTable('user', {
  id: text().primaryKey().notNull(),
  name: text(),
  email: text().notNull(),
  emailVerified: timestamp({ mode: 'string' }),
  image: text(),
})

export const verificationToken = pgTable(
  'verificationToken',
  {
    identifier: text().notNull(),
    token: text().notNull(),
    expires: timestamp({ mode: 'string' }).notNull(),
  },
  (table) => {
    return {
      verificationTokenIdentifierTokenPk: primaryKey({
        columns: [table.identifier, table.token],
        name: 'verificationToken_identifier_token_pk',
      }),
    }
  },
)

export const account = pgTable(
  'account',
  {
    userId: text().notNull(),
    type: text().notNull(),
    provider: text().notNull(),
    providerAccountId: text().notNull(),
    refreshToken: text('refresh_token'),
    accessToken: text('access_token'),
    expiresAt: integer('expires_at'),
    tokenType: text('token_type'),
    scope: text(),
    idToken: text('id_token'),
    sessionState: text('session_state'),
  },
  (table) => {
    return {
      accountUserIdUserIdFk: foreignKey({
        columns: [table.userId],
        foreignColumns: [user.id],
        name: 'account_userId_user_id_fk',
      }).onDelete('cascade'),
      accountProviderProviderAccountIdPk: primaryKey({
        columns: [table.provider, table.providerAccountId],
        name: 'account_provider_providerAccountId_pk',
      }),
    }
  },
)

export const authenticator = pgTable(
  'authenticator',
  {
    credentialId: text().notNull(),
    userId: text().notNull(),
    providerAccountId: text().notNull(),
    credentialPublicKey: text().notNull(),
    counter: integer().notNull(),
    credentialDeviceType: text().notNull(),
    credentialBackedUp: boolean().notNull(),
    transports: text(),
  },
  (table) => {
    return {
      authenticatorUserIdUserIdFk: foreignKey({
        columns: [table.userId],
        foreignColumns: [user.id],
        name: 'authenticator_userId_user_id_fk',
      }).onDelete('cascade'),
      authenticatorUserIdCredentialIdPk: primaryKey({
        columns: [table.credentialId, table.userId],
        name: 'authenticator_userId_credentialID_pk',
      }),
    }
  },
)

export const post = pgTable(
  'post',
  {
    id: uuid().defaultRandom().primaryKey().notNull(),
    title: text().notNull(),
    description: text().notNull(),
    tags: json().notNull(),
    userId: text('user_id').notNull(),
    avatar: text().notNull(),
    categories: json().notNull(),
    heroImage: text('hero_image').notNull(),
    pugDate: date(),
    modifDate: date(),
    postContent: text('post_content').notNull(),
    newPost: boolean('new_post'),
  },
  (table) => {
    return {
      userIdFk: foreignKey({
        columns: [table.userId],
        foreignColumns: [user.id],
        name: 'user_id_fk',
      }),
    }
  },
)

export const postRelations = relations(post, ({ many }) => ({
  postsTags: many(postTags),
  postsCategories: many(postCategories),
}))

export const tags = pgTable('tags', {
  id: uuid().defaultRandom().primaryKey().notNull(),
  name: text('name').notNull(),
})

export const tagsRelations = relations(tags, ({ many }) => ({
  postsTags: many(postTags),
}))

export const categories = pgTable('categories', {
  id: uuid().defaultRandom().primaryKey().notNull(),
  name: text('name').notNull(),
})

export const categoriesRelations = relations(categories, ({ many }) => ({
  postCategories: many(postCategories),
}))

export const postCategories = pgTable(
  'post_categories',
  {
    postId: uuid('post_id')
      .references(() => post.id)
      .notNull(),
    categoriesId: uuid('categories_id')
      .references(() => categories.id)
      .notNull(),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.postId, t.categoriesId] }),
  }),
)

export const postTags = pgTable(
  'post_tags',
  {
    postId: uuid('post_id')
      .references(() => post.id)
      .notNull(),
    tagsId: uuid('tags_id')
      .references(() => tags.id)
      .notNull(),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.postId, t.tagsId] }),
  }),
)

export const tagsToPosts = relations(postTags, ({ one }) => ({
  post: one(post, {
    fields: [postTags.postId],
    references: [post.id],
  }),
  tags: one(tags, {
    fields: [postTags.tagsId],
    references: [tags.id],
  }),
}))

export const categoriesToPost = relations(postCategories, ({ one }) => ({
  post: one(post, {
    fields: [postCategories.postId],
    references: [post.id],
  }),
  tags: one(categories, {
    fields: [postCategories.categoriesId],
    references: [categories.id],
  }),
}))
