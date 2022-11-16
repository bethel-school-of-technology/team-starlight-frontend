import React from "react";
import "./aboutUs.css";
import { Card, Button } from "react-bootstrap";

function AboutUs() {
    return (
        <>
            <h1>About Us</h1>
            <br />
            <div class="container-fluid">
                <div class="row">
                    <Card style={{ width: '15rem'}}>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" />
                        <Card.Body>
                            <Card.Title>Jonny</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '14rem'}}>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGRvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" />
                        <Card.Body>
                            <Card.Title>Andrew</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '15rem'}}>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" />
                        <Card.Body>
                            <Card.Title>Rebekah</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '15rem'}}>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1625316708582-7c38734be31d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGRvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" />
                        <Card.Body>
                            <Card.Title>Amy</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    {/* <div class="col"><h3>Jonny</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Vel elit scelerisque mauris pellentesque 
                    pulvinar. Vestibulum lorem sed risus ultricies tristique. Morbi tincidunt augue interdum 
                    velit euismod. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. 
                    Risus ultricies tristique nulla aliquet enim tortor at auctor urna. Purus in massa tempor nec 
                    feugiat nisl pretium fusce id. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. 
                    Vulputate enim nulla aliquet porttitor lacus. Id neque aliquam vestibulum morbi blandit cursus 
                    risus at ultrices.</p>
                    </div>
                    <div class="col"><h3>Andrew</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Vel elit scelerisque mauris pellentesque 
                    pulvinar. Vestibulum lorem sed risus ultricies tristique. Morbi tincidunt augue interdum 
                    velit euismod. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. 
                    Risus ultricies tristique nulla aliquet enim tortor at auctor urna. Purus in massa tempor nec 
                    feugiat nisl pretium fusce id. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. 
                    Vulputate enim nulla aliquet porttitor lacus. Id neque aliquam vestibulum morbi blandit cursus 
                    risus at ultrices.</p></div>
                    <div class="col"><h3>Rebekah</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Vel elit scelerisque mauris pellentesque 
                    pulvinar. Vestibulum lorem sed risus ultricies tristique. Morbi tincidunt augue interdum 
                    velit euismod. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. 
                    Risus ultricies tristique nulla aliquet enim tortor at auctor urna. Purus in massa tempor nec 
                    feugiat nisl pretium fusce id. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. 
                    Vulputate enim nulla aliquet porttitor lacus. Id neque aliquam vestibulum morbi blandit cursus 
                    risus at ultrices.</p></div>
                    <div class="col"><h3>Ben</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Vel elit scelerisque mauris pellentesque 
                    pulvinar. Vestibulum lorem sed risus ultricies tristique. Morbi tincidunt augue interdum 
                    velit euismod. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. 
                    Risus ultricies tristique nulla aliquet enim tortor at auctor urna. Purus in massa tempor nec 
                    feugiat nisl pretium fusce id. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. 
                    Vulputate enim nulla aliquet porttitor lacus. Id neque aliquam vestibulum morbi blandit cursus 
                    risus at ultrices.</p></div>
                    <div class="col"><h3>Amy</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Vel elit scelerisque mauris pellentesque 
                    pulvinar. Vestibulum lorem sed risus ultricies tristique. Morbi tincidunt augue interdum 
                    velit euismod. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. 
                    Risus ultricies tristique nulla aliquet enim tortor at auctor urna. Purus in massa tempor nec 
                    feugiat nisl pretium fusce id. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. 
                    Vulputate enim nulla aliquet porttitor lacus. Id neque aliquam vestibulum morbi blandit cursus 
                    risus at ultrices.</p></div> */}
                </div>
            </div>
            <hr />
    </>
    )
}

export default AboutUs;