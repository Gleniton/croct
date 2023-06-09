import path from 'path'
import knex from 'knex'

export const knexDb = knex({
    client: "better-sqlite3",
    connection: {
        filename: path.join('src', 'inputs', 'IPs.sqlite'),
    },
    useNullAsDefault: true
})
