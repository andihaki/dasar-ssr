import React from 'react'

//context from renderer will rename as staticContext
const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true
  return (
    <div>
      <h1>Whoops, page not found bor!</h1>
    </div>
  )
}

export default {
  component: NotFoundPage
}
