import React from 'react'
import { ListItem, ListItemText } from '@material-ui/core'
import PropTypes from 'prop-types'

const Item = (props) => {
    const { name, details } = props

    return (
        <ListItem>
            <ListItemText
                primary={name}
                secondary={details}
            />
        </ListItem>
    )
}

Item.propTypes = {
    name: PropTypes.string.isRequired,
    details: PropTypes.number.isRequired
}    


export default Item