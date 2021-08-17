const arrayUsers = [
    {
        nome: "Ana",
        ativo: true
    },
    {
        nome: "Professor",
        ativo: false
    }
]

const userResolvers = {
    Query: {
        users: () => arrayUsers,
       
    }
}

module.exports = userResolvers