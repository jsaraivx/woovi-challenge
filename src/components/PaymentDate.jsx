import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function PaymentDate({limitPaymentDate}){
    return(
        <section className="flex flex-col max-w-96 mt-4 self-center items-center">
         <h6>Prazo de pagamento:</h6>
         <b>15/12/2021 - 08:17</b> {/*Or next day compared on the actual date*/}
         <Accordion
         className='flex flex-col-reverse border-b-2 mt-2 w-full shadow-none'
          defaultExpanded
          >
            <AccordionSummary
            expandIcon={<ExpandMoreIcon/>}
            aria-controls="panel2-content"
            id="panel2-header"
            >
                <Typography className='font-bold'>Como funciona?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <div classname='bg-gray-400 w-96 flex flex-col' name='payment-details-accordion'>
                    <section className='flex items-center justify-between my-4'>
                    <aside className='bg-white p-2 rounded-full border-2 border-green-300 flex justify-center items-center h-1 w-1'></aside>
                    <div className=' ml-2 w-96 h-6 flex justify-between'><p className='font-semibold' >1ª entrada no Pix</p> <b>R$ 15.300,00</b> </div>
                    </section>
                    <section className='flex items-center justify-between my-4'>
                    <aside className='bg-white p-2 rounded-full border-2 border-gray-300 flex justify-center items-center h-1 w-1'></aside>
                    <div className=' ml-2 w-96 h-6 flex justify-between'><p className='font-semibold' >2ª no cartão</p> <b>R$ 15.300,00</b> </div>
                    </section>
                    <div className='border-b-2 border-gray-200'></div>
                    <div className=' ml-2 w-full h-6 flex justify-between my-5'><p className='font-normalcase' >CET: 0,5%</p> <p>Total: R$ 30.600,00</p> </div>
                    <div className='border-b-2 border-gray-200'></div>
                </div>
            </AccordionDetails>

         </Accordion>
        </section>
        )
}