import { BrowserRouter as Router } from 'react-router-dom';
import { Provider }  from 'react-redux'
import store from './components/store'
import Routes from './routes'
import { Container, makeStyles } from '@material-ui/core'
import Header from './components/Header'
import background from "./img/background.jpg";

const useStyles = makeStyles({
  body: {
    backgroundImage: `url(${background})` 
  }
})

const App = () => {
  const classes = useStyles()
  const localCart = JSON.parse(localStorage.getItem('shopping: cart'))
  if(localCart !== null) {
      store.dispatch({
        type: 'CHANGE_CART',
        localCart: localCart
    })
  }

  return (
    <Provider store={store}>
      <Container maxWidth="xl" className={classes.body}>
        <Router>
            <Header />
            <Routes />
        </Router>
      </Container>
    </Provider>
  )
}

export default App;