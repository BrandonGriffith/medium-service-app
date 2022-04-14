import Image from "next/image"
import Link from "next/link"

const Header = () => {
    return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
        <div className="flex items-center space-x-5">
            <Link href="/" passHref={true}>
                <div>
                    <Image src="/logo512.png" alt="react" 
                    width={100}
                    height={100}
                    className="w-[10%] object-contain cursor-pointer" />
                </div>
            </Link>
            <div className="hidden md:inline-flex items-center space-x-5">
                <h3 className="bg-orange-700 px-4 py-1 rounded-full font-bold cursor-pointer">About</h3>
                <h3 className="bg-blue-700 px-4 py-1 rounded-full font-bold cursor-pointer">Contact</h3>
                <h3 className="bg-green-700 px-4 py-1 rounded-full font-bold cursor-pointer">Follow</h3>
            </div>
        </div>

        <div className="flex items-center space-x-11 whitespace-nowrap">
            <h3 className="cursor-pointer font-bold">
                Sign In
            </h3>
            <h3 className="cursor-pointer font-bold">
                Get Started
            </h3>
        </div>
    </header>
    )
}
export default Header
