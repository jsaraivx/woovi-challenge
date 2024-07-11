export default function TitlePage({nameUser, messageContent}){
    return(
        <h1 className=" font-bold text-xl flex justify-center p-4 mb-4 ">
            {nameUser}, {messageContent}
            </h1>
    );
}