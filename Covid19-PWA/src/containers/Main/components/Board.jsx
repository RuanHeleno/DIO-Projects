import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Grid } from '../../../components'
import Card from './Card'

function Board( {props} ) {
    const { cases, todayDeaths, recovered, deaths, todayCases} = props

    const getValue = (value) => value ? value: 0

    return (
        <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
                <Card value={getValue(cases)} label="Total de casos" color="#5d78ff" />
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(todayDeaths)} label="Óbitos de hoje" color="#F7B829" />
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(recovered)} label="Casos hoje" color="#000" />
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(deaths)} label="Total de mortos" color="#E95078" />
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(todayCases)} label="Total de recuperados" color="#67C887" />
            </Grid>
        </Grid>
    )
}

Board.propTypes = {
    cases: PropTypes.number.isRequired,
    todayDeaths: PropTypes.number.isRequired,
    recovered: PropTypes.number.isRequired,
    deaths: PropTypes.number.isRequired,
    todayCases: PropTypes.number.isRequired
}

export default memo(Board)