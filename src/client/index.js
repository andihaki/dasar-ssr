//CLIENT file
import 'babel-polyfill' //used for async await
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux' //
import thunk from 'redux-thunk' //asyncronous task
import { Provider } from 'react-redux' //menghubungkan store & react
import { renderRoutes } from 'react-router-config'
import axios from 'axios'
import Routes from './Routes'
import reducers from './reducers'

const axiosInstance = axios.create({
  baseURL: '/api'
})

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
) //{} = initial state

//belum tahu kenapa, tapi pakai .render muncul error
//provider store: lempar state sebagai props
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      {/*print out Routes withour (actually) rendering it*/}
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
)
