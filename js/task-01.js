const arrCategories = document.querySelectorAll(".item");
console.log(`Number od categories: ${arrCategories.length}`);


arrCategories.forEach((item)=> {
    console.log(`Category: ${item.firstElementChild.textContent} `);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
})