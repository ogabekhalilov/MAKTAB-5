function showPage(page) {
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('admin-panel').style.display = 'none';

    if (page === 'admin') {
        document.getElementById('admin-panel').style.display = 'block';
    } else {
        document.getElementById('main-content').style.display = 'block';
    }
}

function showForm() {
    var form = document.getElementById('newsForm');
    form.style.display = form.style.display === 'none' ? 'flex' : 'none';
}

function addNews() {
    var title = document.getElementById('newsTitle').value;
    var content = document.getElementById('newsContent').value;

    var newsList = document.getElementById('news-list');
    var listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${title}:</strong> ${content}`;
    newsList.appendChild(listItem);

    document.getElementById('newsTitle').value = '';
    document.getElementById('newsContent').value = '';

    showForm();
}
