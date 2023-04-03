import React, { Component } from 'react';
import { db } from '../firebase/firebase';
import { Button, Form , InputGroup } from 'react-bootstrap';

class Footer extends Component {
    state = {feedback: ""}

    onSubmit = event => {
        const { feedback } = this.state;
            db.ref('feedbacks').push().set({ feedback: feedback })
            .then(()=> {
                alert("Thank you so much for taking the time to send us your valuable feedback!");
                this.setState({ feedback: "" });
            })
            .catch(e =>{
                alert(e.message);
            });
            event.preventDefault();
    }

    render() {
        const { feedback } = this.state;
        const Invalid = feedback === "";
        return (<div id="ourfooter">
            <br/>
            <footer>
                <div class="container-foot">
                    <section class="ft-main">
                        <div class="ft-main-item">
                        <h2 class="ft-title">ABOUT</h2>
                        <ul>
                            <li><a href="https://about.google/products/">Services</a></li>
                            <li><a href="#">Portfolio</a></li>
                        </ul>
                        </div>
                        <div class="ft-main-item">
                        <h2 class="ft-title">RESOURCES</h2>
                        <ul>
                            <li><a href="https://www.google.com/docs/about/">Docs</a></li>
                            <li><a href="https://blog.sepscience.com/foodscience">Blog</a></li>
                            <li><a href="https://www.barnesandnoble.com/b/free-ebooks/ebooks-nook/diet-health-fitness/diet-nutrition/_/N-ry0Z8qaZ11j8">eBooks</a></li>

                        </ul>
                        </div>
                        <div class="ft-main-item">
                        <h2 class="ft-title">CONTACT</h2>
                        <ul>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">Sales</a></li>
                            <li><a href="#">More Info</a></li>
                        </ul>
                        </div>
                        <div id="ourfeedback" class="ft-main-item">
                            <h2 class="ft-title">FEEDBACK</h2>
                            <p style={{color: "white"}}>Give your valuable feedback!</p>
                            <Form onSubmit={this.onSubmit}>
                                <InputGroup style={{width: "75%"}}>
                                    <Form.Control type="textarea" name="feedback" placeholder="Enter feedback here"
                                    value={feedback}
                                    onChange={(e)=> this.setState({feedback: e.target.value})
                                    }/>
                                </InputGroup>
                                <Button type="submit"  disabled={Invalid} style={{width: "25%"}}>Send</Button>
                            </Form>
                        </div>
                    </section>

                    <section class="ft-social">
                        <ul class="ft-social-list">
                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                        <li><a href="https://github.com/prachetyerr/nutrify-app-webathon"><i class="fa fa-github"></i></a></li>
                        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                        </ul>
                    </section>
                    <section class="ft-legal">
                        <ul class="ft-legal-list">
                        <li><a href="#">Terms &amp; Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li>&copy; 2023 Copyright TEAM ELFTHANOS</li>
                        </ul>
                    </section>
                </div>
            </footer>
        </div>);
    }
    
}

export default Footer;
