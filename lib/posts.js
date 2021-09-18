import fetch from "node-fetch"

export const getAllPostsData = async() => {
  try{
    const res = await fetch(
      new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-post/`)
    )
    const posts = await res.json()
    const filteredPosts = posts.sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at)
    )
    return filteredPosts
  }catch(err){
    alert(err)
  }
}

export const getAllPostIds = async () => {
  try{
    const res = await fetch(
      new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-post/`)
    )
    const posts = await res.json()
    return posts.map((post)=>{
      return {
        params: {
          id: String(post.id)
        }
      }
    })
  }catch(err){
     return alert(err)
  }
}

export const getPostData = async (id) => {
  try{
    const res = await fetch(
      new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-post/${id}/`)
    )
    const post = await res.json()
    return{
      post
    }
  }catch(err){
    
  }
}