import React ,{useState} from 'react'

function TextForm(props) {
   
   const handleUpClick=()=>{
    //console.log("Upper Case was Clicked...");
    let newtext=text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to upper case!","success");
   }
   const handleOnChange=(event)=>{
   // console.log("on Change")
   console.log('Input Value:', event.target.value); 
   setText(event.target.value);
   }
   const handleLowClick=()=>{
    let newtext=text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Lower case!","success");
   }
   const handleClear=()=>{
    setText('');
    props.showAlert("Text board cleard!","success");
   }
   
   const copyToClipboard = () => {
    // Create a textarea element to hold the text temporarily
    var text=document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Clipboard copied!","success");
   
    // You can provide user feedback, e.g., setting a state indicating that the text was copied
   // alert('Text copied to clipboard!');
  };
  
   const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
       setText(newText.join(" "));
        props.showAlert("Extra spaces removed!","success");
         
   }

    const [text, setText] = useState('');
   //text="text here"--->wrong way to update text  
   //setText(new text)--->right way to update text  
   return (
    <>
    <div>
        <h1 style={{color: props.mode==='dark'?'white':'#042743'}}>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" onChange={handleOnChange} value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick} style={{}}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={copyToClipboard}>Copy to Clipboard</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-1" onClick={handleClear}>Clear</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your Text Summary </h1>
        <p>{text.trim() !== '' ? text.split(' ').length : 0} word and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length===0?'Enter text in above textbox to preview it here':text}</p>
    </div>
    </>
  )
}
export default TextForm;