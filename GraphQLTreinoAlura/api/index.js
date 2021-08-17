const { ApolloServer } = require('apollo-server');
const useSchema = require('./user/schema/user.graphql')
const userResolvers = require('./user/resolvers/userResolvers');
const UsersAPI = require('./user/datasource/users');


const typeDefs = [useSchema]
const resolvers = [userResolvers]

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            UsersAPI: new UsersAPI()
        }
    }
})

server.listen().then(({ url }) => {
    console.log(`Servidor rodando na porta ${url}`)
})