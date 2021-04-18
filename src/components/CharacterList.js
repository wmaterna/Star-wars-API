import React, { useEffect } from "react";
import {Link} from "react-router-dom";
import {useState} from "react";
import {Button, Row, Container, Col,Card} from "react-bootstrap";
import _ from "lodash";
import {useDispatch, useSelector} from "react-redux";
import { GetCharacterList} from "../actions/CharacterActions";



function CharacterListScreen(){
    const charList = useSelector(state => state.CharacterList);
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(5);


    useEffect(() => {
        dispatch(GetCharacterList());     
      }, []);
  
    const showMoreItems = () =>{
        setVisible((prevValue) => prevValue + 5);
    }



    const DisplayCharacters = () => {
        if (charList.loading) {
          return <p>Loading data from SWAPI..</p>
        }
        if (!_.isEmpty(charList.data)) {
          return(
            <div className="characters-container">
              <Container>
                <Row>
                  {charList.data.slice(0,visible).map((item, index) => {
                    return(
                    <Col xs="12" md="4" className="card-item">
                    <Card style={{ width: '18rem'}}>
                        <Card.Body>
                          <Card.Title><Link to={`/details/${index}`}>{item.name}</Link></Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">Star Wars character</Card.Subtitle>
                          <Card.Text>
                          <p>Gender: {item.gender}</p>
                          <p>Year of birth: {item.birth_year}</p>
                          </Card.Text>
                      </Card.Body>
                    </Card>
                    </Col>)
                  })}
                </Row>
              </Container>
            </div>
          )
        }
        if (charList.errorMsg !== "") {
          return <p>{charList.errorMsg}</p>
        }
        return <p>Unable to get data from WSAPI</p>
      };




    return (
      <div>
      {DisplayCharacters()}
      <Button variant="dark" className="show-more-btn" onClick={showMoreItems}>Show more</Button>
      </div>  
    )
};

export default CharacterListScreen;