import { useState } from 'react';
export default function TextForm(props) {
    const handleUpClick = () => {
        settext(text.toUpperCase());
        props.showAlert("Converted to UpperCase","success")
    }
    const handleOnChange = (event) => {
        settext(event.target.value);
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        settext(newText);
        props.showAlert("Converted to LowerCase","success")
    }
    const handleClearClick = () => {
        let newText = '';
        settext(newText);
        props.showAlert("Cleared Text","success")
    }
    const handletiClick = () => {
        const newText = text.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
        settext(newText);
        props.showAlert("Converted to TitleCase","success")
    }
    const handleSpeech = () => {
        const msg = new SpeechSynthesisUtterance();
        const textInput = text;
        msg.text = textInput;
        msg.lang = "en-US";  // Set the language (you can change it as needed)
        window.speechSynthesis.speak(msg);
    }
    const handleCopy = () =>{
        // let text = document.getElementById("myBox").value;
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard","success")
    }
    const handleSpace = () => {
        let newText = text.split(/[  ]+/);
        settext(newText.join(" "));
        props.showAlert("Extra Space Removed","success")
    }
    const [text, settext] = useState("");

    return (
        <>
            <div className={`container text-${(props.mode === 'light') ? 'dark' : 'light'}`}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={props.mystyle}id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
                </div>
                <button disabled={text.length===0} className={`btn btn-${props.btnColor} mx-1 my-1`} onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className={`btn btn-${props.btnColor} mx-1 my-1`} onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className={`btn btn-${props.btnColor} mx-1 my-1`} onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length===0} className={`btn btn-${props.btnColor} mx-1 my-1`} onClick={handletiClick}>Convert to TitleCase</button>
                <button disabled={text.length===0} className={`btn btn-${props.btnColor} mx-1 my-1`} onClick={handleSpeech}>Text to Speech</button>
                <button disabled={text.length===0} className={`btn btn-${props.btnColor} mx-1 my-1`} onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className={`btn btn-${props.btnColor} mx-1 my-1`} onClick={handleSpace}>Remove Extra Space</button>
            </div>
            <div className={`container text-${(props.mode === 'light') ? 'dark' : 'light'}`}>
                <h2>Your Text Summary</h2>
                <p>{text.trim().split(/\s+/).filter((element) => {return element.length!== 0}).length } words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element) => {return element.length!== 0}).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text :'Enter something in textbox to preview it here'}</p>
            </div>
        </>

    )
}
