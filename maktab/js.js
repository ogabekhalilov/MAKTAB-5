function changeStatus() {
    const statusElement = document.getElementById('status');
    const currentStatus = statusElement.innerText;
  
    const newStatus = currentStatus === '#status' ? '' : 'Активен';
    statusElement.innerText = newStatus;
  }
  