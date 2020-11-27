import React from "react";
import moment from "moment";


export const Footer: React.FC = () => (
  <footer>
    <div className="container">
      <p>&copy; {moment().year()} DeMarc Johnson</p>
    </div>
  </footer>
);