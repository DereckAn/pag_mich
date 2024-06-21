import Link from "next/link";

type Props = {
 
}

export const ErrorCard = ({}: Props) => {
    return ( 
        <div className=" w-[400px] h-[300px] shadow-md flex flex-col p-5">
            <label htmlFor="" className="text-3xl text-primary text-center">Opps! Somethign went wrong. </label>
            <Link href={"/"} className="text-center">Go Back to Main </Link>
            
        </div>
    );
}