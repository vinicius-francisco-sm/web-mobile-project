import { Aside } from "../Aside/Aside";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { MyNav } from "../Nav/Nav";

export function Layout({children}: any){
    return(
        <>
            <div className="container-fluid">
                <div className="row border border-dark">
                    <Header />
                </div>
                <div className="row border border-dark">
                    <MyNav />
                </div>
                <div className="row">
                    <main className="main-content col border-dark">
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