const GetAllPosts = async () => {
    console.log("<GetAllPosts> -- this is an api call running on the server.")
    const result = await fetch(
        `http://localhost:3000/api`
        ).then( res => res.json() )
    return {
        props: {
            posts: result
        }
    }
}
export default GetAllPosts
