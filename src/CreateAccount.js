import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function CreateAccount(props) {
  return (
    <Form>
      <Form.Group className="mb-3" >
        <Form.Label>First Name:</Form.Label>
        <Form.Control type="text" name="name" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Last Name:</Form.Label>
        <Form.Control type="text" name="name" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Email:</Form.Label>
        <Form.Control type="email" name="email" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Password:</Form.Label>
        <Form.Control type="text" name="phone" />
      </Form.Group>
      <Button type="submit">Confirm Password</Button>
    </Form>
  )
}

export default CreateAccount