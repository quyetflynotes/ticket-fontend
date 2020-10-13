import React, { Component } from 'react';
import Footer from '../components/Footer';
import MainRegister from '../components/MainRegister';
import Navbar from '../components/Navbar';
class Register extends Component {
    render() {
        return (
            <div className="bg-default">
                <Navbar/>
                <MainRegister/>
                <Footer/>
            </div>
        );
    }
}

export default Register;