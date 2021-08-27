import Bar from "../components/Bar";
import { languages, tools } from "../data";
import {motion} from 'framer-motion'
import {fadeInUp} from '../animations'
import Head from 'next/head'
const Resume = () => {

  
  return (
    <div className="px-6 py-2">
      <Head>
        <title>
          Desenvolvedor Web | Resume | Augusto araújo 
        </title>
      </Head>
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Qualificação</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
            SERVIÇOS DE DESIGN
            </h5>
            <p className="font-semibold">Direção de arte / Web e celular / Identidade de marca / UX e UI / Front End e Beck End / Animação / 3D</p>
            <p className="my-3">
            Sou Augusto Araújo, um designer multidisciplinar que se concentra em contar as histórias dos meus clientes visualmente, 
            por meio de experiências agradáveis ​​e significativas. Sou especialista em sites responsivos e interfaces de usuário funcionais.
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experiencia</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Desenvolvedor de software.</h5>
            <p className="font-semibold">Consultor de esperiencia web</p>
            <p className="my-3">Desevolvo solução para alavancar seu negócio na web</p>
          </div>
        </motion.div>
      </div>

      {/*Linguagem e estrutura */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Linguagem e estrutura</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Ferramentas e softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
