const StepTwo = (props) => {
  return (
    <div className="step-two">
      <h1>Results</h1>

      <div className="infos">
        <p>Name: {props.username}</p>
        <p>Email: {props.email}</p>
        <p>Password: {props.password}</p>
      </div>

      <button onClick={props.onClick}>Edit your informations</button>
    </div>
  );
};
export default StepTwo;
