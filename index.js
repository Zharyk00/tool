let arr = []
const postsBlock = document.getElementById('posts')
const search = document.getElementById("search")
const details = document.getElementById("details")
let url = "https://jsonplaceholder.typicode.com/posts"

search.addEventListener('input', e => {
    const value = e.target.value.toLowerCase()
    arr.filter(({ title, body, element }) => {
        const checking = title.toLowerCase().includes(value) || body.toLowerCase().includes(value)
        element.classList.toggle("hide", !checking)
    })
})


fetch(url)
    .then(res => res.json())
    .then(data => {

        arr = data.map(({ title, body, id }) => {


            let postContainer = document.createElement('div')
            postContainer.id = "postContainer"

            postContainer.onclick = () => {
                window.location.href = `details.html`
                localStorage.setItem("id", `${id}`);
            }

            let post__title = document.createElement("div")
            post__title.id = "posts__title"
            post__title.innerHTML = title

            let post__body = document.createElement("div")
            post__body.id = "posts__body"
            post__body.innerHTML = body

            postsBlock.appendChild(postContainer)
            postContainer.appendChild(post__title)
            postContainer.appendChild(post__body)
            return { title: title, body: body, element: postContainer }


        })
    })
details.onclick = () => {

}


