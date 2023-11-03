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
        {/* <label htmlFor="username">Name</label>
        <input
          onChange={(event) => {
            props.onChange(event, props.username[1]);
          }}
          type="text"
          id="username"
          name="username"
          placeholder="Jean Dupont"
          value={props.username[0]}
        />
        <label htmlFor="email">Email</label>
        <input
          onChange={(event) => {
            props.onChange(event, props.email[1]);
          }}
          type="text"
          id="email"
          name="email"
          placeholder="jeandupont@lereacteur.io"
          value={props.email[0]}
        />
        <label htmlFor="password">Password</label>
        <input
          onChange={(event) => {
            props.onChange(event, props.password[1]);
          }}
          type="password"
          id="password"
          name="password"
          placeholder="lErEaCtEuR2020"
          value={props.password[0]}
        />
        <label htmlFor="confirmPassword">Confirm your password</label>
        <input
          onChange={(event) => {
            props.onChange(event, props.confirmPassword[1]);
          }}
          type="password"
          id="confirmPassword"
          name="password"
          placeholder="lErEaCtEuR2020"
          value={props.confirmPassword[0]}
        /> */}
        <input type="submit" value="Register" />
      </form>
    </>
  );
};
export default Form;
