import React, { Component } from "react";
import "./userSearch.css";

const UserSearch = ({ users, query }) => {
  let filterUser = users.filter((user) =>
    user.name.toLowerCase().startsWith(query)
  );

  return (
    <div >
      {filterUser.map((user) => {
        return (
          <table >
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th className="email">Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
  /*  return users.map((user, i) => {
    let lowerName = user.name.toLowerCase();
    return (
      <div className="table-container" key={i}>
        {String(lowerName).startsWith(query) ? (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th className="email">Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          ""
        )}
      </div>
    );
  }); */
};

export default UserSearch;
