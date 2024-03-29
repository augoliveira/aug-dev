import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { useTheme } from "next-themes";
import Image from "next/image";
import Perfil from '../public/images/perfil.jpg'
import Link from "next/link";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <Image
        src={Perfil}
        alt="avatar"
        className=" mx-auto border rounded-full "
        quality="100"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green ">Augusto</span> Araujo
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Desenvolvedor Web
      </p>
      {/* Sobre mim */}
      <Link
        href="/assets/augusto.pdf"
        download="augusto.pdf"
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
      >
        <GiTie className="w-6 h-6" />
        <span>Baixar curriculo</span>
      </Link>

      {/* Socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full ">
        <Link href="https://www.youtube.com/channel/UCWipoUgjbddah2ZC_Fsqn8A" aria-label= "Youtube">
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </Link>
        <Link href="https://www.linkedin.com/in/augusto-araujo-7a309763/" aria-label= "Linkedin">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </Link>
        <Link href="https://www.instagram.com/aug_oliv" aria-label= "Instagram">
          <AiFillInstagram className="w-8 h-8 cursor-pointer" />{" "}
        </Link>
      </div>

      {/* Contacts */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>Brasilia - DF </span>
        </div>
        <p className="my-2 "> aug_oliv@hotmail.com </p>
        <p className="my-2"> (61) 98669-2775 / 984408746 </p>
      </div>

      {/* Email Button */}

      <button
        className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none"
        onClick={() => window.open("mailto:aug_oliv@hotmail.com")}
      >
        Enviar um E-mail
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105 "
      >
        {/* //TODO remove bg black */}
        Mudar Tema
      </button>
    </>
  );
};

export default Sidebar;
