import Layout from "@/components/layout/layout";
import { Button, Card } from "react-bootstrap";

export default function Login(){
    return(
        <Layout>
            <Card className="p-5 m-5 mw-50">
                <form action="" className="container text-center d-flex flex-column">
                    <h1>Faça o Login</h1><hr />
                    <input className="my-2" type="email" placeholder="Digite seu e-mail" />
                    <input className="my-2" type="password" placeholder="Digite sua senha" />
                    <Button>Entrar</Button>
                </form>
            </Card>
        </Layout>
    )
}