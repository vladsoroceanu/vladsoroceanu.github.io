import Axios from "axios";

const getPdfFile = () => {
  return Axios.get("dummy.pdf", {
    responseType: "arraybuffer",
    headers: { Accept: "application/pdf" },
  });
};



window.onload = async () => {
  try {
    const { data } = await getPdfFile();
    console.log(data);
    const file = new Blob([data], { type: "application/pdf" });
    console.log(file);
    const link = document.querySelector("#download-blob");
    link.href = window.URL.createObjectURL(file);
    // link.download = "byte-array-file.pdf";
  } catch (e) {
    throw Error(e);
  }
};

// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (this.readyState == 4 && this.status == 200) {
//     const file = new Blob([this.response], { type: 'application/pdf' });
//     const link = document.querySelector('#download-blob');
//     link.href = window.URL.createObjectURL(file);
//     link.download = 'byte-array';
//   }
// };
// xhr.open('GET', 'dummy.pdf');
// xhr.responseType = 'blob';
// xhr.send();
