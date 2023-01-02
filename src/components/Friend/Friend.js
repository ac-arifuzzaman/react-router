import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Friend = ({ friend }) => {
  const { name, username, id } = friend;

  // for html button system roting

  const navigate = useNavigate();
  const friendDetails = () => {
    // const path = `friend:${id}`
    // navigate(path)
    navigate("/friend/" + id);
  };

  return (
    <div>
      <h1>{name}</h1>
      <Link to={"/friend/" + id}>Show Details</Link>
      <button onClick={friendDetails}>
        {username} id:{id}
      </button>
    </div>
  );
};

export default Friend;
