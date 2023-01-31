import React, { useState, useRef } from 'react';
import './index.css';
import Sample from '../Sample/Sample';

const Form = (props) => {
    const description = `El cordero que sufrió
Traicionado fue
El peso de nuestra maldad
Fue puesto sobre Él\n
En silencio soportó
Dolor y humillación
Obediente al Padre fue
La cruz por mí cargó`;

    let content = useRef(null);

    const handleOnSubmit = (event) => {
        event.preventDefault();
        alert(content.current.value);
    };

    return (
        <>
            <form onSubmit={handleOnSubmit} target="hiddenFrame">
                <label>
                    Letra (sigue el formato):<br/>
                    <textarea ref={content
                    } placeholder={description} rows="25" cols="50"></textarea>
                </label>
                <input type="submit" value="Generar archivo PPTX" />
            </form>
        </>
    )
}

export default Form;