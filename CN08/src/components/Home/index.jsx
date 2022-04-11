import React, { useEffect, useState } from "react";

import "./home.css";

const Home = ({ userDetails = {} }) => {
  const [userEvents, setUserEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMoreData, setHasMoreData] = useState(true);

  const getUserEvents = async () => {
    const response = await fetch(
      `https://api.github.com/users/${userDetails.username}/events?per_page=5&page=${currentPage}`
    );
    const data = await response.json();
    if (data.length === 0) setHasMoreData(false);
    else setUserEvents((prev) => [...prev, ...data]);
  };

  useEffect(() => {
    getUserEvents();
  }, [currentPage]);

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

        {hasMoreData && (
          <div className="load-more-btn-container">
            <button className="btn--load-more" onClick={() => setCurrentPage((prev) => prev + 1)}>
              load more
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
