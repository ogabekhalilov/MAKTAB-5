function addRow() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(table.rows.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "Новая строка " + table.rows.length;
    cell2.innerHTML = "<button onclick=\"deleteRow(this)\">Удалить</button>";
}

function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
