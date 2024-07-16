
import LogoWoovi from "@/components/LogoWoovi";
import ReturnToHome from '@/components/ReturnToHome';
import TitlePage from "../../components/TitlePage";
import Container from '@mui/material/Container';
import PixArea from './../../components/PixArea';
import Box from './../../../node_modules/@mui/material/Box/Box';
import Installments from './../../components/Installments'
import SecurePayment from './../../components/SecurePayment';

export default function Home() {
  return (
    <main className='bg-gradient-to-br from-purple-500 select-none to-blue-800 min-h-screen' >
    <Container className=" my-auto w-screen max-w-lg jusfify-center rounded-lg drop-shadow-sm bg-white flex flex-col " >    
        <LogoWoovi // Logo area with Size in px
         size="100" 
         />
        <TitlePage // Main Title of page. with Message and User name.
         messageContent={"como você quer pagar?"}
         nameUser={"João"}
        />
        <PixArea
        totalPrice='30.500,00'
        cashbackPercent='3'
        />
            <Box className="m-4">
            </Box>
        <Installments
         totalPrice='10.000,00'
         cashbackPercent='4'
        />
        <SecurePayment/>
        <ReturnToHome/>
        <Box className="m-4">
            </Box> 
    </Container>  

</main>
  );
}
