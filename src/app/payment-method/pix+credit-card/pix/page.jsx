import LogoWoovi from "../../../../components/LogoWoovi";
import TitlePage from "../../../../components/TitlePage";
import SecurePayment from "../../../../components/SecurePayment";
import PaymentDate from "../../../../components/PaymentDate";
import IdentifierCode from "../../../../components/IdentifierCode";
import ReturnToHome from "../../../../components/ReturnToHome";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box/Box";
import Image from "next/image";
import Button from "@mui/material/Button";
import FileCopyIcon from "@mui/icons-material/FileCopy";
export default function Home() {
  return (
    <main className="bg-gradient-to-br from-purple-500 to-blue-800 min-h-screen flex flex-col">
      <Container className=" jusfify-center rounded-lg drop-shadow-sm bg-white flex flex-col my-auto w-screen min-h-screen max-w-lg ">
        <LogoWoovi // Logo area with Size in px
          size="100"
        />
        <TitlePage // Main Title of page. with Message and User name.
          messageContent={"pague a entrada de R$ 15.300,00 pelo Pix"}
          nameUser={"João"}
          className="flex self-center items-center text-center"
        />
        <section
          name="qrcode-area"
          id="qr-area"
          className="w-10/12 h-10/12 select-none flex items-center justify-center self-center p-2 border-green-300 border-2 rounded-lg "
        >
          <Image
            height={"550"}
            width={"550"}
            src="../../../../images/example-qr.svg"
            alt="QR Code da transação"
          />
        </section>
        <Box className="m-4"></Box>
        <section
          name="copy-to-clipboard"
          className="flex self-center items-center"
        >
          <Button
            className="normal-case rounded-xl flex justify-between bg-blue-950 text-lg font-medium py-2 px-4"
            variant="contained"
          >
            Clique para copiar QR CODE{" "}
            <FileCopyIcon className="text-base ml-2 align-center" />{" "}
          </Button>
        </section>
        <PaymentDate />
        <Box className="m-4"></Box>
        <IdentifierCode />
        <Box className="m-4"></Box>
        <SecurePayment />
        <ReturnToHome />
        <Box className="m-4"></Box>
      </Container>
    </main>
  );
}
