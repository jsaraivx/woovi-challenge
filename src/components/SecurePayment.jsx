import Image from "next/image";
import ShieldVer from '@mui/icons-material/VerifiedUserOutlined';


export default function SecurePayment(){

    return(
        <div className="flex flex-row justify-center h-10  " >
        <ShieldVer
            fontSize="small"
        />
        <p>Pagamento 100% seguro via:</p>
        <Image
        width='50'
        height='50'
        src='/image/logo-woovi-gray.svg'
        alt='woovi logo'
        />
        </div>
    )
    
}
