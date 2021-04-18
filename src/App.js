import './App.css';
import {Container, Navbar, ListGroup, Button} from "react-bootstrap";
import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import CharacterList from './components/CharacterList';
import 'bootstrap/dist/css/bootstrap.min.css';
import CharacterDetail from './components/CharacterDetail';

function App() {
  return (
    <div className="App">
       <Navbar expand="lg" variant="light" bg="light">
          <Container>
          <Navbar.Brand href="/">Star Wars Catalogue</Navbar.Brand>
          </Container>      
      </Navbar>

    <Switch>
      <Route path="/" exact component={CharacterList} />
      <Route path="/details/:index" exact component={CharacterDetail} />
    </Switch>
    </div>
  );
}

export default App;
