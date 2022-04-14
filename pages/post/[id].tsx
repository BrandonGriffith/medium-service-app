import Header from "../../components/Header"
import { useRouter } from "next/router"
import GetAllPosts from "../../components/api_calls/GetAllPosts"
import {Props, Post} from "../../components/Types"
import Image from "next/image"


const ShowPost = (props:Props) => {
    const router = useRouter()
    const id = parseInt(router.query.id as string)
    const post:Post = props.posts[id]
    return (
    <>
        <Header/>
        <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center">
                <Image src={post.img} alt={post.title}
                width={600}
                height={400}
                className="border-4 border-black 
                rounded"/>
            </div>
            <h1 className="text-3xl">{post.title}</h1>
            <p className="text-xl">{post.content}</p>
        </div>
    </>
    )
}
export default ShowPost
export const getServerSideProps = async () => {
    return {
        props: {
            posts: await GetAllPosts()
        }
    }
}
