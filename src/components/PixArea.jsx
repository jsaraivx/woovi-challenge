import Button from "@mui/material/Button";
import { Radio } from "@mui/material";
import Image from 'next/image';



export default function PixArea({ totalPrice, cashbackPercent }) {

  return (
    

<main className="">
<Button
     className=" pl-1 pr-1 flex flex-col relative border-2 border-gray-200 rounded-lg w-full hover:border-green-400 hover:border-2 pb-8 "
     variant="outlined"
     color="success"
    
     >
      <span className="bg-gray-200 normal-case text-black px-4 font-bold rounded-xl absolute -top-3 left-4 text-base z-10">
          Pix
        </span>
      
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

        </div>
        <div className="absolute left-0 top-16">
                <Image
                width="330"
                height="330"
                src="../images/rectangle-badge.svg"
                alt="Desconto dado."
                className=" ml-3 "
                />
                <p className="text-white absolute top-2 left-5 normal-case text-xs ">
                🤑 <b>R$ 300,00</b> de volta no seu Pix na hora
                </p>
            </div>
    </Button>




</main>


  );
}
