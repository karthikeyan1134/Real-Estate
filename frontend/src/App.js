import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login.js'
import PasswordUpdate from './components/PasswordUpdate/PasswordUpdate.js';
import Signup from './components/Signup/Signup.js';
import ResetPassword from './components/Resetpassword/ResetPassword.js';
import Otp from './components/Otp/Otp.js';
import Home from './pages/Home.js'; 
import Searchone from './components/Searchone/Searchone.js';
import Imagepage from './components/Imagepage/Imagepage.js';
import Search from './pages/Search.js'
import Profile from './components/Profile/Profile.js';
import Post from './components/Post/Post.js';
import Contact from './pages/Contact.js';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/passwordupdate' element={<PasswordUpdate />} />
          <Route path='/resetpassword' element={<ResetPassword />} />
          <Route path='/otp' element={<Otp />} />
          <Route path='/search/:id' element={<Searchone/>} />
          <Route path='/search/:id/images' element={<Imagepage/>} />
          <Route path='/search' element={<Search/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/profile/post' element={<Post/>} />

        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
// this is used for storing form data
// const [formdata,setformdata]=usestate({})
// const  onchange=(e)=>{
// setformdata({
//   ...formdata,
//   [e.target.id]:[e.target.value]
// })
// }
// and use axios for handlesubmit 