const contentBox = document.getElementById("content");

const point = (route) => {
    contentBox.innerHTML = `<site-${route} />`;
};