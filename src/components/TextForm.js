import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Congrats your text is converted to UpperCase!", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Congrats your text is converted to LowerCase!", "success");
  };
  const handleBinToDec = () => { //my personal enhancement
    let len = text.length;
    let x = 0;
    for (let i = 0; i < len; i++) {
      x = x + (text[i] - "0") * (1<<(len - i - 1));
    }
    // console.log(x);
    let newText = x.toString();
    setText(newText);
    props.showAlert("Congrats here is your decimal equivalent!", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  //   text = "new text"; //incorrect way
  //   setText("new text"); //correct way
  return (
    <>
      <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleBinToDec}>
          Convert to decimal
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Please, enter the text in the textbox to preview :)"}</p>
      </div>
    </>
  );
}
