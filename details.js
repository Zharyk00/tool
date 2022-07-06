const post__id = document.getElementById('id')
const post__title = document.getElementById('title')
const post__body = document.getElementById('body')
const button__title = document.getElementById("button__title")
const button__body = document.getElementById("button__body")
const edit__body = document.getElementById("edit__body")
const edit__title = document.getElementById("edit__title")
const delete__button = document.getElementById("delete__button")
const err = ''

const data = localStorage.getItem('id')

function cheking() {
    if (!err) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${data}`)
            .then(res => res.json())
            .then(({ id, title, body }) => (
                post__id.innerHTML = id,
                post__title.innerHTML = title,
                post__body.innerHTML = body
            ))
    } else {
        return;
    }
}

cheking()

const deletePost = async () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${data}`, {
        method: 'DELETE',
    })
        .then(res => res.json())
        .then(res => console.log(res))
}

const updateTitle = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${data}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json ; charset=UTF-8' },
        body: JSON.stringify({ title: edit__title.value })
    })
        .then(res => res.json())
        .then(({ id, title, body }) => (
            post__id.innerHTML = id,
            post__title.innerHTML = title,
            post__body.innerHTML = body
        ))
}


const updateBody = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${data}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json ; charset=UTF-8' },
        body: JSON.stringify({ body: edit__body.value })
    })
        .then(res => res.json())
        .then(({ id, title, body }) => (
            post__id.innerHTML = id,
            post__title.innerHTML = title,
            post__body.innerHTML = body
        ))

}

delete__button.onclick = (event) => { event.preventDefault(), deletePost(), window.location.href = `index.html` }

button__title.onclick = (event) => { event.preventDefault(), updateTitle() }

button__body.onclick = (event) => { event.preventDefault(), updateBody() }














