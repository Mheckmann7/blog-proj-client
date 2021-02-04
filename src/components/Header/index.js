import styles from './Header.module.css'
import { Link } from 'react-router-dom'

function Header(props) {
    return (
        <header className={styles.Header}>
            <Link to="/">
                <h1>Header</h1>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/blog'>Blog</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header