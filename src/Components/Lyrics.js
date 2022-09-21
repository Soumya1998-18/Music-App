import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Lyrics = props => {
  const [lyrics, setLyrics] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${props.match.params.id
        }&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then(res => {
        let lyrics = res.data.message.body.lyrics;
        setLyrics({ lyrics });
      })
      .catch(err => console.log(err));
  }, [props.match.params.id]);

  return (
    <>


      <ul className="list-group mt-3">
        <li className="list-group-item">
          <strong>Lyrics:</strong>
        </li>
        <li className="list-group-item">
          <strong>Song Type:</strong>
        </li>
        <li className="list-group-item">
          <strong>Release Date:</strong>
        </li>
      </ul>


      <Link to="/" className="btn btn-outline-dark btn-sm mb-4">
        Go Back
      </Link>
    </>
  );
}


export default Lyrics;