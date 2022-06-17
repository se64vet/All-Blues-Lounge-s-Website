import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  menuWrapper: {
    margin:'3em 0',
    boxShadow: "0px 0px 0px 2px white, 0px 0px 0px 5px black, 0px 0px 0px 9px white ",
  },
  menuItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    margin: '1em 0',
  }
  ,
  menuCat: {
      marginTop: '1em',
  }
  ,
  itemName: {
    color: 'HotPink',
    flexGrow: 1,
  },
  itemPrice: {
    flexGrow: 1,
    textAlign: 'end',
  },
  
  img: {
    width: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  },
}));