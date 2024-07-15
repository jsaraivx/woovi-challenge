import LogoWoovi from "../../../../components/LogoWoovi";
import TitlePage from "../../../../components/TitlePage"
import SecurePayment from "../../../../components/SecurePayment"
import Container from '@mui/material/Container';
import Box from '@mui/material/Box/Box'

export default function Home(){
    return (
        <main className='bg-gradient-to-br from-purple-500 to-blue-800 min-h-screen flex flex-col'>
            <Container className=" jusfify-center rounded-lg drop-shadow-sm bg-white flex flex-col my-auto w-screen max-w-lg " >    
        <LogoWoovi // Logo area with Size in px
         size="100" 
         />

        <TitlePage // Main Title of page. with Message and User name.
         messageContent={"pague a entrada de R$ 15.300,00 pelo Pix"}
         nameUser={"João"}
         className=''
        />
            <Box className="m-4">
            </Box>

        <SecurePayment/>
    
        <Box className="m-4">
            </Box>

    </Container>  

         </main>
    )
}