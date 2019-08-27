import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import LayersIcon from "@material-ui/icons/Layers";
import BugReportIcon from "@material-ui/icons/BugReport";
import Person from "@material-ui/icons/Person";
import EventNoteIcon from "@material-ui/icons/EventNote";

import SettingsPowerIcon from "@material-ui/icons/SettingsPower";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import Profile from "./DashbordProf";
import Student from "./Student";
import Prof from "./Prof";
import Scheduling from "./Scheduling";
import Report from "./Report";
import Uploadfile from "./Uploadfile";
import Event from "./Event";

import { Route, Link, Redirect } from "react-router-dom";
import { logout } from "../../actions/authActions";

import { connect } from "react-redux";

const drawerWidth = 240;

const styles = theme => ({
  typography: {
    useNextVariants: true,
    suppressDeprecationWarnings: true
  },
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: "100vh",
    overflow: "auto"
  },
  chartContainer: {
    marginLeft: -22
  },
  tableContainer: {
    height: 320
  },
  h5: {
    marginBottom: theme.spacing.unit * 2
  }
});

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }
  static propTypes = {
    logout: PropTypes.func.isRequired
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <Route>
        {!this.props.auth.token && <Redirect push to="/" />}
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position="absolute"
            className={classNames(
              classes.appBar,
              this.state.open && classes.appBarShift
            )}
            style={{ backgroundColor: "rgba(43, 45, 51,.8)" }}
          >
            <Toolbar
              disableGutters={!this.state.open}
              className={classes.toolbar}
            >
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(
                  classes.menuButton,
                  this.state.open && classes.menuButtonHidden
                )}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                className={classes.title}
              >
                <div className="logo">
                  <span className="word1"> Private </span>
                  <span className="word2">School</span>
                  <span className="word1 word11">System</span>
                  <span className="word2">Management</span>
                </div>
              </Typography>
              <IconButton color="inherit">
                <Badge badgeContent={0} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <Badge badgeContent={0} color="secondary">
                  <MoreVertIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <Badge badgeContent={0} color="secondary">
                  <AccountCircleIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <Badge badgeContent={0} color="secondary" />
                <SettingsPowerIcon onClick={this.props.logout} />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            classes={{
              paper: classNames(
                classes.drawerPaper,
                !this.state.open && classes.drawerPaperClose
              )
            }}
            open={this.state.open}
          >
            <div className={classes.toolbarIcon}>
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            {/* <List>{mainListItems}</List> */}
            <List>
              <ListItem button>
                <ListItemIcon className="rounded-circle border border-primary p-1  mr-5">
                  <Link to="/dashProf">
                    <DashboardIcon />
                  </Link>
                </ListItemIcon>
                <Link to="/dashProf">
                  <ListItemText primary="Dashboard" />
                </Link>
              </ListItem>

              <ListItem button>
                <ListItemIcon className="rounded-circle border border-primary p-1  mr-5">
                  <Link to="/student">
                    <PeopleIcon />
                  </Link>
                </ListItemIcon>
                <Link to="/student">
                  <ListItemText primary="Students" />
                </Link>
              </ListItem>

              <ListItem button>
                <ListItemIcon className="rounded-circle border border-primary p-1  mr-5">
                  <Link to="/prof">
                    {" "}
                    <Person />
                  </Link>
                </ListItemIcon>
                <Link to="/prof">
                  <ListItemText primary="Prof" />
                </Link>
              </ListItem>

              <ListItem button>
                <ListItemIcon className="rounded-circle border border-primary p-1  mr-5">
                  <Link to="/uploadcour">
                    <LayersIcon />
                  </Link>
                </ListItemIcon>
                <Link to="/uploadcour">
                  <ListItemText primary="Course" />
                </Link>
              </ListItem>

              <ListItem button>
                <ListItemIcon className="rounded-circle border border-primary p-1  mr-5">
                  <Link to="/profScheduling">
                    {" "}
                    <EventNoteIcon />
                  </Link>
                </ListItemIcon>
                <Link to="/profScheduling">
                  {" "}
                  <ListItemText primary="Scheduling" />
                </Link>
              </ListItem>

              <ListItem button>
                <ListItemIcon className="rounded-circle border border-primary p-1  mr-5 pl-2">
                  <Link to="/ProfEvent">
                    <i
                      class="fas fa-calendar-check mr-2"
                      style={{ fontSize: "20px" }}
                    />
                  </Link>
                </ListItemIcon>
                <Link to="/ProfEvent">
                  <ListItemText
                    primary="NEWS & EVENT"
                    style={{ marginLeft: "-5px" }}
                  />
                </Link>
              </ListItem>

              <ListItem button>
                <ListItemIcon className="rounded-circle border border-primary p-1  mr-5">
                  <Link to="/profReport">
                    <BugReportIcon />
                  </Link>
                </ListItemIcon>
                <Link to="/profReport">
                  <ListItemText primary="CONTACT US" />
                </Link>
              </ListItem>
            </List>
            <Divider />
          </Drawer>
          <main
            className={classes.content}
            style={{ backgroundColor: "rgba(255, 204, 255,.2)" }}
          >
            <div className={classes.appBarSpacer} />

            <Typography component="div" className={classes.chartContainer}>
              {this.props.r === "p" && <Profile />}
            </Typography>

            <Typography component="div" className={classes.chartContainer}>
              {this.props.r === "c" && <Student />}
            </Typography>

            <Typography component="div" className={classes.chartContainer}>
              {this.props.r === "sp" && <Prof />}
            </Typography>

            <Typography component="div" className={classes.chartContainer}>
              {this.props.r === "sc" && <Scheduling />}
            </Typography>

            <Typography component="div" className={classes.chartContainer}>
              {this.props.r === "rp" && <Report />}
            </Typography>

            <Typography component="div" className={classes.chartContainer}>
              {this.props.r === "cr" && <Uploadfile />}
            </Typography>

            <Typography component="div" className={classes.chartContainer}>
              {this.props.r === "ev" && <Event />}
            </Typography>
          </main>
        </div>
      </Route>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logout }
)(withStyles(styles)(Dashboard));
