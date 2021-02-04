import styles from './Footer.module.css'

function Footer(props) {
    return (
        <footer className={styles.Footer}> 
            <h4>Copyright &copy; All Rights Reserved {new Date().getFullYear} Blog</h4>
        </footer>
    );
}

export default Footer 