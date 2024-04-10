import { Inter } from "next/font/google";
import { Layout } from "@/components/Layout/Layout";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const inter = Inter({ subsets: ["latin"] });

export default function Modules() {
  return (
    <main>
      <Layout>
        <div className="container my-4">
          <div className="row">
            <div className="col-lg my-2">
              <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Módulo 1</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Acessar</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg my-2">
              <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Módulo 2</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Acessar</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg my-2">
              <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Módulo 3</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Acessar</Button>
                </Card.Body>
              </Card>
            </div>
          </div>          
        </div>
      </Layout>
    </main>
  );
}
