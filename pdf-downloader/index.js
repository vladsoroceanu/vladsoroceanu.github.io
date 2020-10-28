window.onload = () => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const file = new Blob([this.response], { type: 'application/pdf' });
      const link = document.querySelector('#download-blob');

      link.href = window.URL.createObjectURL(file);
      link.download = 'byte-array';
    }
  };
  xhr.open('GET', 'dummy.pdf');
  xhr.responseType = 'blob';
  xhr.send();
};
