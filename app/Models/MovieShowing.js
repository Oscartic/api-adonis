'use strict'

const Model = use('Model')

class MovieShowing extends Model {


  static get createdAtColumn() {
    return null
  }

  static get updatedAtColumn() {
    return null
  }

  movie() {
    return this.belongsTo('App/Models/Movie')
  }

  movie_showing_times() {
    return this.hasMany('App/Models/MovieShowing/time')
  }

  room() {
    return this.belongsTo('App/Models/room')
  }

  cinema() {
    return this.belongsTo('App/Models/Cinema')
  }

}

module.exports = MovieShowing
