import { motion } from "framer-motion";
import { useContext } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import HomeAnimation from "../components/HomeAnimation";
import { UserContext } from "../contexts/UserContext";

const Home = () => {
  const [nameValue, setNameValue] = useState("");
  const [nameError, setNameError] = useState(null);
  const { user, setUser } = useContext(UserContext);

  //handleChange para controlar el input, y hacer las  validaciones del error
  const handleChange = (e) => {
    const newNameValue = e.target.value;

    setNameValue(newNameValue);
    if (newNameValue === "") setNameError("Name is required");
    else if (!/^[a-zA-Z]{3,}$/i.test(newNameValue))
      setNameError(
        "Only letters and blanks are allowed y min should be 5 length"
      );
    else setNameError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nameError) {
      setUser(nameValue);
    }
  };

  return (
    <motion.div className="home__animation">
      <HomeAnimation />
      <motion.div className="form__container">
        <motion.h3 className="form__title">
          Hi mistic please{" "}
          <span className="welcome__title">type your name</span> to start
        </motion.h3>
        <form action="" className="container__input" onSubmit={handleSubmit}>
          <input
            value={nameValue}
            type="text"
            className="form-input"
            onChange={handleChange}
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            type="submit"
            className="form__container-btn"
          >
            start
          </motion.button>
        </form>
        {user && <Navigate to="/menu" />}
      </motion.div>
    </motion.div>
  );
};

export default Home;
