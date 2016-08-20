import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducers from './reducers'

let composed, chromeDevTools

if(typeof window === 'undefined'){
  composed = compose(applyMiddleware(thunk))
}else{
	chromeDevTools = window.devToolsExtension ? window.devToolsExtension() : f => f
	composed = compose(applyMiddleware(thunk), chromeDevTools)
}


const configureStore = () => {
	return createStore(rootReducers, composed)
}

export default configureStore
