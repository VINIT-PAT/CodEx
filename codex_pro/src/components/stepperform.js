import React, { useState } from 'react';

function StepperForm() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2>Step 1: Create</h2>
            {/* Step 1 Content */}
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Step 2: Add a Question</h2>
            {/* Step 2 Content */}
          </div>
        );
      case 3:
        return (
          <div>
            <h2>Step 3: Select</h2>
            {/* Step 3 Content */}
          </div>
        );
      case 4:
        return (
          <div>
            <h2>Step 4: Assign Points</h2>
            {/* Step 4 Content */}
          </div>
        );
      case 5:
        return (
          <div>
            <h2>Step 5: Add Hints</h2>
            {/* Step 5 Content */}
          </div>
        );
      case 6:
        return (
          <div>
            <h2>Step 6: Review</h2>
            {/* Step 6 Content */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              {renderStepContent()}
              <div className="btn-group mt-3">
                {step !== 1 && (
                  <button className="btn btn-secondary" onClick={prevStep}>
                    Previous
                  </button>
                )}
                {step !== 6 ? (
                  <button className="btn btn-primary" onClick={nextStep}>
                    Next
                  </button>
                ) : (
                  <button className="btn btn-success">
                    Finish
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepperForm;