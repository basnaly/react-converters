import React from "react";
import InputConverter from "./InputConverter";
import TypeConverter from "./TypeConverter";
import Me from './Me';

const styles = {
    div: {
        display: 'flex',
        flexDirection: "column",
        fontSize: '30px',
        margin: 'auto',
        width: '400px',
        height: '500px',
        backgroundColor: 'azure',
        border: '2px solid green',
        borderRadius: '10px',
        marginTop: 'calc((100vh - 500px) / 2)'
    },
}

const AppConverter = () => {

    return (
        <div style={ styles.div }>
            <TypeConverter />
            <InputConverter />
            <Me />
        </div>
    )
}

export default AppConverter;