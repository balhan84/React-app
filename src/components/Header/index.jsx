import logoImg from "./logo.png";
import userImg from "./user.png";
import styles from "./header.module.css";

function Header(props) {
  const { isLogin } = props;
  return (
    <header className={styles.headerContainer}>
      <img className={styles.logoImg} src={logoImg} alt="" />
      <h1>Page Title</h1>
      {isLogin ? (
        <img className={styles.userImg} src={userImg} alt="" />
      ) : (
        <div>
          <button>LogIn</button>
          <button>SignUp</button>
        </div>
      )}
    </header>
  );
}

export default Header;
