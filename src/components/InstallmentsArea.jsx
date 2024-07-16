import Image from "next/image";

export default function InstallmentArea({
  totalPrice,
  isPromo,
  totalNoInstallment,
  cashbackPercent,
  isTop,
  isBottom,
  topTitle,
  numberOfInstallments,
}) {
  return (
    <div className="relative" name="installments">
      <span className="bg-gray-200 px-4 font-bold rounded-xl absolute -top-3 left-4 text-base">
        {topTitle}
      </span>
      <input
        type="radio"
        className="hidden peer"
        id={numberOfInstallments}
        name="installmentOption"
      ></input>
      <label
        htmlFor={numberOfInstallments}
        className=" pt-1 rounded-lg text-red flex flex-col  peer-checked:border-green-400 py-4 pt-3 border-2 border-gray-200 mb-0 "
      >
        <div id="price-icon" className="flex flex-row justify-between px-3 ">
          <div id="price-area flex flex-col justify-between ">
            <form className="text-left mt-2 ml-1 ">
              <h1 className="text-black normal-case  text-lg">
                <b>{numberOfInstallments}x </b>R$ {totalPrice}
              </h1>
              {/*
                <p className="normal-case mb-1 text-green-400 ">
                  Ganhe <b>{cashbackPercent}%</b> de Cashback
                </p> */}
              <p className="normal-case mb-1 text-sm justify-start text-gray-400 ">
                Total: R$ {totalNoInstallment}
              </p>
            </form>
          </div>
        </div>
        {isPromo == true ? (
          <div className="relative ">
            <Image
              width="330"
              height="330"
              src="../images/rectangle-badge.svg"
              alt="Desconto dado."
              className=" ml-3 "
            />
            <p className="text-white absolute top-2 left-5 normal-case text-xs ">
              <b>-{cashbackPercent}% de juros:</b> Melhor opção de parcelamento
            </p>
          </div>
        ) : null}
      </label>
      {isPromo == true ? (
        <div className="p-3 rounded-full absolute top-10 right-4 my-auto w-6 h-6 peer-checked:bg-green-400 peer-checked:border-green-400 border-2 "></div>
      ) : (
        <div className="p-3 rounded-full absolute top-1/3 right-4 my-auto w-6 h-6 peer-checked:bg-green-400 peer-checked:border-green-400 border-2 "></div>
      )}
      {isPromo == true ? (
        <Image
          width="13"
          height="13"
          src="images/checked.svg"
          alt="check"
          className="absolute right-6 top-12 fill-gray-400 "
        ></Image>
      ) : (
        <Image
          width="13"
          height="13"
          src="images/checked.svg"
          alt="check"
          className="absolute right-6 top-10 fill-gray-400 "
        ></Image>
      )}
    </div>
  );
}
