import React, { Component } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList.component'
import Search from './Components/Search/Search.component'
import Analog from "./Clock/Analog";
class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       monsters : [],
       searchfield: '',
    }
  }

  

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').
    then(res=> res.json()).
    then(data => { 
      this.setState({monsters : data})
    });
  }

  handlechange (e) {
    this.setState({
      searchfield: e.target.value},
      ()=>{
        console.log(this.state);
      })
  }
 
  
  render() {
    const {monsters, searchfield}  = this.state;
    let fileterdMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchfield.toLowerCase())
      )
    
    console.log(fileterdMonsters, this.state, monsters);
    
    return (
      <div className="App">

        <Analog date={new Date()} />
        <Search searchFunctionality = {(e)=>{this.handlechange(e)}} />
        <CardList monsters = {fileterdMonsters}/>
      </div>
    );
  }
  
}

export default App;
