import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
class App extends Component {
   constructor(){
       super();
       this.state ={users: []};
   }
   componentDidMount() {
          fetch('http://localhost:9000/users')
            .then(res => {
                console.log(res);
                return res.json()
             })
            .then(users => { 
                console.log(users); 
                this.setState({ users })
             });
         }
   render() {
        return (
            <div>
                <h1>Users</h1>
                {this.state.users.map(user =>
                <div key={user._id}>
                  <ul>
                    <ul>First Name: {user.firstName}</ul>
                    <ul>Last Name: {user.lastName}</ul>
                    <ul>Email: {user.email}</ul>
                    <ul>Password: {user.password}</ul>
                  </ul>
                </div>
              )}
            </div>
        );
    }
}
export default App;