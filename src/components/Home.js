import React, { useState } from "react";

function Home(props) {
  const [input, setInput] = useState("");
  const [change, setChange] = useState("");

  function handleClick(event) {
    props.onAdd(input);
    setChange(input);
    event.preventDefault();
  }

  return (
    <React.Fragment>
    <div class="container my-5">
      <div class="bg-light p-5 rounded">
        <div class="col-sm-8 py-5 mx-auto">
          <form>
            <h1 className="h3 mb-3 fw-normal">Question Box</h1>

            <div className="form-floating">
              <input
                className="form-control"
                id="floatingInput"
                placeholder="question"
              
                onChange={(e) => { 
                  setInput(e.target.value);
                }}
              />
              <label>Enter the question here</label>
            </div>
            <div className="checkbox mb-3"></div>
            <button
              className="w-50 btn btn btn-outline-dark"
              type="submit"
              onClick={handleClick}
            >
              Done
            </button>
          </form>
        </div>
      </div>
    </div>
    <h1>{change}</h1>
    </React.Fragment>
  );
}

export default Home;
