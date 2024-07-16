export default function TitlePage({nameUser, messageContent}){
    return(
        <div
         className='w-11/12 flex justify-center items-center self-center'
        >
        <h1 className=" font-bold text-2xl flex justify-center self-center text-center p-4 mb-4 max-w-lg">
            {nameUser}, {messageContent}
            </h1>
         </div>
    );
}