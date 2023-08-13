import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './Home.css'
import copy from 'clipboard-copy';
import DOMPurify from 'dompurify';

const modules = {
    toolbar: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],

        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction

        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],
        ["link", "image", "video"],

        ['clean']
    ],
}





function MyComponent() {
    const [value, setValue] = useState('');
    const [isCopied, setIsCopied] = useState(false);


    
   const handleCopyClick = (e) => {
    e.preventDefault();
    if (value === "") {
      alert("Please write something!")
      return null;
    }
          copy(value)
            .then(() => {
              setIsCopied(true);
            })
            .catch(err => {
              console.error('Failed to copy:', err);
            });

            setTimeout(() => {
              setIsCopied(false);
            }, 5000);
        };

   const copyText = (e) => {
    if (value === "") {
      alert("Please write something!")
      return null;
    }
          copy(DOMPurify.sanitize(value, { ALLOWED_TAGS: [] }))
            .then(() => {
              setIsCopied(true);
            })
            .catch(err => {
              console.error('Failed to copy:', err);
            });

            setTimeout(() => {
              setIsCopied(false);
            }, 5000);
        };
    

    return (
      
    
    <div className="editor">
      <h2 className='brand'>Aesthetic<span className='brand-sc'>Words</span> <span className='brand-text'>: Write the modern way!</span></h2>
            <ReactQuill theme="snow" value={value} onChange={setValue} modules={modules} name='content' />
  
        <div className="center">
          <button className=' btn' onClick={handleCopyClick} >Copy HTML Content</button>
          <button className=' btn btn-primary' onClick={copyText}>Copy plain text</button>
          {isCopied && <span>Copied!</span>}
        </div>

                
    </div>)
}

export default MyComponent