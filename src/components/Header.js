import { Link } from "react-router-dom";
import { AiFillHome } from 'react-icons/ai';

import styles from './Header.module.css';

const Header = () => {
    return (
        <div>
            <Link className={styles["home-btn"]} to="/"><AiFillHome /></Link>
        </div>
    );
}

export default Header;