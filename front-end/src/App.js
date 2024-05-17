import './App.css';
import { useEffect, useRef, useState } from 'react';
import { uploadFile } from './services/api';
function App() {
  const [fileInfo,setFileInfo] = useState('');
  const [link,setLink] = useState('');
  const fileInputRef = useRef();

  const loadFilePicker = () =>{
    fileInputRef.current.click();
  }

  useEffect(()=>{
    const getImg = async () =>{
      if(fileInfo){
        const data = new FormData();
        data.append('name',fileInfo.name);
        data.append('file',fileInfo);

        let res = await uploadFile(data);
        setLink(res.path);
      }
    }
    getImg();
  },[fileInfo])

  console.log(fileInfo);
  return (
    <div className="main-div">
     <h1>Welcome to FileHub sharing</h1>
     <p>upload  and share the download link..</p>

     <button onClick={loadFilePicker}>Upload</button>
     <input className='inputFile' type="file" ref={fileInputRef} onChange={(e) => setFileInfo(e.target.files[0])} />

     <a href={link} target='_blank' >{link}</a>
    </div>
  );
}

export default App;
