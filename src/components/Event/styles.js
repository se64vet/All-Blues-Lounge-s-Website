import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  contentWrapper: {
    margin:'3em 0',
    boxShadow: "0px 0px 0px 2px white, 0px 0px 0px 5px black, 0px 0px 0px 9px white ",
  },
  img: {
    width: '100%',
    aspectRatio: "4/1",
    objectFit: 'cover',
    objectPosition: 'bottom',
  },
}));