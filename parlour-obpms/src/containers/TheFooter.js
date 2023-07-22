import React from "react";
import { CFooter } from "@coreui/react";
import { Link } from "react-router-dom";

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <Link to="/" target="_blank" rel="noopener noreferrer">
          Parlour | Admin
        </Link>
        <span className="ml-1">&copy; 2022 admin@obpms.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <Link to="/" target="_blank" rel="noopener noreferrer">
          OBPMS
        </Link>
      </div>
    </CFooter>
  );
};

export default React.memo(TheFooter);
