import Image from "next/image"

const Banner = () => {
    return (
    <div className="flex justify-between items-center 
    bg-pink-800 border-y-4 border-black p-5 rounded-lg">
        <div className="px-10 space-y-5">
            <h1 className="text-6xl max-w-lg font-serif">
                <span className="underline decoration-slate-400 
                decoration-4 decoration-wavy">
                    Medium
                </span> {" "}
                Clone Service
            </h1>
            <h1>This is a reimagined clone of the Medium website.
                This site was created with Next.js</h1>
        </div>
        <Image 
            src="/vercel.svg" 
            alt="vercel" 
            width={200}
            height={200}
            className="hidden md:inline-flex" 
        />
    </div>
    )
}
export default Banner
