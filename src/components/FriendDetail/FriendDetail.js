import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FriendDetail = () => {
  // const params = useParams()
  const { friendId } = useParams();
  const [friend, setFriend] = useState({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, [friendId]);
  return (
    <div>
      <h1>hello form dosto er bari: {friendId}</h1>
      <h2>Name: {friend.name}</h2>
      <p>
        <small>Email: {friend.email}</small>
      </p>
      <p>Address: {friend.address?.city}</p>
      <p>
        <small>Geo location: {friend.address?.geo.lat}</small>
      </p>
    </div>
  );
};

export default FriendDetail;
