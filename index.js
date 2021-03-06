let arr = []
const postsBlock = document.getElementById('posts')
let search = document.getElementById("search")
const details = document.getElementById("details")
const green = document.getElementById('green-box')
const red = document.getElementById('red-box')
const blue = document.getElementById('blue-box')
const aqua = document.getElementById('aqua-box')
const orange = document.getElementById('orange-box')
let url = "https://jsonplaceholder.typicode.com/posts"

addEventListener('input', e => {
    let value = e.target.value.toLowerCase()
    arr.forEach(({ title, body, element }) => {
        let checking = title.toLowerCase().includes(value) || body.toLowerCase().includes(value)
        element.classList.toggle("hide", !checking)
    })
})


console.log(arr);


fetch(url)
    .then(res => res.json())
    .then(data => {

        arr = data.map(({ title, body, id }) => {
            let postContainer = document.createElement('div')

            if (id % 1 === 0) {
                postContainer.className = "postContainer"
            }
            if (id % 2 === 0) {
                postContainer.className = "greenpost"
            } if (id % 3 === 0) {
                postContainer.className = "redpost"
            }
            if (id % 4 === 0) {
                postContainer.className = "bluepost"
            } if (id % 5 === 0) {
                postContainer.className = 'aquapost'
            }
            if (id % 7 === 0) {
                postContainer.className = 'orangepost'
            }




            let post__title = document.createElement("div")
            post__title.id = "posts__title"
            post__title.innerHTML = `<label>Title</label> <br/>${title}`

            let post__body = document.createElement("div")
            post__body.id = "posts__body"
            post__body.innerHTML = `<label>Body</label> <br/>${body}`

            let link = document.createElement('a')
            link.className = 'link'
            link.innerHTML = `<a href="details.html">More...</a>`
            link.onclick = () => {
                localStorage.setItem("id", `${id}`);
            }

            postsBlock.appendChild(postContainer)
            postContainer.appendChild(post__title)
            postContainer.appendChild(post__body)
            postContainer.appendChild(link)
            return { title: title, body: body, element: postContainer }


        })


    })





