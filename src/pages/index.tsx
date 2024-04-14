import Layout from "@/components/layout/layout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
        <article>
          <section>
            <div className="container text-center">
              <h1>Aprenda sobre regras de trânsito com a gente!</h1>
              <p>
                O trânsito das grandes cidades é um ambiente muito perigoso, pois nele carros e pedestres disputam o mesmo território. Aprenda conosco, de forma simples e divertida, a como tornar este ambiente mais seguro a todos e assim reduzir a porcentagem de acidentes que ocorrem nas ruas das cidades.
                </p>
              <p>
                Para iniciar agora, clique em <strong>módulos</strong> e escolha o assunto que mais te interessa para aprender.
              </p>
              <p>
                Caso queira saber mais sobre quem somos nós e os nossos objetivos, clique em <strong>Sobre</strong> e saiba mais.
              </p>
              <figure>
                <img src="https://media.istockphoto.com/id/503600823/vector/confusion.jpg?s=612x612&w=0&k=20&c=IOQgNe__dyE6pJhDSSWkCNCN-RoPJR6IOt_6iVEf8h8=" alt="" width={300} />
                <figcaption>fonte: internet</figcaption>
              </figure>
            </div>
          </section>
        </article>
      </Layout>
    </>
  )
}
