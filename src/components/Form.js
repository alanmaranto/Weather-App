import React from "react";

const Form = () => {
  return (
    <form action="">
      <div className="input-field col s12">
        <input type="text" name="city" id="id" />
        <label htmlFor="city">City:</label>
      </div>
      <div className="input-field col s12">
        <select name="country" id="country">
          <option value="">Select a country</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
