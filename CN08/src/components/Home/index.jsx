import React, { useEffect, useState } from "react";

import "./home.css";

const Home = ({ userDetails = {} }) => {
  const [userEvents, setUserEvents] = useState([]);

  const getUserEvents = async () => {
    const response = await fetch(`https://api.github.com/users/${userDetails.username}/events`);
    const data = await response.json();
    setUserEvents(data);
  };

  useEffect(() => {
    getUserEvents();
  }, []);

  return (
    <div>
      <h1>{`Welcome, ${userDetails.displayName}`}</h1>
      <section className="event-details">
        <table>
          <thead>
            <tr>
              <th>Event Type</th>
              <th>Username</th>
              <th>Repository Name</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {userEvents.map((events) => (
              <tr key={events?.id}>
                <td>{events?.type}</td>
                <td>{events?.actor.display_login}</td>
                <td>{events?.repo?.name}</td>
                <td>{new Date(events?.created_at).toDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Home;
