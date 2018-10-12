import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Dashboard.css';
import Pet from './Pet';
import { catActions, dogActions } from '../actions';

class Dashboard extends Component {
  componentDidMount() {
    this.props.dispatch(catActions.fetchCat());
    this.props.dispatch(dogActions.fetchDog());
  }
  adoptPet() {
    console.log('Pet was adopted!');
  }

  render() {
    let pets = [];
    if (this.props.catToAdopt) {
      pets.push(
        <Pet 
        key="cat"
        petToAdopt={this.props.catToAdopt}
        onAdoptPet={() => this.adoptPet()}
        />
      );
    }
    if (this.props.dogToAdopt) {
      pets.push(
        <Pet 
        key="dog"
        petToAdopt={this.props.dogToAdopt}
        onAdoptPet={() => this.adoptPet()}
        />
      );
    }
    return (
      <div className="Dashboard">
        <header className="Dash-header">
          <h1>Welcome to Petful</h1>
        </header>

        <div className="grid">
          {pets}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  catToAdopt: state.cat.data,
  dogToAdopt: state.dog.data
});

export default connect(mapStateToProps)(Dashboard);
