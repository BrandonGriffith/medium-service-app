const GetAllPosts = async () => {
    console.log("<GetAllPosts> -- this is an api call running on the server.")
    const server = process.env.SERVER
    const result = await fetch(
        `http://${server}/api`
        ).then( res => res.json() )
    return result
}
export default GetAllPosts
