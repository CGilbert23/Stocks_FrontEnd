const Update = ({handleStatusChange, handleSubmit2}) => {
  return (
    <div>
      <div className="update-form">
        <label className="update-form-label" htmlFor="one_status">
          Screen Status:
          <select onChange={(event)=> handleStatusChange(event)} id="one_status" name="one_status">
            <option value="">Select option</option>
            <option value="Complete"> Complete</option>
            <option value="Scheduled"> Scheduled </option>
            <option value="Incomplete"> Incomplete </option>
          </select>
        </label>

        <label className="update-form-label" htmlFor="two_status">
          Testing Status:
          <select onChange={(event)=> handleStatusChange(event)} id="two_status" name="two_status">
            <option value="">Select option</option>
            <option value="Complete"> Complete</option>
            <option value="Scheduled"> Scheduled </option>
            <option value="Incomplete"> Incomplete </option>
          </select>
        </label>

        <button onClick={handleSubmit2} type="submit">Submit</button>
      </div>
    </div>
  );
};


export default Update;