import Button from "@mui/material/Button";
import { Radio } from "@mui/material";
import Image from "next/image";

export default function InstallmentArea({ totalPrice, cashbackPercent }) {
  return (
    <div className="w-full">
      <div className="relative m-0  w-full" name="sectionInstallment" >
        <input
          type="radio"
          className=" hidden peer w-full "
          name="installment"
          id="1xInstallment"
        ></input>
        <label
          htmlFor="1xInstallment"
          className=" peer-checked:bg-red-400 flex flex-col bg-slate-400 border-2 border-fuchsia-400 p-2 "
        >
            
        </label>
      </div>
    </div>
  );
}
