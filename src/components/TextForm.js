import React , { useState } from 'react';

import propTypes from 'prop-types';
function TextForm(props) {

    const handleUpClick = (event) => {
        event.preventDefault();
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = (event) => {
        event.preventDefault();
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleTiClick = (event) => {
        event.preventDefault();
        let newText = text.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        setText(newText);
    }

    const handleCoClick = (event) => {
        event.preventDefault();
        var element = document.getElementById("myBox");
        var text = element.textContent;
        navigator.clipboard.writeText(text);
    }

    const handleExClick = (event) => {
        event.preventDefault();
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const wordCounter = () => {
        if(text.length === 0){
            return 0;
        }else{
            return text.trim().split(/\s+/).length;
        }
    }

    const minutesToRead = () => {
        if(text.length === 0){
            return 0;
        }else{
            return 0.008 * text.trim().split(/\s+/).length;
        }
    }

    const [text, setText] = useState("");
    // text = "new text" -> Wrong Way To Change State
    // setText("new text") -> Correct Way To Change State
    return (
        <form onSubmit={(e) => e.preventDefault()} style={{backgroundColor : props.mode === 'light' ? 'white' : '#232323'}}>
            <div className="mb-3" style={{color : props.mode === 'light' ? 'black' : 'white'}}>
                <h1>{props.heading}</h1>
                <textarea className='form-control' value={text} onChange={handleOnChange} 
                style={{color : props.mode === 'dark' ? 'white' : 'black' , backgroundColor : props.mode === 'light' ? 'white' : '#232323'}} 
                placeholder='Enter Text Here!' id='myBox' rows={8}></textarea>
            </div>
            <button disabled={text.length===0} className={props.mode === 'light' ? 'btn btn-primary' : 'btn btn-light'} onClick={handleUpClick}>Convert To Upper Case</button>
            <button disabled={text.length===0} className={props.mode === 'light' ? 'btn btn-primary  mx-2' : 'btn btn-light mx-2'} onClick={handleLoClick}>Convert To Lower Case</button>
            <button disabled={text.length===0} className={props.mode === 'light' ? 'btn btn-primary' : 'btn btn-light'} onClick={handleTiClick}>Convert To Title Case</button>
            <button disabled={text.length===0} className={props.mode === 'light' ? 'btn btn-primary  mx-2' : 'btn btn-light mx-2'} onClick={handleCoClick}>Copy Text</button>
            <button disabled={text.length===0} className={props.mode === 'light' ? 'btn btn-primary' : 'btn btn-light'} onClick={handleExClick}>Remove Extra Spaces</button>
            <div className='my-3'>
                <h2 style={{color : props.mode === 'light' ? 'black' : 'white'}}>Your Text Summary</h2>
                <p style={{color : props.mode === 'light' ? 'black' : 'white'}}>{wordCounter()} Words And {text.length} Characters</p>
                <p style={{color : props.mode === 'light' ? 'black' : 'white'}}>{minutesToRead()} Minutes To Read</p>
                <h2 style={{color : props.mode === 'light' ? 'black' : 'white'}}>Preview</h2>
                <p style={{color : props.mode === 'light' ? 'black' : 'white'}}>{text.length === 0 ? "Nothing To Preview" : text}</p>
            </div>
        </form>
    );
};

TextForm.propTypes = {
    heading : propTypes.string ,
};

TextForm.defaultProps = {
    heading : "Add Heading Here!"
};

export default TextForm;