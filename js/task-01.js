let categories = document.getElementsByClassName("item");
console.log("Number of categories: " + categories.length);

// console.log(categories[0].firstElementChild.nextElementSibling.);
for (let i = 0; i < categories.length; i++) {
    console.log(`Category: ${categories[i].firstElementChild.innerHTML}`);
    console.log(`Elements: ${categories[i].firstElementChild.nextElementSibling.children.length}`);
}