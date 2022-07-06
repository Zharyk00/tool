const postsBlock = document.getElementById('posts')
const search = document.getElementById("search")
let arr = []
search.addEventListener('input', e => {
    const value = e.target.value.toLowerCase()
    arr.filter(({ title, element }) => {
        const checking = title.toLowerCase().includes(value)
        element.classList.toggle("hide", !checking)
    })
})

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
        arr = data.map(({ title }) => {
            let postContainer = document.createElement('div')
            postContainer.id = "postContainer"

            let post__title = document.createElement("div")
            post__title.id = "posts__title"
            post__title.innerHTML = title

            postsBlock.appendChild(postContainer)
            postContainer.appendChild(post__title)
            return { title: title, element: postContainer }
        })
    })