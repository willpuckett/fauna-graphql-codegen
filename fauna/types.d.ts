//THIS FILE IS AUTOGENERATED AND WILL BE OVERWRITTEN.
//DO NOT EDIT.

type Maybe<T> = T | null
type InputMaybe<T> = Maybe<T>
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
type MakeOptional<T, K extends keyof T> =
  & Omit<T, K>
  & { [SubKey in K]?: Maybe<T[SubKey]> }
type MakeMaybe<T, K extends keyof T> =
  & Omit<T, K>
  & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
declare interface Scalars {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

declare interface ICreatePostInput {
  body?: InputMaybe<Scalars['String']>
  coverImage?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['String']>
  title: Scalars['String']
}

declare interface IMutation {
  createPost?: Maybe<IPost>
}

declare interface IMutationCreatePostArgs {
  input: ICreatePostInput
}

declare interface IPost {
  author: IUser
  body?: Maybe<Scalars['String']>
  coverImage?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  title: Scalars['String']
}

declare interface IQuery {
  post?: Maybe<IPost>
  posts?: Maybe<Array<Maybe<IPost>>>
}

declare interface IQueryPostArgs {
  id: Scalars['ID']
}

declare interface IUser {
  avatar?: Maybe<Scalars['String']>
  email: Scalars['String']
  id: Scalars['ID']
  name: Scalars['String']
}