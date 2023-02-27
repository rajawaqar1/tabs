console.log('yes')
let y =document.getElementsByClassName("tab-nav")[0].addEventListener("click", function () {
    console.log('o')
    document.getElementsByClassName("tab-data")[0].style.display = "block";
    console.log('done')
    document.getElementsByClassName("tab-data")[1].style.display = "none";
    document.getElementsByClassName("tab-data")[2].style.display = "none";
    document.getElementsByTagName('a')[0].classList.add('active');
    document.getElementsByTagName('a')[1].classList.remove('active');
    document.getElementsByTagName('a')[2].classList.remove('active');
    console.log("show");
});
document.getElementsByClassName("tab-nav")[1].addEventListener('click', function () {
    document.getElementsByClassName("tab-data")[0].style.display = "none";
    document.getElementsByClassName("tab-data")[1].style.display = "block";
    document.getElementsByClassName("tab-data")[2].style.display = "none";
    document.getElementsByTagName('a')[0].classList.remove('active');
    document.getElementsByTagName('a')[1].classList.add('active');
    document.getElementsByTagName('a')[2].classList.remove('active');
    console.log("show");
});
document.getElementsByClassName("tab-nav")[2].addEventListener('click', function () {
    document.getElementsByClassName("tab-data")[0].style.display = "none";
    document.getElementsByClassName("tab-data")[1].style.display = "none";
    document.getElementsByClassName("tab-data")[2].style.display = "block";
    document.getElementsByTagName('a')[0].classList.remove('active');
    document.getElementsByTagName('a')[1].classList.remove('active');
    document.getElementsByTagName('a')[2].classList.add('active');
    console.log("show");
});