import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
   
    title: "",
    completed: "",

  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">TODO Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Title: {user.name}</li>
        <li className="list-group-item">Status: {user.completed}</li>
      </ul>
    </div>
  );
};

export default User;
