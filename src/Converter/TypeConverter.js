import React from "react";
import { Button, Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { ChangeConverter } from "./ActionConverter";

const styles = {
    converter: {
        display: 'flex',
        flexDirection: "column",
        fontSize: '30px',
        margin: '20px',
    },
    dropdown: {
        fontSize: '18px',
    },
    span: {
        fontSize: '18px',
        textTransform: 'capitalize',
        paddingRight: '6px'
    },
}

const TypeConverter = () => {

    const converterType = useSelector(state => state.converterType)
    
    const dispatch = useDispatch();

    const onChange = (newType) => dispatch(ChangeConverter(newType));

    return (
        <div className="d-flex flex-column align-items-center">
            <div style={ styles.converter }>Converter</div>
            <Dropdown onSelect={ onChange }>
                <Dropdown.Toggle variant="info" 
                    id="dropdown-basic"
                    style={ styles.dropdown }>
                    <span style={ styles.span }>
                        { converterType }
                    </span> 
                    converter
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item eventKey="size">Size converter</Dropdown.Item>
                    <Dropdown.Item eventKey="weight">Weight converter</Dropdown.Item>
                    <Dropdown.Item eventKey="temperature">Temperature converter</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default TypeConverter;