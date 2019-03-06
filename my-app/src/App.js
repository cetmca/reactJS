import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
//

class MyComponent extends React.Component {
  constructor(props) {
    console.log("hello");
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://demo7522704.mockable.io/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.name}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );
    }
  }
}


//


class Apps extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      <BrowserRouter>
      <div>
      <ul>
      <li><Link to="home">Home</Link></li>
      <li><Link to="About">About</Link></li>
      <li><Link to="Contact">Contact</Link></li>---
      <About callApi={this.callApi} />
      </ul>
      </div>
      </BrowserRouter>


<div>
      <ul>
      </ul>
</div>     

      </div>
    );
  }

  componentDidMount() {
    fetch('https://api.mydomain.com')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
}

//

class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">

        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
          <li>Telegram</li>
            <About callApi="passParameter" />
           <BrowserRouter>
           <div>
           <ui>
           <li><Link to="home">home</Link></li>
           <li><Link to="About">About US</Link></li>
           </ui>
           </div>
           </BrowserRouter>
        </ul>
      
     
     
      </div>


    );
  }
}




export class Home extends React.Component {
  render() {
    return (
      <h1>Home Page Content</h1>
    )
  }
}


//

export class About extends React.Component {
  render() {
    return (
      <h1>About Page Content + {this.props.callApi}</h1>
    )
  }
}

//
export class Contact extends React.Component {
  render()  {
    return (
      <h1>Contact Page Content</h1>
    )
  }
}


//export default MyComponent; // rest response
export default ShoppingList
//export default Apps;

//export default {Apps, ShoppingList, Contact, About};