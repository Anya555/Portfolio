import React, { Component } from 'react';
import Navbar from "../components/Navbar/index";
import Footer from "../components/Footer/index"
import emailjs from 'emailjs-com';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./contactpage.css";
import swal from 'sweetalert';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from "styled-components";

const FadeIn = styled.div`animation: 1s ${keyframes`${fadeIn}`} `


class ContactForm extends Component {
    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
    }

    handleSubmit(e) {
        e.preventDefault()
        
          // email js  parameters

        const { name, email, subject, message } = this.state
        let templateParams = {
            name: name,
            from_name: email,
            to_name: 'gmail',
            subject: subject,
            message_html: message,
        }
      
        emailjs.send(
            'gmail',
            'template_wtAzDIQ6',
            templateParams,
            'user_tImdPK6EDlPQOjs1QcpHq'
        )
        this.resetForm();

        // 'message sent' confirmation message using sweetalert
        swal({
            title: "Thank You!",
            text: "Your message has been sent!",
            icon: "success",
            button: "Ok"
        });
    }


    // clearing out form on submit
    resetForm() {
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
        })

    }

    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
    }

    
    render() {
        return (
            <>
                <Navbar />
                <br></br>
               

                <div className="container">
                    <div className="row">

                        <div className="col-md-6 offset-sm-3 col-sm-12">

                        <FadeIn>
                            <h4 className="getintouch">Please fill out a form to get in touch with me</h4>
                         
                            <div className="card">
                                <Form onSubmit={this.handleSubmit.bind(this)} className="form">


                                    <br></br>

                                    <Form.Group controlId="formBasicEmail" className="contact">
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            value={this.state.email}
                                            className="text-primary"
                                            onChange={this.handleChange.bind(this, 'email')}
                                            placeholder="Enter email"
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicName" className="contact">
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            value={this.state.name}
                                            className="text-primary"
                                            onChange={this.handleChange.bind(this, 'name')}
                                            placeholder="Name"
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicSubject" className="contact">
                                        <Form.Control
                                            type="text"
                                            name="subject"
                                            className="text-primary"
                                            value={this.state.subject}
                                            onChange={this.handleChange.bind(this, 'subject')}
                                            placeholder="Subject"
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="exampleForm.ControlTextarea1" className="contact">
                                        <Form.Control as="textarea" rows="6"
                                            placeholder="Message..."
                                            className="text-primary"
                                            value={this.state.message}
                                            onChange={this.handleChange.bind(this, 'message')}
                                            required
                                        />
                                    </Form.Group>

                                    <div>
                                        <Button variant="outline-light" type="submit" className="submit">
                                            Get in touch
                                </Button>

                                    </div>
                                    <br></br><br></br>

                                </Form>
                              
                            </div>
                            </FadeIn>
                        </div>

                    </div>
                </div>

                <br></br>

                <br></br>
                <Footer />
            </>
        );
    }
}

export default ContactForm;