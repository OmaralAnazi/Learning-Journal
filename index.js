const BLOGS = [
    {
        imgPath: "images/blog1-img.png",
        date: "JULY 23, 2022",
        title: "Blog one",
        content: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
    },
    {
        imgPath: "images/blog2-img.png",
        date: "JULY 23, 2022",
        title: "Blog two",
        content: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
    },
    {
        imgPath: "images/blog3-img.png",
        date: "JULY 23, 2022",
        title: "Blog three",
        content: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
    },
    {
        imgPath: "images/blog4-img.png",
        date: "JULY 23, 2022",
        title: "Blog four",
        content: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
    },
    {
        imgPath: "images/blog5-img.png",
        date: "JULY 23, 2022",
        title: "Blog five",
        content: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
    },
    {
        imgPath: "images/blog6-img.png",
        date: "JULY 23, 2022",
        title: "Blog six",
        content: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
    },
]
const LIMITED_LESS_VIEW = 3
const blogsElement = document.getElementById("blogs")

function renderBlogs() {
    let blogsHtml = ""
    BLOGS.forEach( blog => {
        blogsHtml += `
        <div class="blog-item">
            <img class="blog-img" src="${blog.imgPath}" alt="${blog.title}">
            <p class="date">${blog.date}</p>
            <h2>${blog.title}</h2>
            <p>${blog.content}</p>
        </div>
        `
    })
    blogsElement.innerHTML = blogsHtml
}

renderBlogs()