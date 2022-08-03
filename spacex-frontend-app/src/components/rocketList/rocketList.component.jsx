import React, { useState, useEffect } from "react";
import RocketService from "../../services/RocketService";
import "./rocketList.styles.scss";

const RocketList = () => {
  const [rockets, setRockets] = useState([]);

  useEffect(() => {
    RocketService.getAllRockets()
      .then((response) => {
        setRockets(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="rocket-container">
      <h2> List of Rockets</h2>
      <table>
        <thead>
          <tr>
            <th> Rocket ID </th>
            <th> Rocket Name </th>
            <th> Cost per launch </th>
            <th> Success Rate % </th>
            <th> First Flight </th>
          </tr>
        </thead>
        <tbody>
          {rockets.map((rocket) => (
            <tr key={rocket.id}>
              <td>{rocket.id} </td>
              <td>{rocket.name} </td>
              <td>{rocket.cost_per_launch} </td>
              <td>{rocket.success_rate_pct} </td>
              <td>{rocket.first_flight} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RocketList;
