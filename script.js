function submitForm() {
    var formData = {
        studentIndex: document.getElementById("studentIndex").value,
        name: document.getElementById("name").value,
        profession: document.getElementById("profession").value,
        gender: document.getElementById("gender").value
    };

    alert('submitted');

    // Using JavaScript Fetch API to send data to the backend
    fetch('http://localhost:8085/api/v1/students', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}
