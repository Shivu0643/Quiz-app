import React from "react";

function AnswerBox() {
  return (
    <div class="container my-5">
      <div class="bg-light p-5 rounded">
        <div class="col-sm-8 py-5 mx-auto">
          <form>
            <div className="checkbox mb-3"></div>
            <button
              className="w-50 btn btn btn-outline-dark"
              type="submit"
            >
              Done
            </button>
            <div className="form-floating">
              <input
                className="form-control"
                id="floatingInput"
                placeholder="question"
              />
              <label>Enter the question here</label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AnswerBox;
