import Image from "next/image";
import InstallmentsArea from "./InstallmentsArea";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";

export default function Installments({ totalPrice, cashbackPercent }) {
  return (
    <div className="w-full">
        <InstallmentsArea
        numberOfInstallments={2}
        totalPrice={'15.300,00'}
        totalNoInstallment={"30.600,00"}
        isTop={true}
        topTitle={"Pix Parcelado"}
        />
         <InstallmentsArea
        numberOfInstallments={3}
        totalPrice={'10.196,66'}
        totalNoInstallment={"30.620,00"}
        />
         <InstallmentsArea
        numberOfInstallments={4}
        totalPrice={'7.725,00'}
        totalNoInstallment={"30.900,00"}
        isPromo={true}
        cashbackPercent={3}
        />
         <InstallmentsArea
        numberOfInstallments={5}
        totalPrice={'6.300,00'}
        totalNoInstallment={"31.500,00"}
        /> <InstallmentsArea
        numberOfInstallments={6}
        totalPrice={'5.283,33'}
        totalNoInstallment={"31.699,98"}
        />
        <InstallmentsArea
        numberOfInstallments={7}
        totalPrice={'4.542,85'}
        totalNoInstallment={"31.800,00"}
        />
      

    </div>
  );
}
