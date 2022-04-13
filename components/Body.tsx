import Link from "next/link"
import { Props } from "./Types"

const Body = (props: Props) => {
    return (
    <div>
        {props.posts.map(post => (
            <Link key={post.id} 
            href={`/post/${post.id}`}>
                <div>
                    <img src={post.img}/>
                    <div>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                </div>
            </Link>
        ))}
    </div>
    )
}
export default Body
