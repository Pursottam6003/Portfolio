var blogDivsObj = document.getElementsByClassName('desc_link');

function showBlog(e) {
    let clicked = e.target.parentElement.parentElement.parentElement;
    let description = document.getElementById('readMore');
    for (let i = 0; i < n_blogDivs; i++) {
        blogDivsObj[i].parentElement.parentElement.parentElement.classList.toggle('readme_hide')
    }

    clicked.classList.toggle('readme_hide');
    description.classList.toggle('readme_hide');
}
 
// no of divs
let n_blogDivs = blogDivsObj.length 

for (let i = 0; i < n_blogDivs; i++) {
    blogDivsObj[i].addEventListener('click', e => {
        showBlog(e);
    });
}
