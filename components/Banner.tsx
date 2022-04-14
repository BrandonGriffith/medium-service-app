const Banner = () => {
    return (
    <div className="flex justify-between items-center 
    bg-pink-800 border-y-4 border-black py-5 rounded-lg">
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
        <img 
            src="vercel.svg" 
            alt="" 
            className="hidden md:inline-flex w-[40%] lg:w-[30%] pr-5" 
        />
    </div>
    )
}
export default Banner
