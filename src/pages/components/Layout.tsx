import { Aside } from "./Aside";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { MyNav } from "./Nav";

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
                    <div className="col border border-dark">
                        <Aside />
                    </div>
                    <div className="col border border-dark">
                        {children}
                    </div>
                </div>
                <div className="row border border-dark">
                    <Footer />
                </div>
            </div>
        </>
    )
}