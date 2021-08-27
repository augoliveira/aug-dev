import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { Service } from "../types";
import {motion} from 'framer-motion'
import {fadeInUp} from '../animations'
import {stagger} from '../animations'
import {routerAnimation} from '../animations'
import Head from 'next/head'

const About = ({endpoint}) => {
  // console.log(services);
  console.log(endpoint);

  return (
    <div className="flex flex-col flex-grow px-6 pt-1 ">
      <Head>
        <title>
          Desenvolvedor Web | Portfolio | Augusto araújo 
        </title>
      </Head>
      <h6 className="my-3 text-base font-medium">
      Sou Augusto Araújo, um designer multidisciplinar que se concentra em contar as histórias dos meus clientes visualmente, 
            por meio de experiências agradáveis ​​e significativas. Sou especialista em sites responsivos e interfaces de usuário funcionais.
      </h6>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="my-3 text-xl font-semibold tracking-wide">
        O que Faço
        </h4>

        <motion.div className="grid gap-6 my-3 md:grid-cols-2" variants={stagger} initial="initial" animate="animate">
          {/* children's initial and animate property should be same as the parent during a stagger effect  */}
          {services.map((service) => (
            <motion.div variants={fadeInUp}
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
              key={service.title}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

//!called every time  the page refreshed


//!called only during the build of the project
//? make sure the server(localhost:3000)[this will receive the request during build] is running on a terminal during the build
//? also need to change the localhost during the deployment | see the todo
// https://aude53.medium.com/set-environment-variables-with-next-js-and-vercel-e544c0460a48

 export const getStaticProps: GetStaticProps = async (
    context: GetStaticPropsContext
 ) => {
    // console.log(context);

    const res = await fetch('http://localhost:3000/api/services')
   const { services } = await res.json()
    console.log({ services })
    return { props: { services: services } }
 }

export default About;
