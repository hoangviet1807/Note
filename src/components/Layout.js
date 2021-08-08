import { formatMs, makeStyles, ThemeProvider } from "@material-ui/core";
import {
  Drawer,
  Typography,
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
  AppBar, Toolbar, Avatar
} from "@material-ui/core";
import { AddCircleOutlineRounded, SubjectOutlined } from "@material-ui/icons";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import {format} from 'date-fns'

const drawerWidth = 240;

const useStyle = makeStyles((theme) => {
    return{
  page: {
    background: "#f9f9f9",
    width: "100%",
    padding: theme.spacing(3)
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  root: {
    display: "flex",
  },
  active:{
      background:'#FFFAF0'
  },
  bar:{
      background: '#fff',
      color: '#000',
      width: `calc(100% - ${drawerWidth}px)`
  },
   toolbar: theme.mixins.toolbar,
   date:{
       flexGrow:1
   },
   avatar:{
       marginLeft: theme.spacing(2)
   }
}
});

function Layout({ children }) {
  const classes = useStyle();
  const history = useHistory()
  const location = useLocation()
  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create notes",
      icon: <AddCircleOutlineRounded color="secondary" />,
      path: "/create",
    },
  ];
  return (
    <div className={classes.root}>
        <AppBar className={classes.bar}>
            <Toolbar>
                <Typography className={classes.date}>
                    Now {format(new Date(), 'do MMM Y')}
                </Typography>
                <Avatar src='/meo.jpg' className={classes.avatar}/>
            </Toolbar>
        </AppBar>

      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h3">NOTES</Typography>
        </div>
        <List>
          {menuItems.map((item) => (
            <ListItem
            button
            key={item.text}
            onClick={() => history.push(item.path)}
            className = {location.pathname == item.path ? classes.active : null}
            >
              <ListItemText>{item.text}</ListItemText>
              <ListItemIcon>{item.icon}</ListItemIcon>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.page}>
      <div className={classes.toolbar}></div>
      {children}
    </div>
    </div>
  );
}

export default Layout;
