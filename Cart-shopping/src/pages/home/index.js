import React from 'react'
import { useSelector } from 'react-redux'
import { Grid, Paper, Typography, List, makeStyles } from '@material-ui/core'
import Item from '../../components/Item'
import Card from '../../components/Card'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: '5px',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      backgroundColor: 'lightgray',
      borderStyle: 'solid'
    },
    card: {
        borderStyle: 'solid'
    }
  }));

const HomePage = () => {
    const classes = useStyles()
    const products = useSelector(state => state.products)

    const categorys = products.map(
        category => {
            const container = { }
            container['id'] = category.id_categorys
            container['name'] = category.name_categorys
            return container
        }
    )

    const category = categorys.map(JSON.stringify)
                    .filter(function(item, index, arr){
                        return arr.indexOf(item, index + 1) === -1
                    })
                    .map(JSON.parse)
    
    const arrayCategory = categorys.map(category => category.name)
    let count = { }

    for(let i = 0; i < arrayCategory.length; i++) {
        let key = arrayCategory[i]
        count[key] = (count[key] ? count[key] + 1 : 1) 
    }

    return (
        <Grid container spacing={3} className={classes.root}>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    <Typography variant='h5'> 
                        Categorias 
                    </Typography>
                    <List>
                        {category.map(item => {
                            return(
                                <Item 
                                    key={item.id}
                                    name={item.name}
                                    details={count[item.name]}
                                /> 
                            )
                        })}
                    </List>
                </Paper>
            </Grid>
            <Grid container item spacing={3} xs={9} >
                {products.map(item => {
                    return(
                        <Card 
                            className={classes.card}
                            key={item.id_product} 
                            product={item}
                        />
                    )
                })}
            </Grid>
        </Grid>
    )
}

export default HomePage