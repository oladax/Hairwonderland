import React, { useEffect, useState } from "react";
import "./Advert.css";
import "./Advertresponsive.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { NavLink, Outlet } from "react-router-dom";
import { auth, signOutUser } from "../firebase"; // Import the necessary Firebase functions

function Advert() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      // Update the state based on the user's authentication status
      setIsLoggedIn(!!user);
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOutUser();
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <div className="Advert">
      <div className="container">
        <div className="advert-con">
          <span>
            RESTOCKS ARE EVERY FRIDAY! <FontAwesomeIcon icon={faBell} />
          </span>
        </div>

        <div className="login-con">
          <span>
            <a href="https://www.instagram.com/the_wig_wonderland?igsh=YzljYTk1ODg3Zg==">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            
          </span>
          {isLoggedIn ? (
            // If logged in, show the Log Out button
            <button onClick={handleLogout}>Log Out</button>
          ) : (
            // If not logged in, show the Log In button
            <button>
              
              <NavLink className='a' to="/Login" >
                Log In
              </NavLink>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Advert;
