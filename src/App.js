import { useState, useEffect } from 'react';
// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';

import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

import Post from './models/Post'
import './App.css';

// Register the plugins
registerPlugin( FilePondPluginImagePreview, FilePondPluginFileEncode )

const App = () => {
  const [ posts, setPosts ] = useState([])
  const [ file, setFile ] = useState('')
  const [ caption, setCaption ] = useState('')
  const [ message, setMessage ] = useState('')
  

  useEffect(() => {
    getPost()
  }, [])

  const getPost = () => {
    Post.all().then( data => setPosts(data.data) )
  }

  const handleSubmit = event => {
    event.preventDefault();
    const post = {
      caption,
      img: file.getFileEncodeDataURL()
    }
    console.log(post)
    if ( caption === "") {
      setMessage("Title must not be empty.");
    } else {
      Post.create(post);
    }
  };

  const postList = posts.length !== 0 ? posts.map( post => <img src={post.img} alt="post img"/>) : <div></div>; 

  return (
    <div className="App">
    {postList}
    <div>{ message ? message : '' }</div> 
    <form className="ui form" onSubmit={handleSubmit} >
    <input type="text" name="caption" placeholder="caption" onChange={( e ) => setCaption( e.target.value )}/>

      <input type="submit" value="add post" />
      <FilePond
      allowFileEncode={true}
      oninitfile={ (file) => setFile(file) }
      allowMultiple={false}
      server={null}
      name="img"
      labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
    </form>
    </div>
  );
}

export default App;
