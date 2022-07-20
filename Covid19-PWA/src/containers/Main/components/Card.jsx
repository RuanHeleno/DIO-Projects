import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Card as CardUI } from '../../../components'
import {
    LabelStyled,
    ValueStyled,
    CardContentStyled
} from './style'

function Card({ value, label, color }) {
    return (
        <CardUI>
            <CardContentStyled color={color}>
                <ValueStyled>{value}</ValueStyled>
                <LabelStyled>{label}</LabelStyled>
            </CardContentStyled>
        </CardUI>
    )
}

Card.propTypes = {
    value: PropTypes.number.isRequired,
    label: PropTypes.number.isRequired,
    color: PropTypes.number.isRequired
}

export default memo(Card)