import Button from "@mui/material/Button";
import { Radio, RadioGroup } from "@mui/material";
import Image from "next/image";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import InstallmentsArea from "./InstallmentsArea";

export default function InstallmentsGroup({ totalPrice, cashbackPercent }) {
  return (
    <main className="flex flex-col w-full justify-center ">
      
      <FormControl className=" w-full  py-4 " >
        <FormLabel className=" z-10 absolute font-bold bg-gray-200 rounded-full px-5 normal-case text-black -top-3 left-4 " >Pix Parcelado</FormLabel>
        
          <FormControlLabel
            value="1"
            labelPlacement="start"
            control={<InstallmentsArea totalPrice="10.000,90" cashbackPercent={"5"} />}
          />
         
      </FormControl>
    </main>
  );
}
