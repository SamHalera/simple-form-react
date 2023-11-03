import CustomInput from "./CustomInput";
const Form = (props) => {
  return (
    <>
      <h1>Create account</h1>
      <form onSubmit={props.onSubmit} action="">
        {/* new coomponent fot all Input */}
        <CustomInput
          value={props.username[0]}
          onChange={props.onChange}
          setState={props.username[1]}
          type="text"
          placeholder="Jean Dupont"
          label="name"
          title="Name"
        />
        <CustomInput
          value={props.email[0]}
          onChange={props.onChange}
          setState={props.email[1]}
          type="email"
          placeholder="jeandupont@lereacteur.io"
          label="email"
          title="Email"
        />
        <CustomInput
          value={props.password[0]}
          onChange={props.onChange}
          setState={props.password[1]}
          type="password"
          placeholder="lErEaCtEuR2020"
          label="password"
          title="Password"
        />
        <CustomInput
          value={props.confirmPassword[0]}
          onChange={props.onChange}
          setState={props.confirmPassword[1]}
          type="password"
          placeholder="lErEaCtEuR2020"
          label="confirmPassword"
          title="Confirm Password"
        />

        <input type="submit" value="Register" />
      </form>
    </>
  );
};
export default Form;
