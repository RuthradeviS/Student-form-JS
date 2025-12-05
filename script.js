document.getElementById("studentForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const course = document.getElementById("course").value;
    const email = document.getElementById("email").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked').value;

    const tableBody = document.querySelector("#studentTable tbody");

    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${course}</td>
        <td>${gender}</td>
        <td>${email}</td>
        <td><button class="delete-btn">Delete</button></td>
    `;

    tableBody.appendChild(row);

    // Reset form
    document.getElementById("studentForm").reset();
    document.querySelector('input[name="gender"][value="Male"]').checked = true;
});

// Delete button functionality
document.querySelector("#studentTable").addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-btn")) {
        e.target.closest("tr").remove();
    }
});
