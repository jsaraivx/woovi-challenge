import Image from "next/image";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";

export default function Installments({ totalPrice, cashbackPercent }) {
  return (
    <div className="w-full">
      <div className="relative" name="installments">
        <span className="bg-gray-200 px-4 font-bold rounded-xl absolute -top-3 left-4 ">
          Pix Parcelado
        </span>
        <input
          type="radio"
          className="hidden peer"
          id="1x"
          name="installmentOption"
        ></input>
        <label
          htmlFor="1x"
          className=" pt-1 rounded-lg text-red flex flex-col peer-checked:border-green-400 border-2 border-gray-200 "
        >
          <div id="price-icon" className="flex flex-row justify-between px-3 ">
            <div id="price-area flex flex-col justify-between ">
              <form className="text-left mt-2 ml-1 ">
                <h1 className="text-black normal-case  text-lg">
                  <b>1x </b>R$ {totalPrice}
                </h1>
                <p className="normal-case mb-1 text-green-400 ">
                  Ganhe <b>{cashbackPercent}%</b> de Cashback
                </p>
              </form>
            </div>
          </div>
          <div className="relative mb-4">
            <Image
              width="330"
              height="330"
              src="../images/rectangle-badge.svg"
              alt="Desconto dado."
              className=" ml-3 "
            />
            <p className="text-white absolute top-1 left-5 normal-case text-sm ">
              🤑 <b>R$ 300,00</b> de volta no seu Pix na hora
            </p>
          </div>
        </label>
        <div className="p-3 rounded-full absolute top-1/3 right-4 my-auto w-6 h-6 peer-checked:bg-green-400 peer-checked:border-green-400 border-2 "></div>
        <Image
          width="13"
          height="13"
          src="images/checked.svg"
          alt="check"
          className="absolute right-6 top-12"
        ></Image>
      </div>
      <div className="relative" name="installments">
        <input
          type="radio"
          className="hidden peer"
          id="2x"
          name="installmentOption"
        ></input>
        <label
          htmlFor="2x"
          className=" pt-1 rounded-lg text-red flex flex-col peer-checked:border-green-400 border-2 border-gray-200 "
        >
          <div id="price-icon" className="flex flex-row justify-between px-3 ">
            <div id="price-area flex flex-col justify-between ">
              <form className="text-left mt-2 ml-1 ">
                <h1 className="text-black normal-case  text-lg">
                  <b>1x </b>R$ {totalPrice}
                </h1>
                <p className="normal-case mb-1 text-green-400 ">
                  Ganhe <b>{cashbackPercent}%</b> de Cashback
                </p>
              </form>
            </div>
          </div>
          <div className="relative mb-4">
            <Image
              width="330"
              height="330"
              src="../images/rectangle-badge.svg"
              alt="Desconto dado."
              className=" ml-3 "
            />
            <p className="text-white absolute top-1 left-5 normal-case text-sm ">
              🤑 <b>R$ 300,00</b> de volta no seu Pix na hora
            </p>
          </div>
        </label>
        <div className="p-3 rounded-full absolute top-1/3 right-4 my-auto w-6 h-6 peer-checked:bg-green-400 peer-checked:border-green-400 border-2 "></div>
        <Image
          width="13"
          height="13"
          src="images/checked.svg"
          alt="check"
          className="absolute right-6 top-12"
        ></Image>
      </div>

    </div>
  );
}
