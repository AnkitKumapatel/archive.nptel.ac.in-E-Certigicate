document.getElementById('downloadBtn').addEventListener('click', function() {
    // Path to the PDF file you want to allow the user to download
    var pdfUrl = 'https://p-def6.pcloud.com/D4Z16680GZozu14h7ZtMFM7ZZkJyzXkZ2ZZKcJZkZazwFZgzZ6LZKYZuCD05ZbPEeU9OX1oHFYLvTotsLr78Epgl7/Ankit%20cretificate.pdf'; // Replace with your PDF file's URL

    // Trigger the download
    var link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'course_certificate.pdf';  // Specify the default filename for download
    link.click();
});
