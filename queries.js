const promise = require('bluebird')

const options = {
  // INIT OPTIONS
  promiseLib: promise
}

const pgp = require('pg-promise')(options)
const connectionString = 'postgres://localhost:5432/puppies'
const db = pgp(connectionString)

// QUERY FUNCTIONS

getAllPuppies = (req, res, next) => {
  db.any('select * from pups')
    .then((data) => {
      res.status(200)
      .json({
        status: 'success',
        data: data,
        message: 'Got all them puppies. awe'
      })
    })
    .catch((err) => {
      return next(err)
    })
}

getSinglePuppy = (req, res, next) => {
  const pupID = parseInt(req.params.id)
  db.one('select * from pups where id = $1', pupID)
    .then((data) => {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Got ONE puppy. awe'
        })
    })
    .catch((err) => {
      return next(err)
    })
}

createPuppy = (req, res, next) => {
  req.body.age = parseInt(req.body.age)
  db.none('insert into pups(name, breed, age, sex)' + 'values(${name}, ${breed}, ${age}, ${sex})', req.body)
  .then(() => {
    res.status(200)
    .json({
      status: 'success',
      message: 'Just made a new puppy. awe'
    })
  })
  .catch((err) => {
    return next(err)
  })
}

updatePuppy = (req, res, next) => {
  db.none('update pups set name=$1, breed=$2, age=$3, sex=$4 where id =$5', [req.body.name, req.body.breed, Number(req.body.age), req.body.sex, Number(req.params.id)])
    .then(() => {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated puppy. awe'
        })
    })
    .catch((err) => {
      return next(err)
    })
}

removePuppy = (req, res, next) => {
  const pupID = parseInt(req.params.id)
  db.result('delete from pups where id =$1', pupID)
    .then((result) => {
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} puppy. awe :(`
        })
    })
    .catch((err) => {
      return next(err)
    })
}

module.exports = {
  getAllPuppies: getAllPuppies,
  getSinglePuppy: getSinglePuppy,
  createPuppy: createPuppy,
  updatePuppy: updatePuppy,
  removePuppy: removePuppy
}

