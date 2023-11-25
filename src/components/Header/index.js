import Image from "next/image";
import Link from "next/link";

export default function Header () {
    return <div className={"flex justify-between p-3"}>
            <Link href={"/"}>
                <button>
                    <Image
                        src={"/logo_long.svg"}
                        width={100}
                        height={50}
                    />
                </button>
            </Link>
            <div>
                <div >
                    <Link href={"/about"}><button >About us</button></Link>
                    <button >Login</button>
                </div>
            </div>
    </div>
}