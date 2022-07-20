import React from 'react'
import { Grid, Paper, Typography, Button, makeStyles } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import cartActions from './store/actions/cart'

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center'
    },
    link: {
        backgroundColor: 'darkgreen',
        color: 'white',
        '&:hover': {
            backgroundColor: 'green'
        }
    }
}))

const Card = (props) => {
    const { product } = props
    const cart = useSelector(state => state.cart.value)
    const dispatch = useDispatch()
    const classes = useStyles()

    return (
        <Grid item xs={3}>
            <Paper className={classes.paper}>
                <Grid container direction='column'>
                    <Grid item>
                        <img width="140px" src={product.image} alt={product.name_product} />
                        <Typography variant='h6'>
                            {product.name_product}
                        </Typography>
                        <Typography variant='subtitle1'>
                            R$ {product.price}
                        </Typography>
                    </Grid>
                    <Button 
                        className={classes.link}
                        variant="contained" 
                        onClick={() => dispatch(cartActions.Add(cart, product))}
                    >
                        Adicionar
                    </Button>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default Card