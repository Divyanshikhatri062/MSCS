// display.js

// Retrieve the form data from Local Storage
const formData = JSON.parse(localStorage.getItem('formData'));

// Retrieve the table container element
const tableContainer = document.getElementById('tableContainer');

// Create the table element
const table = document.createElement('table');
table.innerHTML = `
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Mobile Number</th>
    <th>Complaint Type</th>
    <th>Society</th>
    <th>Complaint/Feedback</th>
  </tr>
`;

// Populate the table with form data
formData.forEach((data) => {
  const tableRow = document.createElement('tr');
  tableRow.innerHTML = `
    <td>${data.name}</td>
    <td>${data.email}</td>
    <td>${data.mobile}</td>
    <td>${data.complaintType}</td>
    <td>${data.society}</td>
    <td>${data.feedback}</td>
  `;
  table.appendChild(tableRow);
});

// Append the table to the table container
tableContainer.appendChild(table);

