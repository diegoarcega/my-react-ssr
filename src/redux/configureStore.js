import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducers from './reducers'


const configureStore = () => {
	let chromeDevTools = window.devToolsExtension ? window.devToolsExtension() : f => f
	let composed =  compose( applyMiddleware(thunk), chromeDevTools)
	return createStore( rootReducers, composed)
}

export default configureStore