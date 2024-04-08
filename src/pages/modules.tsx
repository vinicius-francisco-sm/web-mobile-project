import { Inter } from "next/font/google";
import { Layout } from "./components/Layout/Layout";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const inter = Inter({ subsets: ["latin"] });

export default function Modules() {
  return (
    <main>
      <Layout>
        <article className="container-fluid container-sm bg-secondary d-flex">
        <Card style={{ width: '18rem' }} className="m-1">
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className="m-1">
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </article>
      </Layout>
    </main>
  );
}
