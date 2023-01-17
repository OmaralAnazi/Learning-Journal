import { BLOGS } from "../database/blogsData.js"

// const blogsElement = document.getElementById("blogs")

function renderBlogs() {
    const recentBlogs = getMostTwoRecentBlogs()
    // let blogsHtml = ""
    // recentBlogs.forEach( blog => {
    //     blogsHtml += `
    //     <div class="blog-item">
    //         <img class="blog-img" src="../${blog.imgPath}" alt="${blog.title}">
    //         <p class="date">${blog.date}</p>
    //         <h2>${blog.title}</h2>
    //         <p>${blog.content}</p>
    //     </div>
    //     `
    // })
    // blogsElement.innerHTML = blogsHtml
}

function getMostTwoRecentBlogs() {
    // This function just return the last two elements, if u want to change what is the
    // most recent blogs, you should change this function only
    return [ BLOGS[BLOGS.length-1], BLOGS[BLOGS.length-2] ]
}

renderBlogs()