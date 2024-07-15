export default function TitlePage({nameUser, messageContent}){
    return(
        <div
         className='w-'
        >
        <h1 className=" font-bold text-xl flex justify-center p-4 mb-4 max-w-lg">
            {nameUser}, {messageContent}
            </h1>
         </div>
    );
}