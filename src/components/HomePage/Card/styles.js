import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  reservationCard: {
    boxShadow: "0px 0px 0px 2px white, 0px 0px 0px 5px black, 0px 0px 0px 9px white ",
  },
  img: {
    objectFit: 'cover',
    objectPosition: 'center',
  },
}));