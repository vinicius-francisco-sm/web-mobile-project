import styles from './footer.module.css'

export default function Footer(){
    return(
        <>
            <footer className="bg-light">
                <div className={styles.footer}>
                    <ul>
                        <li><a href="">Instagram</a></li>
                        <li><a href="">Discord</a></li>
                        <li><a href="">Linkedin</a></li>
                        <li><a href="">Github</a></li>
                    </ul>
                </div>
            </footer>
        </>
    )
}