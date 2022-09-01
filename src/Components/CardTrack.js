import React from 'react';


const Track = props => {
  const { track } = props;

  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5>{track.artist_name}</h5>
          <p className="card-text">
            <strong>
              <i className="" /> Track
            </strong>
            : {track.track_name}
            <br />
            <strong>
              <i className="" /> Album
            </strong>
            : {track.album_name}
          </p>
          <button className="btn btn-dark btn-lg btn-block mb-5" type="submit">
         Lyrics
        </button>
        </div>
      </div>
    </div>
  );
};

export default Track;
