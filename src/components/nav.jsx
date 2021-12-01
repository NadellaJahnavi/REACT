import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Badge,
} from "@mui/material";

import { useSelector } from "react-redux";
import Users from "./users";
const Nav = () => {
  //const classes = useStyles();
  const login = useSelector((state) => state.login);
  console.log(login);
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            style={{
              padding: "5px",
            }}
          >
            LMS
          </Typography>
          <Button color="inherit" component={NavLink} to="/home">
            Home
          </Button>
          {login.loggedIn && login.role == "admin" && (
            <Button color="inherit" component={NavLink} to="/author">
              Authors
            </Button>
          )}
          {login.loggedIn && login.role == "admin" && (
            <Button color="inherit" component={NavLink} to="/publisher">
              Publishers
            </Button>
          )}
          {login.loggedIn && login.role == "admin" && (
            <Button color="inherit" component={NavLink} to="/book">
              Books
            </Button>
          )}
          {login.loggedIn && login.role == "user" && (
            <Button color="inherit" component={NavLink} to="/book">
              Books
            </Button>
          )}
          {login.loggedIn && login.role == "admin" && (
            <Button
              color="inherit"
              // style={{ marginRight: "auto" }}
              component={NavLink}
              to="/users"
            >
              Users
            </Button>
          )}
          {login.loggedIn && login.role == "admin" && (
            <Button
              color="inherit"
              // style={{ marginRight: "auto", textAlign: "Right" }}
              component={NavLink}
              to="/readers"
            >
              Readers
            </Button>
          )}
          {login.loggedIn ? (
            <Button
              color="inherit"
              style={{ marginLeft: "auto" }}
              component={NavLink}
              to="/logout"
            >
              Logout
            </Button>
          ) : (
            <Button
              color="inherit"
              style={{ marginLeft: "auto" }}
              component={NavLink}
              to="/login"
            >
              Login
            </Button>
          )}

          <Button color="inherit" component={NavLink} to="/readers/add">
            Register
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
