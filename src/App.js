import React, { Component } from 'react';
import './App.css';
import Card from './Card-Component/card-component';

class App extends Component {
  state = {
    fruit: '',
    fruits: [],
    editMode:false,
    id:null
  }

  changeHandler = (event) => {
    let fruit = event.target.value;
    this.setState({
      fruit: fruit
    })
  }

  submitHandler = (event) => {
    event.preventDefault();
    let fruits = [...this.state.fruits];
    const { fruit } = this.state;
    
    if(this.state.editMode){
        fruits[this.state.id]={fruitName:fruit.split('-')[0],fruitValue:fruit.split('-')[1]}
        this.setState({
          fruit:'',
          fruits:fruits,
          editMode:false,
          id:null
        })
     
    }else {
      fruits.push({
        fruitName: fruit.split('-')[0],
        fruitValue: fruit.split('-')[1] || 0
      })
      this.setState(
        {
          fruit: [],
          fruits: fruits
        }
      )
    }  
  }
  deleteHandler = (index) => {
    const listItems = this.state.fruits;
    listItems.splice(index, 1);
    this.setState({
      fruits: listItems
    });
  }

  editHandler = (index) => {
    this.setState((prevState) => {
      const fruitsItem = prevState.fruits[index];
      return { fruit: `${fruitsItem.fruitName}-${fruitsItem.fruitValue}`,
            editMode:true,
            id:index }
    })

  }

  render() {
    let list = (
      <ul>
        {
          this.state.fruits.map((fruit, index) => {
            return (<Card
              deleteHandler={() => this.deleteHandler(index)}
              editHandler={() => this.editHandler(index)}
              fruitName={fruit.fruitName}
              fruitValue={fruit.fruitValue}
              key={Math.random()}
            />)

          })
        }
      </ul>
    );
    return (
      <div className="demo">
        <h1 key="ii1">FRUITS APP</h1>
        <form key="ii2" onSubmit={this.submitHandler} className="form-item">
          <label key="ii3">
            FruitName - Value :
            </label>
          <input key="ii4" type="text" onChange={this.changeHandler} value={this.state.fruit} placeholder="FruitName-Value" required/>
          <input key="ii5" type="submit" value="Submit" />
        </form>
        {list}
      </div>
    );
  }
}

export default App;
