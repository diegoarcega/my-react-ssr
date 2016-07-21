import express from 'express'
import { MongoClient, ObjectID } from 'mongodb'
import assert from 'assert'

const url = 'mongodb://localhost:27017/test'

// const oneTodo  = {
//   id: 1,
//   text: 'first todo from mongodb',
//   completed: false
// }
// const insertTodo = function insertTodo(db, callback){
//   db.collection('todos').insertOne(oneTodo, function insertSuccess(err, result){
//     assert.equal(err, null)
//     console.log('document inserted successfully')
//     console.log(result)
//     callback()
//   })
// }

// const get = function get(){
//
// }






const router = express.Router()

router
  .get('/get', (req, res)=>{

    const getTodos = (db, callback) => {
       db.collection('todos').find().toArray((err, docs)=>{
        res.send(docs)
      })
      callback()
    }

    MongoClient.connect(url, (err, db) => {
      assert.equal(null, err)
      getTodos(db, function(){
        db.close()
      })
    })

  })
  .get('/create', (req, res) => {
    res.json('/create')
  })
  .get('/delete', (req, res) => {
    res.json('/delete')
  })
  .get('/update', (req, res) => {
    res.json('/update')
  })

export default router
