import React , {Component} from 'react';
import Menu from './components/MenuComponents';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
function App() {
  return (
    <div>
      <Navbar dark color='primary'>
        <div className='container'>
          <NavbarBrand href="/">Ristorante Con Fusoin</NavbarBrand>
        </div>
      </Navbar>
      <Menu/>
    </div>
  );
}

export default App;
