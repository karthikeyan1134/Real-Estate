import React,{useState} from 'react'
import './Post.css';
import Navbar from '../Navbar/Navbar.js'
const Post = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    const fileList = Array.from(files);
    setSelectedFiles([...selectedFiles, ...fileList]);
  };

  return (
    <>
      <Navbar></Navbar>
      <div className='post-cont'>
        <h2>Create a Listing</h2>
        <div className="flex-cont">
          <div className="left-content">
            <div >
              <input className='post-inp' type="text" placeholder='Name' />
            </div>
            <div>
              <textarea className="post-inp" rows="5" cols="47" placeholder='Description'></textarea>
            </div>
            <div >
              <input className="post-inp" type="text" placeholder='Address' />
            </div>
            <div className="post-select">
              <div className='num'>
                <input type="number" id="beds" />
                <label htmlFor="beds">Beds</label>
              </div>
              <div className='num'>
                <input type="number" id="bathrooms" />
                <label htmlFor="bathrooms">Bathrooms</label>
              </div>
            </div>
            <div className="num">
              <input type="number" id="price" />
              <label htmlFor="price">Price</label>
            </div>
          </div>
          <div className="right-content">
            <p className='right-heading'><b>images:</b>(max 6)</p>
            <div className="file">
              <div>
                <input type="file" id="post-file" multiple onClick={handleFileChange} />
                <label htmlFor="post-file"></label>
              </div>
              <div>
                <button id='up-btn' >Upload</button>
              </div>
            </div>
            <div>
              {selectedFiles.length > 0 && (
                <div id="selected-files">
                  <p>Selected files:</p>
                  <ul>
                    {selectedFiles.map((file, index) => (
                      <li key={index}>{file && file.name}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <button className='post-btn'>Upload post</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Post
