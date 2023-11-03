import "./App.css";
import { useState } from "react";
import Footer from "./components/Footer";
import Form from "./components/Form";
import StepTwo from "./components/StepTwo";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isEditMode, setIsEditMode] = useState(true);
  const [isNotNextStep, setIsNotNextStep] = useState(true);

  const handleSubmitFor = (event) => {
    event.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      alert("tous les champs sont obbligatoires!");
    } else {
      if (password !== confirmPassword) {
        alert("Vos deux mots de passe ne sont pas identiques");
      } else {
        setIsNotNextStep(false);
        setIsEditMode(false);
      }
    }
  };

  const handleChangeEvent = (event, setter) => {
    setter(event.target.value);
  };

  const handleEditMode = () => {
    setIsEditMode(true);
    setIsNotNextStep(true);
  };
  return (
    <>
      <main>
        {isEditMode || isNotNextStep ? (
          <Form
            onSubmit={handleSubmitFor}
            onChange={handleChangeEvent}
            username={[username, setUsername]}
            email={[email, setEmail]}
            password={[password, setPassword]}
            confirmPassword={[confirmPassword, setConfirmPassword]}
          />
        ) : (
          <StepTwo
            username={username}
            email={email}
            password={password}
            onClick={handleEditMode}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
