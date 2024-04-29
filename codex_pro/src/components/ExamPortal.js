import React, { useState } from 'react';
import '../App.css';
function ExamPortal() {
  const [answer, setAnswer] = useState('');
  const [output, setOutput] = useState('');

  const handleSubmit = () => {
    // Here you can process the answer and generate output
    // For this example, let's just set the output to the input answer
    setOutput(answer);
  };

  return (
  <div className='container'>
     <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0">
        <a href="/" className="d-inline-flex link-body-emphasis fw-bold fs-3"> Assess Pro 
        </a>
      </div>
      <div className="col-md-3 text-end">
      <ul className="nav col-12 col-md-auto mb-2  mb-md-0">
        <li><a href="#" className="nav-link px-2 fs-4 link-secondary">Jane Doe</a></li>
        <li><a href="#" className="nav-link px-2 fs-4 link-secondary fw-semibold ms-3">1/11</a></li>
        <li><a href="#" className="nav-link px-3 fs-4 link-secondary bg-body-secondary ms-4">60:00</a></li>
      </ul>
      </div>
    </header>
    <div>
    <div>
    <h4 className='fw-bold'>Question I : Write A Function to Calculate Factorial.</h4>
    </div>
    <div className="form-group mt-3 ">
  <textarea
    className="form-control bg-dark text-white"
    rows="18"
    placeholder="Write your code here"
    style={{ color: 'white' }} 
    value={answer}
    onChange={(e) => setAnswer(e.target.value)}
  ></textarea>
</div>
<button className="btn btn-primary mt-3" type="button" onClick={handleSubmit}>
  Run The Code 
</button>
<div className="card mt-3 bg-dark" >
  <div className="card-body" style={{ maxHeight: '150px', overflow:'hide' }}> 
    <h5 className="card-title text-white">Output Window :</h5>
    <p className="card-text" style={{ height: '150px' }}>{output}</p> 
  </div>
</div>
        </div>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
  <p className=" col-md-4 mb-0 ">
  <button type="button" class="btn btn-dark rounded-pill  ">Previous</button>
  <button type="button" class="btn btn-dark rounded-pill ms-3 ">Next</button>
</p>
  <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
  <button type="button" class="btn btn-dark rounded-pill  ">Submit</button>
  </a>

  <ul className="nav col-md-4 justify-content-end">
    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Terms of Service</a></li>
    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Privacy Policy</a></li>
  </ul>
</footer>
    </div>
  );
}

export default ExamPortal;






{/* code for input accepting o/p field
<div className="card mt-3 bg-dark">
  <div className="card-body" style={{ maxHeight: '150px', overflow: 'auto' }}>
    <h5 className="card-title text-white">Output Window :</h5>
    <textarea
      className="form-control bg-dark text-white border-0"
      rows="3"
      style={{ resize: 'none', width: '100%' }}
      value={output}
      readOnly
    ></textarea>
  </div>
</div> */}