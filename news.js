const newsData = [
    {
        title: "Sample News Article 1",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque odio a nunc luctus.",
        link: "https://example.com/news1"
    },
    {
        title: "Sample News Article 2",
        content: "Phasellus euismod erat nec massa tincidunt, nec fermentum arcu vestibulum.",
        link: "https://example.com/news2"
    },
    {
        title: "Sample News Article 3",
        content: "In hac habitasse platea dictumst. Integer ut suscipit libero. Nunc dapibus varius purus.",
        link: "https://example.com/news3"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const newsSection = document.getElementById("news");

    newsData.forEach((articleData) => {
        const articleElement = document.createElement("div");
        articleElement.classList.add("article");

        const titleElement = document.createElement("h2");
        titleElement.textContent = articleData.title;

        const contentElement = document.createElement("p");
        contentElement.textContent = articleData.content;

        const linkElement = document.createElement("a");
        linkElement.textContent = "Read More";
        linkElement.href = articleData.link;
        linkElement.target = "_blank";

        articleElement.appendChild(titleElement);
        articleElement.appendChild(contentElement);
        articleElement.appendChild(linkElement);

        newsSection.appendChild(articleElement);
    });
});
