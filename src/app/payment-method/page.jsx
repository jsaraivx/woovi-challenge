
import LogoWoovi from "@/components/LogoWoovi";
import TitlePage from "../../components/TitlePage";
import Container from '@mui/material/Container';
import PixArea from './../../components/PixArea';
import InstallmentsGroup from './../../components/InstallmentsGroup'
import Box from './../../../node_modules/@mui/material/Box/Box';

export default function Home() {
  return (
    <main className='bg-slate-200' >
    <Container className=" jusfify-center rounded-lg drop-shadow-sm bg-slate-50 flex flex-col my-auto h-screen w-screen max-w-lg max-w-11/12 " >    
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

        <InstallmentsGroup
        totalPrice='10.000,00'
        cashbackPercent='4'
        />



    </Container>  
    </main>
  );
}
