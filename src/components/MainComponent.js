import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponents';
import { Dishes } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route , Redirect } from 'react-router-dom';
export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: Dishes,
    };
  }

  render() {
    const HomePage = () =>{
      return(
        <Home/>
      );
    }
    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage}/>
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>}/>
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
