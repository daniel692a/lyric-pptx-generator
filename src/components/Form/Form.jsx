import React from 'react';

const Form = () => {

    const description = 'VERSO 1\n\nVERSO 2';

    return (
        <>
            <form>
                <label>
                    Letra:
                    <textarea value={description}></textarea>
                </label>
                <input type="submit" value="Generar archivo PPTX" />
            </form>
        </>
    )
}

export default Form;