import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  footerGrid : {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    color: 'white',
    background: '#242424',
    padding: '3em 10%',
    marginTop: '3em',
    '& div': {
      textAlign: 'center',
      marginTop: '2em',
    },
    '& input': {
      color: 'white'
    }
    
  },

  
}));