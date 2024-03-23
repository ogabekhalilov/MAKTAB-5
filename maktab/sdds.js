function showPage(pageId) {
    var pages = document.querySelectorAll('.page');
    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }

    var selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.style.display = 'block';
    }
}
