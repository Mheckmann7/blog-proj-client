import styles from './Header.module.css'

function Header(props) {
    return (
        <header className={styles.Header}>
            <p>Header</p>
            <nav>
                <ul>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header