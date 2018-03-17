import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; 

class App extends Component {
  state= {

    Persons: [
      {name:"kiran", age:"23"},
      {name:"kishore", age:"21"},
      {name:"krishna reddy", age:"40"},
    ]
  }

  switchNameHanlder = (newName)=>{
  //  console.log('was clicked');
   this.setState({
     Persons:[
     {name: newName, age:"85"},
     {name:"rrm", age:"75"},
     {name:"kkk", age:"55"}
     ]
   })
  }
  nameChangeHanlder= (event)=>{
    this.setState({
      Persons:[
        {name: "kiran", age:"85"},
        {name: event.target.value, age:"75"},
        {name:"krishna", age:"55"}

      ]

    })


  }
  render() {

    // jxs styles
    const style = {
      border:'1px solid #ccc',
      backgroundColor:'#fcd254',
      borderRadius:'10px',
     padding:'8px 8px'

    }
    return (
      <div className="App">
         <h1>This is React app</h1>
         <div>This is really working</div>
         <button style={style} onClick={()=> this.switchNameHanlder('kishorereddy')}>Switch the button</button>
         <Person name={this.state.Persons[0].name} age={this.state.Persons[0].age}/>
         <Person 
         name={this.state.Persons[1].name} 
         age={this.state.Persons[1].age}
         click={this.switchNameHanlder.bind(this,'kiran')}
         changed={this.nameChangeHanlder}
         >
         My hibbes are : farmer</Person>
         <Person name={this.state.Persons[2].name} age={this.state.Persons[2].age}/>

      </div>
    );

    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'iam the perfect'));
  }
}

export default App;
