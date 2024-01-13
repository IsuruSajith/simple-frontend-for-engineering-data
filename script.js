function submitForm() {
    var formData = {
        studentIndex: document.getElementById("studentIndex").value,
        name: document.getElementById("name").value,
        profession: document.getElementById("profession").value,
        gender: document.getElementById("gender").value
    };

    alert('submitted');


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

function getAllData() {
   
    fetch('http://localhost:8085/api/v1/students')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
        displayData(data);
    })
    .catch(error => console.error('Error:', error));
}

function displayData(data) {
    var displayDiv = document.getElementById("displayData");
    displayDiv.innerHTML = "<h2>Received Data:</h2>";

   
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            var pElement = document.createElement("p");
            pElement.innerHTML = key + ": " + data[key];
            displayDiv.appendChild(pElement);
        }
    }
}