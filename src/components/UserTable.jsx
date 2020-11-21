import React from "react";
const UserTable = ({ users, deleteUser, editUser}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name </th>
          <th>Username : {users.username}</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 ? (
          users.map((element) => (
            <tr key={element.id}>
              <td> {element.name} </td>
          <td> {element.username}</td>
              <td>
                <button className="button muted-button" onClick={() => editUser(element)}>Edit</button>
                <button className="button muted-button" onClick={() =>deleteUser(element.id)}>Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserTable;
