import Layout from "@/components/layout/layout";

export default function About(){
    return (
        <Layout>
            <article>
                <section>
                    <h1>Quem somos nós?</h1>
                    <p>
                        Somos um grupo de estudantes da Universidade Presbiteriana Mackenzie de São Paulo, que nos juntamos para realizar este projeto, com o objetivo de ajudar a população educando as pessoas sobre as regras de trânsito desde antes delas se tornarem motoristas.
                    </p>
                    <p>
                        A ONU e seus parceiros em território brasileiro se uniram para abordarem alguns <a href="https://sdgs.un.org/goals" target="_blank">Objetivos de Desenvolvimento Sustentável</a>. Ao todo são 17 objetivos correlacionados, que representam os maiores desafios quando o assunto é desenvolvimento humano. Acesse o site oficial para conhecer todos os objetivos da ONU.
                    </p>
                    <p>
                        Este projeto tem como alvo o objetivo:
                    </p>
                    <blockquote className="container text-center">
                        3.6 Até 2020, reduzir pela metade as mortes e os ferimentos globais por acidentes em estradas
                    </blockquote>
                    <p>
                        Mesmo já tendo passado de 2020, achamos importante continuar atacando este tema, pois o trânsito continua sendo um perigo eminente na vida das pessoas. De acordo com o <a href="https://www.gov.br/transportes/pt-br/assuntos/transito/arquivos-senatran/docs/renaest" target="_blank">Registro Nacional de Acidentes e Estatísticas de Trânsito</a> (dados coletados pelo governo brasileiro), apenas em 2023 foram registrados mais de <strong>meio milhão</strong> de acidentes em território nacional.
                    </p>
                </section>
            </article>
        </Layout>
    )
}