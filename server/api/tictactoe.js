import express from 'express'
import DataSet from './dataset'
const router = express.Router()

let state = {
  grid: DataSet.get(),
  currentPlayer: 'none',
};

router
  .get('/get/new', (req, res)=>{
    res.send({
      grid: DataSet.get(),
      currentPlayer: 'none'
    })
  })
  .get('/get/current', (req, res)=>{
    res.send(state)
  })
  .post('/set', (req, res) => {
    state = {
      grid: req.body.grid,
      currentPlayer: req.body.currentPlayer
    }
  })


export default router
