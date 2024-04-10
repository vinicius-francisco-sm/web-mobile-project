import { Layout } from "@/components/Layout/Layout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
        <article>
          <section>
            <div className="container text-center">
              <h1>Título Principal</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In fugiat tenetur tempora nihil consequatur ut magni maxime, molestiae quidem quibusdam, cumque libero a omnis vel placeat sint. Temporibus, debitis quod!</p>
            </div>
          </section>
        </article>
      </Layout>
    </>
  );
}
