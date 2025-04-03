import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";

const HomePage = () => {
  let [notes, setNotes] = useState([]);
  let { authTokens, logoutUser } = useContext(AuthContext);

  useEffect(() => {
    getNotes();
  }, []);

  let getNotes = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/notes/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
    });
    let data = await response.json();

    if (response.status === 200) {
      setNotes(data);
    } else if (response.statusText === "Unauthorized") {
      logoutUser();
    }
  };

  return (
    <div className="res-wrapper">
      <div className="Caption">
        <p>You are logged to the home page!</p>
      </div>
      <div className="Caption">
        <p>Go to Django Administration at 127.0.0.1:8000/admin/ <br/>Username = bhavesh Password=bmdsa#51</p>
      </div>
      <div className="list-wrapper">
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              <strong>{note.username}</strong> {note.body}
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  );
};

export default HomePage;
