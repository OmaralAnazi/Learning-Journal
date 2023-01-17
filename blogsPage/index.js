import { BLOGS } from "../database/blogsData.js"

const LIMITED_LESS_VIEW = 3
const blogsElement = document.getElementById("blogs")

function renderBlogs() {
    let blogsHtml = ""
    BLOGS.forEach( blog => {
        blogsHtml += `
        <div class="blog-item">
            <img class="blog-img" src="../${blog.imgPath}" alt="${blog.title}">
            <p class="date">${blog.date}</p>
            <h2>${blog.title}</h2>
            <p>${blog.content}</p>
        </div>
        `
    })
    blogsElement.innerHTML = blogsHtml
}

renderBlogs()