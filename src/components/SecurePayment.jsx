import Image from "next/image";
import ShieldVer from '@mui/icons-material/VerifiedUserOutlined';


export default function SecurePayment(){

    return(
        <div className="flex flex-row justify-center h-10 items-center my-5 " >
        <ShieldVer
            fontSize="small"
            className="text-gray-400"
        />
        <p 
        className="text-gray-400 text-sm"
        >Pagamento 100% seguro via: </p>
        <Image
        width='65'
        height='65'
        src='/images/logo-woovi-gray.svg'
        alt='woovi logo'
        className="pl-1 pb-1"
        />
        </div>
    )
    
}
