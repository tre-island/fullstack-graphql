const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('api/src/db/db.json')
const db = low(adapter)

const createUserModel = require('./hero')

module.exports = {
  models: {
    Hero: createUserModel(db),
  },
  db
}
