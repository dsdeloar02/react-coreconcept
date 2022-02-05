import React, {useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const heroins = ['Mahiya', 'Shabnur', 'Mousumi', 'Apu', 'Bobi'];

  const products = [
    {name:'Photoshop', price:'$90'},
    {name:'Adobe', price:'$90'},
    {name:'Xd', price:'$70'},
    {name:'PDf', price:'$70'},
    {name:'Figma', price:'$70'}
  ]


  return (
    <div className="App">
      
      <header className="App-header">
      <h1>This is heading </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>I am new Developer</p> <br /> <br />
        <ul>
          {
            heroins.map(heroin => <li>{heroin}</li>)
          }
        </ul>

        <Counter></Counter>
        <Users></Users>

        {
          products.map(product => <Product product={product} ></Product>)
        }

      </header>
  
    </div>
  );
}


function Users(){
  const [users, setUsers ] = useState([]);
  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);
  return(
    <div >
      <h3>Dynamic Users : { users.length } </h3>
      <ul>
        {
          users.map(user => <li> {user.email} </li>)
        }
      </ul>
    </div>
  )
}



function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => {
    const newConut = count + 1;  setCount(newConut);
  }
  // const handleDecrease = () => {
  //   const newConut = count - 1;  setCount(newConut);
  // }
  return(
    <div>
       <button onClick={() => setCount(count - 1)} >Decrease</button>
        <h1> Count Number : {count} </h1>
        <button onClick={handleIncrease} >Increase</button>
    </div>
  )
}


function Product(props){
  const productStyle = {
    border:' 1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'250px',
    width:'250px',
    float:'left',
    marginBottom:'50px'
  }
  const {name, price} = props.product;
  return (
      <div style={productStyle}>
        <h2> {name} </h2>
        <h1> {price} </h1>
        <button> Buy Now </button>
      </div>
  )
}

export default App;
