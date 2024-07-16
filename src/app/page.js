import {Container} from '@mui/material'
import LogoWoovi from './../components/LogoWoovi';
import AddCardIcon from '@mui/icons-material/AddCard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HomeIcon from '@mui/icons-material/Home';

export default function Home() {
  return (
    <main className='bg-gradient-to-br from-purple-500 to-blue-800 min-h-screen flex flex-col'>
        <Container className='jusfify-center p-0 rounded-lg drop-shadow-sm  bg-white flex flex-col my-auto w-screen min-h-screen max-w-lg '>
            <div className='bg-emerald-400 rounded-lg shadow-xl py-6 w-full px-6 ' >
                <h1
            className='text-3xl text-white font-bold m-0 py-4'
            >Frontend Engineer Challenge</h1>
            <p></p>
            </div>
            <div className='p-6  flex flex-col'>
            <h3 className='text-2xl font-semibold'>Sobre o desafio:</h3>
            </div>
            <div className='p-6  flex flex-col'>
            <h3 className='text-2xl font-semibold'>Páginas do desafio:</h3>
            <ol className=''>
            <a href='/payment-method/' ><li className='p-4 shadow-lg border-2 rounded-xl my-2 flex text-regular items-center font-semibold'><HomeIcon className='text-emerald-400'/> Página inicial</li></a>
            <a href='/payment-method/pix+credit-card/pix' ><li className='p-4 shadow-lg border-2 rounded-xl my-2 flex text-regular items-center font-semibold'><AttachMoneyIcon className='text-emerald-400'/> Primeira Parte do pagamento, pix.</li></a>
            <a href='/payment-method/pix+credit-card/credit-card' ><li className='p-4 shadow-lg border-2 rounded-xl my-2 flex text-regular items-center font-semibold'> <AddCardIcon className='text-emerald-400'/> Ultima Parte do pagamento, cartão.</li></a>
            </ol>
            </div>
        <LogoWoovi
                size='200'
                />
        </Container>
     </main>
    
  );
}
