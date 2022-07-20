import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Button, makeStyles } from '@material-ui/core'
import Cart from './cart'
import logo from '../img/logo.jpg'

const useStyles = makeStyles({
    header: {
        backgroundColor: 'darkred',
    }, 
    logo: {
        width: 200,
        marginLeft: 10
    }, 
    link: {
        backgroundColor: 'black',
        color: 'white',
        textDecorationStyle: 'none',
        '&:hover': {
            backgroundColor: 'gray'
        }
    }
})

const Header = () => {
    const classes = useStyles()
    return (
        <Grid container direciton="row" justifyContent="space-between" alignItems="center" className={classes.header}>
            <img src={logo} alt="logo" className={classes.logo}/>
            <div>
                <Link to="/">
                    <Button variant="contained" component="span" className={classes.link}>Home</Button>
                </Link>
                <Link to="/contato">
                    <Button variant="contained" component="span" className={classes.link}>Contato</Button>
                </Link>
            </div>
            <Cart />
        </Grid>
    )
}

export default Header