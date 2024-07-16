import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'; 

export default function ReturnToHome(){
    return(
        <div className='mt-4 px-1 py-1 bg-gray-200 w-64 rounded-lg shadow-lg hover:animate-bounce ml-2'>
        <a href="../"><p><NavigateBeforeIcon/> Voltar para a página inicial</p></a>
        </div>
    )
}