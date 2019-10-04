export default {
  async getPosts () {
    const response = await fetch('http://localhost:8080/posts')
    const jsonBody = await response.json ()

    const { posts } = jsonBody.data

    if(!response.ok) throw new Error('Ya valio el back')
    return posts
  }
}
