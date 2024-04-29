import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import stepper from "../assets/images/Stepper.png"

function CodingQuestionForm() {
  const [question, setQuestion] = useState('');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [level, setLevel] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can submit the form data to your backend or perform any other actions
    console.log({ question, input, output, category, title, level });
  };

  return (
    <div style={{ backgroundColor: '#6dae81', minHeight: '100vh', padding: '20px' }}>
      <Container>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4  ">
      <div className="col-md-3 mb-2 mb-md-0">
        <a href="/" className="d-inline-flex link-body-emphasis fw-bold fs-3"> Assess Pro 
        </a>
      </div>
      <div className="col-md-3 text-start">
    <ul className="nav col-12 col-md-auto mb-2 mb-md-0 d-flex justify-content-start align-items-center">
      <li><a href="#" className="nav-link link-dark fs-4"><i class="bi bi-question-circle"></i></a></li>
      <li><a href="#" className="nav-link link-light fs-3"><i class="bi bi-laptop"></i></a></li>
      <li><a href="#" className="btn btn-dark px-2 text-white ms-2">Save</a></li>
      <li><a href="#" className="btn btn-dark px-2 text-white ms-2">Cancel</a></li>
    </ul>
  </div>
    </header>
    <div class="text-center">
  <img src={stepper} class="img-fluid" alt="..."/>
</div>
        <h3 className="mb-5 mt-5 fw-bold ">Practical Exam : Coding Basics</h3>
        <div className="d-flex justify-content-between mb-4">
        <h4 className='fw-bold'>Question Details - </h4>
        </div>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3 ">
            <Col>
              <Form.Group controlId="question">
                <Form.Label className='fw-bold fs-5'>Question Statement</Form.Label>
                <Form.Control as="textarea" rows={3} value={question} placeholder='Enter Question Here'  style={{ backgroundColor: '#d9eade'}}onChange={(e) => setQuestion(e.target.value)} />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="input&output">
              <Form.Label className='fw-bold fs-5'>Input & Output</Form.Label>
                <Form.Control type="text" value={input} placeholder='Input Output Format'  style={{ backgroundColor: '#d9eade'}} onChange={(e) => setInput(e.target.value)} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="testcase">
              <Form.Label className='fw-bold fs-5'>Test Case</Form.Label>
                <Form.Control type="text" value={output} placeholder='Test Case Example'  style={{ backgroundColor: '#d9eade'}} onChange={(e) => setOutput(e.target.value)} />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
            <Form.Group controlId="title">
                <Form.Label className='fw-bold fs-5'>Question Title</Form.Label>
                <Form.Control type="text" value={title} placeholder='Title'  style={{ backgroundColor: '#d9eade'}}  onChange={(e) => setTitle(e.target.value)} />
              </Form.Group>
             
            </Col>
            <Col>
            <Form.Group controlId="category">
                <Form.Label className='fw-bold fs-5'>Category</Form.Label>
                <Form.Control type="text" value={category} placeholder='Category'  style={{ backgroundColor: '#d9eade'}}  onChange={(e) => setCategory(e.target.value)} />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="level">
            <Form.Label className='fw-bold fs-5' >Level</Form.Label>
            <div>
              <Form.Check className='fw-semibold fs-6' inline type="radio" label="Easy" value="easy" checked={level === 'easy'} onChange={() => setLevel('easy')} />
              <Form.Check className='fw-semibold fs-6' inline type="radio" label="Medium" value="medium" checked={level === 'medium'} onChange={() => setLevel('medium')} />
              <Form.Check className='fw-semibold fs-6' inline type="radio" label="Hard" value="hard" checked={level === 'hard'} onChange={() => setLevel('hard')} />
            </div>
          </Form.Group>
        <div className='text-center'>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default CodingQuestionForm;