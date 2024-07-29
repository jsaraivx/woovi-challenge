import { Container } from "@mui/material";
import LogoWoovi from "./../components/LogoWoovi";
import AddCardIcon from "@mui/icons-material/AddCard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import HomeIcon from "@mui/icons-material/Home";
import { AvatarGroup, Avatar, Badge } from "@mui/material";
import Image from "next/image";
import LogoWooviGray from "@/components/LogoWooviGray";


export default function Home() {
  return (
    <main className="select-none bg-gradient-to-br from-purple-500 to-blue-800 min-h-screen flex flex-col">
      <Container className="jusfify-center p-0 rounded-lg drop-shadow-sm  bg-white flex flex-col my-auto w-screen min-h-screen max-w-lg ">
        <div className="bg-emerald-400 rounded-t-lg shadow-xl py-6 w-full px-6 ">
          <h1 className="text-3xl text-white font-bold m-0 py-4">
            Frontend Engineer Challenge
          </h1>
          <LogoWooviGray size="100" />
          <p className="text-lg text-white pt-4">
            Feito por{" "}
            <b className="bg-gradient-to-br p-1 rounded-lg from-red-600 to-violet-600">
              João Saraiva
            </b>
          </p>
          <AvatarGroup className="ml-2 mt-4 flex justify-end" max="3">
            <a href="https://Github.com/jsaraivx">
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={
                  <Avatar
                    className="w-6 bg-blue-600 h-6 "
                    alt="Github de João Saraiva"
                    src="https://github.com/github.png"
                  />
                }
              >
                <Avatar
                  alt="Github de João Saraiva"
                  src="https://github.com/jsaraivx.png"
                />
              </Badge>
            </a>
            <a href="https://linkedin.com/in/jsaraivx">
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={
                  <Avatar
                    className="w-6 bg-blue-600 h-6 "
                    alt="Linkedin de João Saraiva"
                    src="https://github.com/linkedin.png"
                  />
                }
              >
                <Avatar
                  alt="Linkedin de João Saraiva"
                  src="https://media.licdn.com/dms/image/D4E03AQFb7baCN95y6w/profile-displayphoto-shrink_200_200/0/1693524618559?e=1726704000&v=beta&t=1fgUVx15SnEzU2iMPKewx7fB680ZDuwGCbnTeBKsgAk"
                />
              </Badge>
            </a>
          </AvatarGroup>
        </div>
        <div className="p-6  flex flex-col">
          <h3 className="text-2xl font-semibold">Sobre o desafio:</h3>
          <p>Desafio proposto pela empresa Woovi, o objetivo era replicar a interface que foi disponibilizado por meio de um </p>
          <a href='https://www.figma.com/file/hv1LgD7oNrtlmfWgKBG6PF/Woovi-Desafio-Front?node-id=1%3A100' ><p className='px-1 py- rounded-lg bg- flex justify-center mb-2 w-5/12 bg-gradient-to-br from-purple-500 to-blue-800 font-bold text-white '>Projeto Figma.</p></a>
          <Image className='rounded-lg' width={500} height={500} src={'/images/ref.png'}  />
        </div>
        <div className="p-6  flex flex-col">
          <h3 className="text-2xl font-semibold">Técnologias / Métodos Usados:</h3>
          <div className='flex w-full'>
          <ul className='w-6/12' >
            <li className='px-2 py-1 bg-black text-white my-2 justify-center rounded-lg items-center w-11/12' >React</li>
            <li className='px-2 py-1 bg-black text-white my-2 justify-center rounded-lg items-center w-11/12' >NextJS</li>
            <li className='px-2 py-1 bg-black text-white my-2 justify-center rounded-lg items-center w-11/12' >Tailwind</li>
            <li className='px-2 py-1 bg-black text-white my-2 justify-center rounded-lg items-center w-11/12' >JavaScript</li>
          </ul>
          <ul className='w-6/12' >
            <li className='px-2 py-1 bg-black text-white my-2 justify-center rounded-lg items-center w-11/12' >MUI</li>
            <li className='px-2 py-1 bg-black text-white my-2 justify-center rounded-lg items-center w-11/12' >JSX</li>
            <li className='px-2 py-1 bg-black text-white my-2 justify-center rounded-lg items-center w-11/12' >Figma</li>
           </ul>
           </div>
        </div>
        <div className="p-6  flex flex-col">
          <h3 className="text-2xl font-semibold">Páginas do desafio:</h3>
          <ol className="">
            <a href="/payment-method/">
              <li className="p-4 hover:animate-pulse shadow-lg border-2 rounded-xl my-2 flex text-regular items-center font-semibold">
                <HomeIcon className="text-emerald-400" /> Página inicial
              </li>
            </a>
            <a href="/payment-method/pix+credit-card/pix">
              <li className="p-4 hover:animate-pulse shadow-lg border-2 rounded-xl my-2 flex text-regular items-center font-semibold">
                <AttachMoneyIcon className="text-emerald-400" /> Primeira Parte
                do pagamento, pix.
              </li>
            </a>
            <a href="/payment-method/pix+credit-card/credit-card">
              <li className="p-4 hover:animate-pulse shadow-lg border-2 rounded-xl my-2 flex text-regular items-center font-semibold">
                {" "}
                <AddCardIcon className="text-emerald-400" /> Ultima Parte do
                pagamento, cartão.
              </li>
            </a>
          </ol>
        </div>
        <LogoWoovi size="100" />
        <div className='pb-8' ></div>
      </Container>
    </main>
  );
}
