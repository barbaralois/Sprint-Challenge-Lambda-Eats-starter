import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <div className="header-bg">
        <h2>Your favorite food, delivered while coding</h2>
        <Link to="/pizza-builder" id="pizza">
          Pizza?
        </Link>
      </div>
    </div>
  );
}
