const nanoid = require('nanoid')

const createHeroModel = db => {
  return {
    findMany(filter) {
      return db.get('hero')
        .filter(filter)
        .orderBy(['createdAt'], ['desc'])
        .value()
    },

    findOne(filter) {
      return db.get('hero')
        .find(filter)
        .value()
    },

    create(hero) {
      const newHero = {id: nanoid(), createdAt: Date.now(), ...hero}
      db.get('hero')
        .push(newHero)
        .write()
  
      return newHero
    }
  }
}

module.exports = createHeroModel
