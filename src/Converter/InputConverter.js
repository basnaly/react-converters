import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button, Dropdown, InputGroup, FormControl } from 'react-bootstrap';

const styles = {
    parent: {
        display: 'flex',
        fontSize: '18px',
        margin: '40px',

    },
    input: {
        width: '250px',
    },
    result: {
        fontSize: '20px',
        margin: '20px',
    },
    span: {
        fontSize: '20px',
        color: 'red',
        paddingLeft: '10px'
    }
}

const converterToUnit = {
    size: ['mm', 'cm', 'in'],
    weight: ['kg', 'pound', 'ounce'],
    temperature: ['c', 'f']
}

const calculateMap = {
    mm: {
        cm: input => input /10,
        in: input => input * 0.0393701,
        mm: input => input,
    },
    cm: {
        cm: input => input,
        in: input => input * 0.393701,
        mm: input => input * 10,
    },
    in: {
        cm: input => input * 2.54,
        in: input => input,
        mm: input => input * 25.4,
    },

    kg: {
        pound: input => input * 2.20462,
        ounce: input => input * 35.274,
        kg: input => input,
    },
    pound: {
        pound: input => input,
        ounce: input => input * 16,
        kg: input => input * 0.453592,
    },
    ounce: {
        pound: input => input * 0.0625,
        ounce: input => input,
        kg: input => input * 0.0283495,
    },

    c: {
        f: input => (input * 9/5) + 32,
        c: input => input,
    },
    f: {
        f: input => input,
        c: input => (input - 32) * 5/9,
    },
}

const InputConverter = () => {

    const converterType = useSelector(state => state.converterType);

    const units = converterToUnit[converterType];

    const [from, setFrom] = useState('mm');
    const [to, setTo] = useState('in');
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    useEffect(() => {
        setFrom(units[0]);
        setTo(units[1]);
        setResult('');
    }, [converterType])

    const calculate = () => {
        console.log(input)
        let value = calculateMap?.[from]?.[to](input);
        setResult(value.toFixed(4));
    }

    return (
        <div className="d-flex flex-column align-items-center">
            <div className="d-flex align-items-center justify-content-center"
                style={ styles.parent }>
                <div className="d-flex align-items-center mx-4">
                    <div className="mx-2">From</div>
                    <Dropdown onSelect={ setFrom }>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            { converterType === 'temperature' ? '°' + from.toUpperCase() : from }
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {units.map(el => 
                            <Dropdown.Item key={ el } eventKey={ el }>
                                { el }
                            </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            
                <div className="d-flex align-items-center mx-4">
                <div className="mx-2">To</div>
                    <Dropdown onSelect={ setTo }>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                        { converterType === 'temperature' ? '°' + to.toUpperCase() : to }
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {units.map(el => 
                            <Dropdown.Item key={ el } eventKey={ el }>
                                { el }
                            </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>

            <InputGroup className="d-flex align-items-center mx-auto mb-4"
                style={ styles.input }>
                <InputGroup.Text id="inputGroup-sizing-default">
                    Enter your input
                </InputGroup.Text>
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    onChange={ (e) => setInput(e.target.value) }
                    value={ input }
                    type="number"
                />
            </InputGroup>

            <Button className="mx-auto my-3"
                variant={ 'success' }
                onClick={ calculate }>
                Calculate
            </Button>

            <div style={ styles.result }>
                The result: 
                { result.length !== 0 && 
                <span style={ styles.span }>
                    {input} { converterType === 'temperature' 
                                ? '°' + from.toUpperCase() 
                                : from } 
                     {'  '} = {'  '} { result } {'  '}
                            { converterType === 'temperature' 
                                ? '°' + to.toUpperCase() 
                                : to }
                </span>
                }
            </div>

        </div>
    )
}

export default InputConverter;