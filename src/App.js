import React, {Component} from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';

import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'

class App extends Component{
  constructor(){
    super();

    this.state = {
      'ninjas': [],
      'searchField': '',
    }

  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos').then(response=> response.json()).then(users=> this.setState({'ninjas': users}));
  }

  handleChange = (e)=>{
    this.setState({searchField: e.target.value});
  }


  render(){
    const {ninjas,searchField} = this.state;
    const filteredNinjas = ninjas.filter(ninja => ninja.title.toLowerCase().includes(searchField.toLocaleLowerCase()));
    return (
      <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox placeholder = 'search monsters' handleChange = {this.handleChange}/>


      <CardList ninjas = {filteredNinjas}/>
      </div>
    );
  
  }
}

export default App;