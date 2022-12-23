/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  addSeries: Series;
  addShot: Shot;
  createSession: Session;
  removeShot: Shot;
  updateShot: Shot;
};


export type MutationAddSeriesArgs = {
  sessionId: Scalars['ID'];
};


export type MutationAddShotArgs = {
  inner?: Scalars['Boolean'];
  score: Scalars['Int'];
  seriesId: Scalars['ID'];
};


export type MutationCreateSessionArgs = {
  date: Scalars['String'];
  name: Scalars['String'];
};


export type MutationRemoveShotArgs = {
  shotId: Scalars['ID'];
};


export type MutationUpdateShotArgs = {
  score: Scalars['Int'];
  shotId: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  series?: Maybe<Series>;
  session?: Maybe<Session>;
  sessions: Array<Session>;
};


export type QuerySeriesArgs = {
  id: Scalars['ID'];
};


export type QuerySessionArgs = {
  id: Scalars['ID'];
};

export type Series = {
  __typename?: 'Series';
  id: Scalars['ID'];
  order: Scalars['Int'];
  session: Session;
  shots: Array<Shot>;
};

export type Session = {
  __typename?: 'Session';
  date: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  series: Array<Series>;
};

export type Shot = {
  __typename?: 'Shot';
  id: Scalars['ID'];
  inner: Scalars['Boolean'];
  score: Scalars['Int'];
  series: Series;
};

export type SessionsQueryVariables = Exact<{ [key: string]: never; }>;


export type SessionsQuery = { __typename?: 'Query', sessions: Array<{ __typename?: 'Session', id: string, name: string, date: string, series: Array<{ __typename?: 'Series', id: string, order: number, shots: Array<{ __typename?: 'Shot', id: string, score: number, inner: boolean }> }> }> };


export const SessionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Sessions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sessions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"series"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"order"}},{"kind":"Field","name":{"kind":"Name","value":"shots"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"inner"}}]}}]}}]}}]}}]} as unknown as DocumentNode<SessionsQuery, SessionsQueryVariables>;