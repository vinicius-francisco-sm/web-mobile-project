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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A debitis quidem numquam laudantium rerum suscipit, exercitationem fuga atque corporis accusantium qui ipsam, repellat dolorem! Inventore voluptatem perspiciatis totam libero recusandae.
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui consequuntur sequi est, veritatis, autem quos rerum earum pariatur architecto non cumque laboriosam enim? Deleniti aliquam nisi, reiciendis facere nesciunt ducimus.
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptate fugiat magnam earum atque voluptatem ratione nobis ullam et non aperiam quo autem temporibus, inventore quidem nisi illum culpa. Velit!
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
