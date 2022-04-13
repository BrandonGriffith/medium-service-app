import { Props } from "./Types"

const Body = (props: Props) => {
    return (
    <div>
        <h1 className='text-red-500'>{props.posts[0].content}</h1>
    </div>
    )
}
export default Body
