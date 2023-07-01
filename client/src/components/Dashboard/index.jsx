import React, { useState, useEffect } from "react";
import axios from "axios";
import Endpoints from "../../api/Endpoints";
import User from "./user";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    axios
      .get(Endpoints.GET_ALL_USER)
      .then((response) => setUsers(response.data.data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div>
            <div className="row">
              <div className="col-md-6 text-left">
                <h2>All Users </h2>
              </div>
              <div className="col-md-6 text-right">
                <h2>
                  <Link to="/">Back</Link>
                </h2>
              </div>
            </div>

            <table className="table table-bordered table-hover">
              <thead className="table-dark">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <User data={user} key={user._id} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
