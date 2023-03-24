import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    navigate("/quiz-details", { replace: true });
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>The Daily MS Excel Quiz</h1>
        <form className={styles.form} onSubmit={handleFormSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Full name" required />
          <button type="submit" className={styles.btn}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
