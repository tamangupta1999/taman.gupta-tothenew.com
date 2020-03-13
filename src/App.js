import React, { Component } from 'react';
import './App.css';
import Card from './Card-Component/card-component';

class App extends Component {
  state = {
    fruit: [],
    fruits: []
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
    const {fruit} = this.state;

    fruits.push({
      fruitName: fruit.split('-')[0],
      fruitValue: fruit.split('-')[1]
    })


    this.setState(
      {
        fruit: [],
        fruits: fruits
      }
    )
  }
  deleteHandler = (index) => {
    const listItems = this.state.fruits;
    listItems.splice(index, 1);
    this.setState({
      fruits: listItems
    });
  }
  render() {


    let list = (
      <ul>
        {
          this.state.fruits.map((fruit, index) => {
            return <Card
              deleteHandler={() => this.deleteHandler(index)}
              fruitName={fruit.fruitName}
              fruitValue={fruit.fruitValue} />
          })
        }
      </ul>
    );
    return (
      <div className="demo">
      <h1>FRUITS APP</h1>
      <form onSubmit={this.submitHandler} className="form-item">
        <label >
          FruitName - Value :
          </label>
        <input type="text"  onChange={this.changeHandler} placeholder="FruitName-Value" />
        <input type="submit" value="Submit" />
      </form>
      {list}
    </div>
    );
  }
}

export default App;
