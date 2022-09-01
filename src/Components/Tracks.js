import React, { useContext } from "react";
import { Context } from "../Context";
import Track from "./CardTrack";

const Tracks = () => {
  const [state] = useContext(Context);
  const { track_list, heading } = state;

    return (
      <>
        <h3 className="text-center mb-4">{heading}</h3>
        <div className="row">
          {track_list.map(item => (
            <Track key={item.track.track_id} track={item.track} />
          ))}
        </div>
      </>
    );
  }


export default Tracks;
