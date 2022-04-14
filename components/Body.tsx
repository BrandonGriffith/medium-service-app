import Image from "next/image"
import Link from "next/link"
import { Props } from "./Types"

const Body = (props: Props) => {
    return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
        {props.posts.map(post => (
            <Link key={post.id-1} passHref={true} 
            href={`/post/${post.id-1}`}>
                <div className="border-4 rounded-lg border-black hover:scale-105 cursor-pointer 
                transition-transform duration-200 ease-in-out overflow-hidden bg-black">
                    <div className="flex justify-center">
                        <Image src={post.img} alt={post.title} 
                        width={400}
                        height={200}
                        className="object-cover"/>
                    </div>
                    <div className="rounded-lg flex justify-between p-5 bg-white text-black">
                        <div>
                            <p>{post.title}</p>
                            <p>{post.content}</p>
                        </div>
                        <Image src="/vercel.svg" alt=""
                        width={100}
                        height={50}/>
                    </div>
                </div>
            </Link>
        ))}
    </div>
    )
}
export default Body
