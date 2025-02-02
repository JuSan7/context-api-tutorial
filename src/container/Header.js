import React from "react";
import { useUserContext } from "../context/useContext";

const Header = () => {
  const { user, logOut } = useUserContext();
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <h2>React ContextApi</h2>
        <div className="profile">
          <h3>Welcome, {user.name}</h3>
          {!user.isGuestUser && (
            <button className="ui button blue" onClick={logOut}>
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
