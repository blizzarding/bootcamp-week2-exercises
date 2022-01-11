const { HasManyRelation, ManyToManyRelation } = require('./BaseModel')
const BaseModel = require('./BaseModel')

class User extends BaseModel {
  static get tableName() {
    return 'users'
  }

  static get relationMappings() {
    const Pet = require('./Pet')
    return {
      pets: {
        relation: HasManyRelation, 
        modelClass: Pet,
        join: {
          from: 'users.id',
          to: 'pets.ownerId',
        },
      },
      child: {
        relation: ManyToManyRelation,
        
      }
    }
  }
}

module.exports = User
