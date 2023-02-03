import React, { useRef } from 'react';
import './index.css';

const Form = (props) => {
    const description = `El cordero que sufrió
Traicionado fue
El peso de nuestra maldad
Fue puesto sobre Él\n
En silencio soportó
Dolor y humillación
Obediente al Padre fue
La cruz por mí cargó`;

    const paragraphs = [];

    const splitParagraph = (lyrics) => {
        let i;
        let begin = 0;
        for(i=0; i<lyrics.length-1; i++){
            if(lyrics[i]==="\n" && lyrics[i+1]==="\n"){
                paragraphs.push(lyrics.slice(begin, i));
                begin = i+2;
                i++;
            }
        }
        paragraphs.push(lyrics.slice(begin, i));
    };

    let content = useRef(null);

    const handleOnSubmit = (event) => {
        event.preventDefault();
        splitParagraph(content.current.value);
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