//SERVER side
import 'babel-polyfill' //used for async await
import express from 'express' //let express = require('express')
import { matchRoutes } from 'react-router-config'
import proxy from 'express-http-proxy' //this case, used for authentication
import Routes from './client/Routes'
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'

const app = express()

//forward to proxy, if request contain '/api'
app.use(
  '/api',
  proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts){
      opts.headers['x-forwarded-host'] = 'localhost:3000'
      return opts
    }
  })
)
app.use(express.static('public')); //public folder dibaca sebagai static resource
//* = accept semua url, baik / atau /blog
app.get('*', (req, res) => {
  const store = createStore(req)

  //Routes: list url, req.path: url yang di request user
  //akan return array dari promise pending network request
  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      //call loadData
      return route.loadData ? route.loadData(store) : null;
    })
    .map(promise => {
      //this is for error handling if user not logged in
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve)
        })
      }
    })


  Promise.all(promises).then(() => {
    const context = {}
    const content = renderer(req, store, context)

    //redirect to the 'url' if user not authorized
    //301 = temporary redirect
    if (context.url) return res.redirect(301, context.url)
    //give error message, 404 page
    if (context.notFound) res.status(404)
    res.send(content) //include argumen 'req'
  })

 //  console.log(promises);
 //
 //  //return value promise base
 // res.send(renderer(req, store)); //include argumen 'req'
})

app.listen(3000, () => {
 console.log('wow, server run on port 3000')
})
