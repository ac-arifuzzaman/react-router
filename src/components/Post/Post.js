import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { post } = useParams();
  const [postData, setPostData] = useState({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${post}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPostData(data));
  }, [post]);
  return (
    <div>
      <h2>Hello form post page: {postData.id} </h2>
      <h5>{postData.title}</h5>
      <p>{postData.body}</p>
    </div>
  );
};

export default Post;
