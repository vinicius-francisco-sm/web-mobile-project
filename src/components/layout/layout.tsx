import Footer from "../footer/footer";
import Header from "../header/header";
import MyNav from "../nav/nav";
import Head from "next/head";
import styles from './layout.module.css'

export default function Layout({children}: any){
    return(
        <>
            <Head>
                <link rel="shortcut icon" href="/images/logo/traffic-light-logo-tab.png" />
                <title>Aprenda sobre o trânsito</title>
            </Head>
            <div className="container-fluid">
                <div className="row border border-dark">
                    <Header />
                </div>
                <div className="row border border-dark">
                    <MyNav />
                </div>
                <div className="row">
                    <main className={`${styles.main} main-content col border-dark`}>
                        {children}
                    </main>
                </div>
                <div className="row border border-dark">
                    <Footer />
                </div>
            </div>
        </>
    )
}