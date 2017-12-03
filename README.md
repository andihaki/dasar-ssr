//user API: https://react-ssr-api.herokuapp.com
architechture:
server: express
client: react-router

dir:
/build //result from server
/public //result for client
/src //source directory
  /client //client
    /actions
      index.js //action reducers to dispatch data, axios fetch data
    /components
    /pages
      AdminListPage.js //list admin
      HomePage.js //page biasa
      NotFoundPage.js //404 page
      UsersListPage.js //page users dari API
    /reducers
      adminReducers.js // return new state based on admin actions
      authReducer.js // 
      index.js //menghubungkan semua reducers
      usersReducer.js //reducers to receive  action
    App.js //header for every page
    index.js
    Routes.js //view data without render
  /helpers //works on SERVER
    .renderer.js //run at server
    createStore.js //redux, handle asyncronous, detect data loading
  index.js


API routes:
/ : API Documentation
/users : list of users
/admins : list of admin if logged in
/auth/google
/current_user: currently logged in user
/logout
//---------------------------------
REDUX:
reducers: users, admins, auth
action creators: fetchUsers, fetchAdmins, fetchCurrentUser

REDUX CHALLENGE:
- different config on browser vs server
- aspects of authentication needs to be handled on server. normally this is only on browser
- detect when all initial data load action creators are completed on server
- need state rehydration on the browser
