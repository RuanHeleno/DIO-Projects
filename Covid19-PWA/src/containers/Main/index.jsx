import React, { memo, useState, useEffect, useCallback } from 'react'
import getCountry from '../../api'
import Board from './components/Board'
import Panel from './components/Panel'
import { ContainerStyled } from './style'

function Main() {
    const [data, setData] = useState({})
    const [country, setCountry] = useState('Brazil')
    const updateAt = new Date().toLocaleString()

    const getCovidData = useCallback((country) => {
        getCountry(country).then(data => setData(data))
    }, [])

    useEffect(() => {
        getCovidData(country)
    }, [getCovidData, country])

    const handleChange = (event) => {
        const country = event.target.value
        setCountry(country)
    }

    return (
        <ContainerStyled>
            <div className="mb-2">
                <Panel 
                    data={data}
                    updateAt={updateAt}
                    onChange={handleChange}
                    country={country}
                    //getCovidData={getCovidData}
                />
            </div>
            <Board props={data} />
        </ContainerStyled>
    )
}

export default memo(Main)