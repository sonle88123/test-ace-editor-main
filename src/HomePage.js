import React from 'react';
import { Link } from 'react-router-dom';
import { Calculate } from '@mui/icons-material';
import { MailLockSharp } from '@mui/icons-material';
import './homepage.css';
import Card from 'react-bootstrap/Card';
import mathImage from './images/son1.jpg';
import { ArrowBack } from '@mui/icons-material';
const HomePage = () => {
    return (
        <div className="learn-page">
            <header className="text-center header1">
                <h1 className="display-4">Code Pad</h1>
                <p className="lead">Learn to code for free.</p>
                <h1 className="text-center">Learn to code — for free.</h1>
                <h2 className="text-center">Responsive Web Design Certification</h2>
                <h3 className="text-center">Earn certifications.
                    <p>Since 2014, more than 40,000 Codepad graduates have gotten jobs at tech companies including:</p>
                </h3>
            </header>
            <section className="container">
                <h1>Earn free verified certifications in:
                </h1>
                <Link to="/question">
                    <span className="material-symbols-outlined">
                        <button className=".btn btn-primary custom-button ">
                            <div>
                                <Calculate className="icon" />  ALGORITHMS
                            </div>
                            <  ArrowBack className="icon" />
                        </button>
                    </span>
                </Link>
                {/* <span class="material-symbols-outlined">
                    <button className=".btn btn-primary custom-button">
                        <div>
                            <Calculate className="icon" />  GRAPH
                        </div>

                    </button>
                </span> */}
                {/* <span class="material-symbols-outlined">
                    <button className=".btn btn-primary custom-button"><MailLockSharp className="icon" />1</button>
                </span>
                <span class="material-symbols-outlined">
                    <button className=".btn btn-primary custom-button"><MailLockSharp className="icon" />3</button>
                </span>
                <span class="material-symbols-outlined">
                    <button className=".btn btn-primary custom-button"><MailLockSharp className="icon" />4</button>
                </span> */}
                <h1 className="text-center">Here is what our alumni say about Codepad:</h1>
                <Card style={{ width: '18rem' }} className='text-center'>
                    <Card.Img variant="top" src={mathImage} />
                    <Card.Body>
                        <Card.Title className='text-center'>Le Quang Son</Card.Title>
                        <Card.Text>
                            "It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on Codepad. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
                        </Card.Text>
                    </Card.Body>

                </Card>
                <h1 className='text-center'>Frequently asked questions:</h1>
                <p className='heading'>What exactly is Codepad?</p>
                <p>Codepad is a community of people from all around the world who are learning to code together. We're a 501(c)(3) public charity.</p>
                <p className='heading'>How will Codepad help me learn to code?</p>
                <p>You will learn to code by building dozens of projects, step-by-step, right in your browser, code editor, or mobile app.</p>
                <h3>Happy Coding!!!</h3>

            </section>
            <footer className='site-footer'>
                <div className='footer-top'>
                    <p className='p1'>Codepad is a donor-supported tax-exempt 501(c)(3) charitable organization (United States Federal Tax Identification Number: 82-0779546)
                        Our mission: to help people learn to code for free. We accomplish this by creating thousands of videos, articles, and interactive coding lessons - all freely available to the public. We also have thousands of freeCodeCamp study groups around the world.
                    </p>
                    <div className='trending'>
                        <h2 className='col-trending text-center '>Trending Guides</h2>
                        <a>What is Data Science?</a>
                        <a>What is Data Science?</a>
                        <a>What is Data Science?</a>
                        <a>What is Data Science?</a>
                    </div>
                </div>
                <div className='our '>
                    <a > About </a>
                    <a> Alumni Network</a>
                    <a> Open Source</a>
                    <a> Shop</a>
                    <a> Support</a>
                    <a>Sponsors</a>
                    <a>Academic Honesty</a>
                    <a>Code of Conduct</a>
                    <a>Privacy Policy</a>
                    <a>Terms of Service</a>
                </div>
            </footer>

        </div >
    );
};

export default HomePage;
