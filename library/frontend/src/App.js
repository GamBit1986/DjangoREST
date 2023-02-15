import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios'; 

import AuthorList from './components/Author';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        'authors': [] 
    }
  }

  componentDidMount() {
    /* const authors = [
      {
        "first_name": "Иван",
        "last_name": "Иванов",
        "birthday_year": 1987
      },
      {
        "first_name": "Ин",
        "last_name": "Инов",
        "birthday_year": 1990
      },
    ] */
    axios.get('http://127.0.0.1:8000/api/authors/').then(response =>{
        this.setState(
          {
            'authors':response.data
          }          
    )
    }).catch(error => console.log(error))

    
  }
  
  
  render() {
    return(    
      <div>
        <AuthorList authors={this.state.authors}/>
      </div>
    )
  }
}

export default App;
