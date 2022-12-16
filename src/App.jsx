import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import Blog from './pages/blog/Blog';
import AboutUs from './pages/about/AboutUs';
import Contact from './pages/contact/Contact';
import Login from './pages/Login/Login';
import Profile from './pages/profile/Profile.screen';
import Info from './pages/profile/components/info/Info.component';
import ChangePassword from './pages/changePassword/changePassword.screeen';
import '../src/stylesheet/styles.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Bloglist from './pages/bloglist/Bloglist';
import New from './pages/new/New';

export default function App() {
    return (
        <>
            <ToastContainer/>
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/" element={<Login />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/bloglist" element={<Bloglist />} />
                    <Route path="/blog/:id" element={<Blog />} />
                    <Route path="/new" element={<New />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/profile" element={<Profile><Info/></Profile>} />
                    <Route path="/change-pass" element={<Profile><ChangePassword/></Profile>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
