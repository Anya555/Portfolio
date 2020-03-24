import React, { Component } from 'react';
import Navbar from "../components/Navbar/index";
import emailjs from 'emailjs-com';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

 

class ContactForm extends Component {
    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
    }

    handleSubmit(e) {
        e.preventDefault()
        const { name, email, subject, message } = this.state
        let templateParams = {
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
        this.resetForm()
    }

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
                <br></br><br></br>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 offset-sm-3 col-sm-12">
                            <Form onSubmit={this.handleSubmit.bind(this)}>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label className="text-muted">Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={this.state.email}
                                        className="text-primary"
                                        onChange={this.handleChange.bind(this, 'email')}
                                        placeholder="Enter email"
                                    />
                                </Form.Group>

                                <Form.Group controlId="formBasicName">
                                    <Form.Label className="text-muted">Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={this.state.name}
                                        className="text-primary"
                                        onChange={this.handleChange.bind(this, 'name')}
                                        placeholder="Name"
                                    />
                                </Form.Group>

                                <Form.Group controlId="formBasicSubject">
                                    <Form.Label className="text-muted">Subject</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="subject"
                                        className="text-primary"
                                        value={this.state.subject}
                                        onChange={this.handleChange.bind(this, 'subject')}
                                        placeholder="Subject"
                                    />
                                </Form.Group>

                                <Form.Group controlId="formBasicMessage">
                                    <Form.Label className="text-muted">Message</Form.Label>
                                    <Form.Control
                                        type="textarea"
                                        name="message"
                                        className="text-primary"
                                        value={this.state.message}
                                        onChange={this.handleChange.bind(this, 'message')}
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>

                            </Form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ContactForm;