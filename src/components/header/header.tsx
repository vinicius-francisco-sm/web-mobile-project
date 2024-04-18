import styles from './header.module.css'


export default function Header(){
    return(
        <>
            <header className={`${styles.header} bg-primary`}>
                <figure>
                    <img src="/images/logo/traffic-light-logo-tab.png" alt="Logo do site" width={50} />
                </figure>
            </header>
        </>
    )
}