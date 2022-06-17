import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  titleWrapper: {
    position: 'absolute',
    zIndex: 2,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    justifyContent: 'center'
  },
  title: {
    background: 'transparent',
    border: '5px solid white',
    textShadow: '1px 1px 3px rgba(0, 0, 0, 1)',
    padding: '20px',
    textAlign: 'center',
  },
  button: {
    "&:hover": {
        background: "#ffe8d6",  
        borderColor: '#ffe8d6',  
        color: '#6b705c',
    },
  },
  displayNone: {
    visibility: 'hidden !important'
  },
  
}));