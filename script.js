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
    .then(data => {
        console.log(data);
        //displayData(data);
        getAllData();
    })
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

function displayData(response) {
    var displayDiv = document.getElementById("displayData");
    displayDiv.innerHTML = "<h2>Received Data:</h2>";

    if (response && response.data) {
  
        if (Array.isArray(response.data)) {
            response.data.forEach((dataObject, index) => {
                var pElement = document.createElement("p");
                pElement.innerHTML = "<strong>Student " + (index + 1) + ":</strong>";

          
                for (var key in dataObject) {
                    if (dataObject.hasOwnProperty(key)) {
                        var subElement = document.createElement("p");
                        subElement.innerHTML = key + ": " + dataObject[key];
                        pElement.appendChild(subElement);
                    }
                }

                displayDiv.appendChild(pElement);
            });
        } else {
        
            for (var key in response.data) {
                if (response.data.hasOwnProperty(key)) {
                    var pElement = document.createElement("p");
                    pElement.innerHTML = key + ": " + response.data[key];
                    displayDiv.appendChild(pElement);
                }
            }
        }
    } else {
        
        var errorElement = document.createElement("p");
        errorElement.innerHTML = "<strong>Error:</strong> No data received from the server.";
        displayDiv.appendChild(errorElement);
    }
}
