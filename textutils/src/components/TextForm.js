import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = () =>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLowClick = () =>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handleClearClick = () =>{
    // console.log("Uppercase was clicked" + text);
    let newText = '';
    setText(newText)
  }

  const handleCopy = ()=>{
    var newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
  }

  const handleCut = ()=>{
    var newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    handleClearClick(newText);
  }

  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const handleOnChange = (event) =>{
    // console.log("On change");
    setText(event.target.value)
  }

  const [text, setText] = useState('');
  // text = new text;  // wrong way to change the state
  // setText("new text");  // correct way to change the state
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'rgb(41 41 42 / 90%)'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" value={text} style={{background: props.mode==='dark'?'rgb(41 41 42 / 90%)':'white', color: props.mode==='dark'?'white':'rgb(41 41 42 / 90%)'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-1" onClick={handleCut}>Cut Text</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'rgb(41 41 42 / 90%)'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} minutes to read</p>
      <h3>Preview</h3>
      <p>{text.length>0? text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
