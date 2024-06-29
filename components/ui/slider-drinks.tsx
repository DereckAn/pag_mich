import {cerdo} from "@/assets";
import Image from "next/image";

export const SliderDrinks = () => {
    return (
        <section>
            <ul>
                <li>
                    <Image src={cerdo} alt={"cerdo"}/>
                </li>
            </ul>
        </section>
    )
}