import Button from "@mui/material/Button";
import { Radio } from "@mui/material";
import Image from 'next/image';



export default function PixArea({ totalPrice, cashbackPercent }) {

  return (
    

<main className="">
<Button
     className=" pl-1 pr-1 flex flex-col relative border-2 border-gray-200 rounded-lg w-full hover:border-green-400 hover:border-2 "
     variant="outlined"
     color="success"
    
     >
      <label className="absolute font-bold bg-gray-200 rounded-full px-5 normal-case text-black -top-3 left-4">
        Pix
      </label>
      
        <div id="price-icon" className="flex flex-row w-11/12 justify-between ">
          <div id="price-area flex flex-col justify-between ">
            <form className="text-left mt-2 ">
              <h1 className="text-black normal-case  text-lg">
                <b>1x </b>R$ {totalPrice}
              </h1>
              <p className="normal-case mb-1 text-green-400 ">
                Ganhe <b>{cashbackPercent}</b> de Cashback
              </p>
            </form>
          </div>

          {/*<Radio className="text-right" />  
            This is a Radio, but i don´t like of the idea for have a Radio button
            in the Pix Method.
          */}

        </div>
        <div className='relative mb-4' >
            <Image
            width='330'
            height='330'
            src="../images/rectangle-badge.svg"
            alt='Desconto dado.'

            />
            <p className='text-white absolute top-1 left-3 normal-case text-sm ' >🤑 <b>R$ 300,00</b> de volta no seu Pix na hora</p>
        </div>

    </Button>




</main>


  );
}
