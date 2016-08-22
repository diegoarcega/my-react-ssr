import express from 'express'
const router = express.Router()

router
  .get('/get', (req, res)=>{
    res.send('/get')
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
