import { makeStyles, fade } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    boxShadow: 'none',
    backgroundColor: 'transparent',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  title: {
    flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
    letterSpacing: '3px',
  },
  image: {
    marginRight: '10px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  menuList: {
    display: "flex",
    flexDirection: "row !important",
  },
  grow: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  navEl: {
      borderRadius: "0px",
      padding: "0px 5px",
      margin: "0px 1em",
      color: "#fff",
      textShadow: '2px 2px 3px rgba(0, 0, 0, 1)',
      borderBottom:"3px solid transparent",
    "&:hover": {
        color: "#fff",
        borderBottom:"3px solid #fff",
        backgroundColor:"transparent",

      },
  }
}));