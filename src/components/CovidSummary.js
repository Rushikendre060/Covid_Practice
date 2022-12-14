import React from 'react'
import Card from './Card'
import NumberFormat from 'react-number-format';


const CovidSummary = (props) => {

    const {
        totalConfirmed,
        totalRecovered,
        totalDeaths,
        country,
    } = props;

    return (
        <div>
            <div>
                <h1>{country === '' ? 'World Wide Covid Report' : country}</h1>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
                >
                    <Card>
                        <span>Total Confirmed Cases</span><br />
                        <span>{<NumberFormat
                            value={totalConfirmed}
                            displayType={'text'}
                            thousandSeparator={true}
                        />}</span>
                    </Card>
                    <Card>
                        <span>Total Recovered Cases</span><br />
                        <span>{<NumberFormat
                            value={totalRecovered}
                            displayType={'text'}
                            thousandSeparator={true}
                        />}</span>
                    </Card>
                    <Card>
                        <span>Total Death Cases</span><br />
                        <span>{<NumberFormat
                            value={totalDeaths}
                            displayType={'text'}
                            thousandSeparator={true}
                        />}</span>
                    </Card>

                </div>
            </div>
        </div>

    )
}

export default CovidSummary;