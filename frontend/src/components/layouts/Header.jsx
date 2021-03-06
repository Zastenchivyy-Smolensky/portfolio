import React, { useContext, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core";
import { AuthContext } from "../../App";
import { Link, useHistory } from "react-router-dom";
import { signOut } from "../../lib/api/auth";
import Cookies from "js-cookie";
import HeaderDrawer from "./HeaderDrawer";

const useStyles = makeStyles((theme) => ({
  IconButton: {
    marginTop: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    flexDecoration: "none",
    color: "inherit",
  },
  linkBtn: {
    textTransform: "none",
  },
}));
const drawerItem = [
  { label: "一覧へ戻る", path: "/" },
  { label: "新規作成", path: "/new" },
  { label: "自分の投稿", path: "/users/products" },
];
function Header() {
  const { loading, isSignedIn, setIsSignedIn, currentUser } =
    useContext(AuthContext);
  const classes = useStyles();
  const history = useHistory();

  const handleSignOut = async (e) => {
    try {
      const res = await signOut();
      if (res.data.success === true) {
        Cookies.remove("_access_token");
        Cookies.remove("_client");
        Cookies.remove("_uid");
        setIsSignedIn(false);
        history.push("/signin");
        console.log("succeeed in sign out");
      } else {
        console.log("Failed in sign out");
      }
    } catch (e) {
      console.log(e);
    }
  };
  const AuthButtons = () => {
    if (!loading) {
      if (isSignedIn) {
        return (
          <Button
            color="inherit"
            className={classes.linkBtn}
            onClick={handleSignOut}
          >
            Sign out
          </Button>
        );
      } else {
        return (
          <>
            <Button
              component={Link}
              to="/signin"
              color="inherit"
              className={classes.linkBtn}
            >
              Sign in
            </Button>
            <Button
              component={Link}
              to="/signup"
              color="inherit"
              className={classes.linkBtn}
            >
              Sign up
            </Button>
          </>
        );
      }
    } else {
      return <></>;
    }
  };
  const [open, setOpen] = useState(false);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {isSignedIn && currentUser && (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
          >
            Portfolio
          </Typography>
          <AuthButtons />
        </Toolbar>
      </AppBar>
      <HeaderDrawer
        open={open}
        handleDrawerToggle={handleDrawerToggle}
        drawerItem={drawerItem}
      />
    </div>
  );
}

export default Header;
