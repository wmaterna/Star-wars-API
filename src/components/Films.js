import React, { useEffect } from "react";
import _ from "lodash";
import {useDispatch, useSelector} from "react-redux";
import { GetFilmName } from "../actions/CharacterActions";


function Films(props){

    const dispatch = useDispatch();
    const movies = useSelector(state => state.Film);

    useEffect(() => {
        dispatch(GetFilmName(props.link));
      }, [props.link]);



    const ShowData = () => {
        if (movies.loading) {
          return <p>Loading data...</p>
        }
    
        if (!_.isEmpty(movies.data)) {
            return(
              <div>
                {movies.data.map((film, index) =>{
                  return(
                        <p key={index}>{film.title}</p>
                  )})
                }
              </div>
                )
          }
          
        if (movies.errorMsg !== "") {
          return <p>{movies.errorMsg}</p>
        }
        return <p>Unable to load data</p>
      };
      
    return (
        <div>
        {ShowData()}
      </div>
    )

};

export default Films;