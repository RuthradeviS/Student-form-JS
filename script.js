    
const form = document.getElementById("studentForm");
const table = document.getElementById("studentTable").getElementsByTagName("tbody")[0];

// Function to delete a row

function deleteRow(event) 
{
  const btn = event.target;
  const row = btn.parentNode.parentNode;
  row.remove()
}

// Handle form submission

form.addEventListener("submit", function(event) {
  event.preventDefault()
  
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const course = document.getElementById("course").value;
  const email = document.getElementById("email").value;
  
  const newRow = table.insertRow()
  
  newRow.insertCell(0).textContent = name;
  newRow.insertCell(1).textContent = age;
  newRow.insertCell(2).textContent = course;
  newRow.insertCell(3).textContent = gender;
  newRow.insertCell(4).textContent = email;
  
  const actionCell = newRow.insertCell(5);
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.addEventListener("click", deleteRow);
  
  actionCell.appendChild(deleteBtn)
  
  form.reset(); // Clear form fields
})