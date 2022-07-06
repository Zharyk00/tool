let arr = []
const postsBlock = document.getElementById('posts')
const search = document.getElementById("search")

search.addEventListener('input', e => {
    const value = e.target.value.toLowerCase()
    arr.filter(({ body, element }) => {
        const checking = body.toLowerCase().includes(value)
        element.classList.toggle("hide", !checking)
    })
})

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
        arr = data.map(({ body }) => {
            let postContainer = document.createElement('div')
            postContainer.id = "postContainer"

            let post__body = document.createElement("div")
            post__body.id = "posts__body"
            post__body.innerHTML = body

            postsBlock.appendChild(postContainer)
            postContainer.appendChild(post__body)
            return { body: body, element: postContainer }
        })
    })