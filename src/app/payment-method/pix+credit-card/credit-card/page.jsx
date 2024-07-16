import LogoWoovi from "../../../../components/LogoWoovi";
import TitlePage from "../../../../components/TitlePage";
import SecurePayment from "../../../../components/SecurePayment";
import PaymentDate from "../../../../components/PaymentDate";
import IdentifierCode from "../../../../components/IdentifierCode";
import { TextField, InputLabel, Box, Container, Select, Button, MenuItem } from "@mui/material";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-purple-500 to-blue-800 min-h-screen flex flex-col">
      <Container className=" jusfify-center rounded-lg drop-shadow-sm bg-white flex flex-col my-auto w-screen min-h-screen max-w-lg ">
        <LogoWoovi // Logo area with Size in px
          size="100"
        />

        <TitlePage // Main Title of page. with Message and User name.
          messageContent={"pague o restante em 1x no cartão"}
          nameUser={"João"}
          className="flex self-center items-center text-center"
        />

        <form className="w-full flex flex-col justify-center  ">
          <TextField
            id="user_name"
            required
            label="Nome completo"
            variant="outlined"
            className="w-11/12 self-center my-4 rounded-xl"
          />
          <TextField
            id="user_cpf"
            required
            label="CPF"
            variant="outlined"
            className="w-11/12 self-center my-4 rounded-xl"
          />
          <TextField
            id="card_number"
            required
            label="Número do cartão"
            variant="outlined"
            className="w-11/12 self-center my-4 rounded-xl"
          />
          <section className="flex justify-between gap-8 px-4">
            <TextField
              id="card_validation"
              required
              label="Vencimento"
              variant="outlined"
              className=" self-center my-4 rounded-xl"
            />
            <TextField
              id="card_cvv"
              label="CVV"
              required
              variant="outlined"
              className=" self-center my-4 rounded-xl"
            />
          </section>

          <div className="w-11/12 flex self-center flex-col">
            <InputLabel id="number-of-installments">Parcelas</InputLabel>
            <Select
              labelId={"number-of-installments"}
              id="number-of-installments-select"
              value={1}
              className="w-full mb-4"
            >
              <MenuItem value={1}>1x de R$ 15.300,00</MenuItem>
            </Select>
          </div>

          <section
            name="pay"
            className="flex self-center w-full justify-center items-center"
          >
            <Button
              className="normal-case flex rounded-xl bg-blue-950 text-lg w-11/12 font-medium py-2 px-4"
              variant="contained"
            >
              Pagar
            </Button>
          </section>
          <PaymentDate />
        </form>

        <Box className="m-4"></Box>
        <IdentifierCode />
        <Box className="m-4"></Box>

        <SecurePayment />

        <Box className="m-4"></Box>
      </Container>
    </main>
  );
}
