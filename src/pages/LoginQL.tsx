import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MainLogin from '../components/MainLogin';

class LoginQL extends Component {
    render() {
        return (
            <div className="bg-default">
                <Navbar></Navbar>
                <MainLogin></MainLogin>
                <Footer></Footer>
            </div>
        );
    }
}

export default LoginQL;