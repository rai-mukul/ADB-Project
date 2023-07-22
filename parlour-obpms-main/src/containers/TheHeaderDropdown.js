import React from "react";
import {
  // CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Avatar } from "@mui/material";

const TheHeaderDropdown = ({token}) => {
  const history = useHistory();

  const signout = () => {  
    token()
    history.push("/")
    window.location.reload();
  };

  return (
    <CDropdown inNav className="c-header-nav-items mx-2" direction="down">
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <Avatar></Avatar>
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem header tag="div" color="light" className="text-center">
          <strong>Account</strong>
        </CDropdownItem>
        {/* <CDropdownItem  tag={Link} to="/notification">
          <CIcon name="cil-bell" className="mfe-2" />
          Notifications
          <CBadge color="info" className="mfs-auto">
            0
          </CBadge>
        </CDropdownItem> */}
        {/* <CDropdownItem  tag={Link} to="/message">
          <CIcon name="cil-envelope-open" className="mfe-2" />
          Messages
          <CBadge color="success" className="mfs-auto">
            0
          </CBadge>
        </CDropdownItem> */}
        <CDropdownItem tag={Link} to="/profile">
          <CIcon name="cil-user" className="mfe-2" />
          Profile
        </CDropdownItem>
        <CDropdownItem divider />
        <CDropdownItem onClick={() => signout()}>
          <CIcon name="cil-lock-locked" className="mfe-2" />
          Log out
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

const mapDispatchtoProps = (dispatch) => ({
  token: () => dispatch({ type: "LOGOUT" }),
});

export default connect(null, mapDispatchtoProps)(TheHeaderDropdown);
