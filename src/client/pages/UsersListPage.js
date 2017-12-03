import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { fetchUsers } from '../actions'

class UsersList extends Component {
  componentDidMount(){
    this.props.fetchUsers()
  }
  renderUsers(){
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>
    })
  }
  head(){
    return(
      <Helmet>
        <title>{`${this.props.users.length} Users Loaded`}</title>
        <meta property="og:title" content="users app"/>
      </Helmet>
    )
  }
  render() {
    return(
      <div>
        {this.head()}
        <h3>Daftar user</h3>
        <ul>{this.renderUsers()}</ul>
      </div>
    )
  }
}

//mengubah state.users jadi props.users
const mapStateToProps = state =>  {
  return {users: state.users}
}

//ambil 'store' data dari redux
function loadData(store){
  return store.dispatch(fetchUsers())
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(UsersList)
}
