const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String!
        email: String!
        password: String!
        createdAt: String!
    }
    type List {
        _id: ID
        name: String!
        createdAt: String!
        tags: [Tag]
    }
    type Tag {
        _id: ID
        name: String!
        createdAt: String!
    }
    type Query {
        users: [User]
        user(username: String!): User
        me: User
        loggedIn: String
    }
    type Mutation {
        signup(username: String!, email: String!, password: String!): User
        login(email: String!, password: String!): User
        logout: User
        addList(name: String!): List
        addTag(name: String!): Tag
    }
`

module.exports = typeDefs;