import React from "react";
import "./aboutUs.css";
import { Card, Accordion } from "react-bootstrap";

function AboutUs() {
    return (
        <>
            <h1>About Us</h1>
            <br />
            <div className="About">
            <div class="container-fluid">
                <div class="row">
                <Card style={{ width: '20rem'}}>
                        <Card.Img variant="top" src="https://ca.slack-edge.com/T9P33872P-U030X856MMM-g40ea892bae1-512" />
                        <Card.Body>
                        <Accordion defaultActiveKey={['0']} alwaysClosed>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Amy W.</Accordion.Header>
                        <Accordion.Body>
                            Hi! I'm Amy. I am from Idaho. I attended Bethel in February 2022 because I wanted to get a job as a 
                            Software Engineer to help provide for my family. I love to eat mangos!
                        </Accordion.Body>
                    </Accordion.Item>
                   </Accordion>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '20rem'}}>
                        <Card.Img variant="top" src="https://ca.slack-edge.com/T9P33872P-U034VF5TR40-9096d45a0676-512" />
                        <Card.Body>
                        <Accordion defaultActiveKey={['1']} alwaysClosed>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Andrew R.</Accordion.Header>
                        <Accordion.Body>
                        I joined Bethel to find another industry that I am passionate about where I can
                        share God's love. My favorite food it SEEFOOD. I am from Orange County, CA
                    </Accordion.Body>
                    </Accordion.Item>
                   </Accordion>
                        </Card.Body>
                    </Card>
                    <br></br>
                    <br></br>
                    <Card style={{ width: '20rem'}}>
                        <Card.Img variant="top" src="https://ca.slack-edge.com/T9P33872P-U039YLRV0R5-4104a6f26637-512" />
                        <Card.Body>
                        <Accordion defaultActiveKey={['3']} alwaysClosed>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Jonatan N.</Accordion.Header>
                        <Accordion.Body>
                            Jonatan is from Missouri. He joined Bethel Tech in March 2022. He wants to be a Frontend Developer to 
                            better provide for my family. He loves food!
                        </Accordion.Body>
                    </Accordion.Item>
                   </Accordion>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '20rem'}}>
                        <Card.Img variant="top" src="https://ca.slack-edge.com/T9P33872P-U02T9KCDG93-97230de6e5b6-512" />
                        <Card.Body>
                        <Accordion defaultActiveKey={['4']} alwaysClosed>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Rebekah S</Accordion.Header>
                        <Accordion.Body>
                            Rebekah is from North Carolina. She joined Bethel Tech to better provide for herself and 
                            her family. She would love to work as a developer for a church and or get a job working
                            at the FBI.
                        </Accordion.Body>
                    </Accordion.Item>
                   </Accordion>
                        </Card.Body>
                    </Card>
                   
                    
                </div>
            </div>
            </div>
            <hr />
    </>
    )
}

export default AboutUs;