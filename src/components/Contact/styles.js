import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  imgWrapper: {
      maxHeight: "300px",
      overflow: "hidden",
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  info: {
      textAlign: 'center',
  },
  gmap_canvas: {
    overflow: 'hidden',
    background: 'none',
    height: "100%",
    width: "100%",
    display: 'flex',
    justifyContent: 'center',
  },
  mapouter: {
      position: "relative",
      textAlign: "right",
      height: "100%",
      width: "100%",
  }

}));

