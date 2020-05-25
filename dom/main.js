const trending = document.querySelector('[data-content="newstrending"]')
const articles = trending.getElementsByTagName('article')

const trendingData = []

for(let i = 0; i < articles.length; i++) {
    const article = articles[i]

    // lấy hình ảnh của 1 tin
    const img = article.querySelector('img')
    const src = img.getAttribute('src')
    const title = article.innerText
    const tagA = article.querySelector('a')
    const href = tagA.getAttribute('href')

    const articleObj = {
        src: src,
        title: title,
        href: href
    }

    trendingData.push(articleObj)
}
console.log(trendingData)
