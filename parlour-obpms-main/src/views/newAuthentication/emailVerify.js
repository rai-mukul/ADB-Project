import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Container,
  Divider,
} from "@mui/material";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const VerificationPage = ({ user, token }) => {
  const history = useHistory();

  // // console.log(user)

  const signout = () => {
    token();
    history.push("/");
    window.location.reload();
  };

  return (
    <div>
      <Container sx={{ alignItems: "center", display: "flex", margin: "50px" }}>
        <Card>
          <CardActionArea>
            <CardContent>
              <Typography variant="h6" gutterBottom color="text.primary" mt={2}>
                Email Verification Pending
              </Typography>
              <Divider />
              <Typography
                variant="subtitle1"
                gutterBottom
                color="text.secondary"
              >
                Thank you for choosing Us to deal with [client’s pain point].
                <br />
                We need a little more information to complete your registration,
                including a confirmation of your email address. Kindly open your
                inbox and tap on link to verify.
                <br />
                If you have any questions, send us an email through contact us
                page.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {/* <Link to="/"> */}
            <Button
              size="small"
              variant="contained"
              className="btn-login"
              onClick={() => signout()}
            >
              Login Page
            </Button>
            {/* </Link> */}
          </CardActions>
        </Card>
      </Container>
    </div>
  );
};

const mapStatetoProps = (state) => ({
  user: state.data,
});

const mapDispatchtoProps = (dispatch) => ({
  token: () => dispatch({ type: "LOGOUT" }),
});

export default connect(mapStatetoProps, mapDispatchtoProps)(VerificationPage);
