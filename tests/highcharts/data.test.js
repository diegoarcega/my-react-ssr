'use strict'

const assert = require('chai').assert
const expect = require('chai').expect
const dataArray = require('./data.json').result[0].result


describe('Data json file', function(){
  it('should return an object of length 6', function(done){
    assert.equal(Object.keys(dataArray[0]).length,6)
    done()
  })

  it('Have all keys', function(done){
    expect(dataArray[0]).to.have.all.keys(Object.keys(dataArray[0]))
    done()
  })

  it('object values type checking', function(done){
    assert.isString(dataArray[0].time, 'time')
    assert.isString(dataArray[0].variable, 'variable')
    assert.isString(dataArray[0].origin, 'origin')
    assert.isString(dataArray[0].unit, 'unit')
    expect(dataArray[0].value).to.be.a('number')
    assert.isString(dataArray[0].id, 'id')
    done()
  })
})
