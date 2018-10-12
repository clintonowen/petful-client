import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Dashboard.css';
import Pet from './Pet';
import { catActions, dogActions, fetchPets } from '../actions';

class Dashboard extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPets());
  }
  adoptCat() {
    this.props.dispatch(catActions.adoptCat());
    console.log('Cat was adopted!');
  }
  adoptDog() {
    this.props.dispatch(dogActions.adoptDog());
    console.log('Dog was adopted!');
  }
  render() {
    let pets = [];
    if (this.props.catToAdopt) {
      pets.push(
        <Pet 
        key="cat"
        petToAdopt={this.props.catToAdopt}
        onAdoptPet={() => this.adoptCat()}
        />
      );
    }
    if (this.props.dogToAdopt) {
      pets.push(
        <Pet 
        key="dog"
        petToAdopt={this.props.dogToAdopt}
        onAdoptPet={() => this.adoptDog()}
        />
      );
    }
    if (pets.length === 0) {
      pets = (
        <header className="column">
          <h2>Sorry! No pets to adopt at this time. Check back later!</h2>
        </header>
      )
    }
    return (
      <div className="Dashboard">
        <header className="Dash-header">
          <h1>Welcome to Petful</h1>
        </header>
        <main className="pets">
          <h2>Here are the pets available for adoption:</h2>
          <div className="grid">
            {pets}
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  catToAdopt: state.cat.data,
  catError: state.cat.error,
  dogToAdopt: state.dog.data,
  dogError: state.dog.error
});

export default connect(mapStateToProps)(Dashboard);
