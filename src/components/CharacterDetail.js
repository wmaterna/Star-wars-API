import {React, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import _ from "lodash";
import 'bootstrap/dist/css/bootstrap.min.css';
import { GetCharacter } from '../actions/CharacterActions';
import Films from './Films';
import {Card, Col, Button, Row} from "react-bootstrap";
import {Link} from 'react-router-dom';

function CharacterDetail(props) {

    const index = parseInt(props.match.params.index, 10) + 1;
    const character = useSelector(state => state.Character);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetCharacter(index)); 
        ShowData()  
      }, []);

    const ShowData = () => {
        if (!_.isEmpty(character.data)) {
          return(
          <Row className="more-info" >
          <Col xs="12" >
            <Card style={{ width: '18rem'}}>
               <Card.Body>
                  <Card.Title><div><h3>Name:</h3>{character.data.name}</div></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Star Wars character</Card.Subtitle>
                    <Card.Text>
                    <div><h3>Films:</h3><Films link={character.data.films}/></div>
                    <div><h3>Height:</h3>{character.data.height}</div>
                    </Card.Text>
              </Card.Body> 
            </Card>
          </Col>
          <Col xs="12">
          <Link to="/"><Button variant="dark" className="go-back-btn">Go back</Button></Link>
          </Col> 
          </Row>
          
              )
}
    
        if (character.loading) {
          return <p>Loading...</p>
        }
    
        if (character.errorMsg !== "") {
          return <p>{character.errorMsg}</p>
        }
    
        return <p>Unable to load data</p>
      }
  return (
   <div className="character-details">
    {ShowData()}
    
   </div>
  );
}

export default CharacterDetail;