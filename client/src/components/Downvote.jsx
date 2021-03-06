
import React from "react";

function Downvote(props) {

  return (
    <a href="none" onClick={(event) => { event.preventDefault(), props.downVote()}} name={"downvote"}>
      <svg
        id="downvote"
        height="1em"
        width="1em"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill={props.fill}
        fontSize="20px"

      >
        <path
          name="downvote"
          d="M7.27 2.047a1 1 0 011.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v3a1 1 0 01-1 1h-5a1 1 0 01-1-1v-3H1.654C.78 10.5.326 9.455.924 8.816L7.27 2.047zM14.346 9.5L8 2.731 1.654 9.5H4.5a1 1 0 011 1v3h5v-3a1 1 0 011-1h2.846z"
          fill="black"
        />
      </svg>
    </a>
  );
}

export default Downvote;
