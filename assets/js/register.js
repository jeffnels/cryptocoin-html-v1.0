document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registerForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Form submission triggered');

        const formData = {
            firstname: document.getElementsByName('firstname')[0].value,
            lastname: document.getElementsByName('lastname')[0].value,
            email: document.getElementsByName('email')[0].value,
            password: document.getElementsByName('password')[0].value,
            role: 'user'  // Fixed role
        };

        console.log('Form Data:', formData);

        fetch('https://tradesphere-backend.onrender.com/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxfSwiaWF0IjoxNzE2NTUwMjQzLCJleHAiOjE3MTY1ODYyNDN9.MEaRX6BFluFiwTNsPqplTd2RYtvhpR3-XlnunvY784g'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            console.log('Fetch response:', response);
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            alert('User registered successfully');
            
            // Clear the input fields after successful submission
            document.getElementsByName('firstname')[0].value = '';
            document.getElementsByName('lastname')[0].value = '';
            document.getElementsByName('email')[0].value = '';
            document.getElementsByName('password')[0].value = '';
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('User registration failed: ' + error.message);
            
            // Clear the input fields after failed submission
            document.getElementsByName('firstname')[0].value = '';
            document.getElementsByName('lastname')[0].value = '';
            document.getElementsByName('email')[0].value = '';
            document.getElementsByName('password')[0].value = '';
        });
    });
});
