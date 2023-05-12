const form = document.getElementById('user-form');
form.addEventListener('submit', addUser);
const submitBtn = document.getElementById("submit");
const deleteBtn = document.getElementById("delete");

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    form.reset();
});

deleteBtn.addEventListener('click', (e) => {
    if (e.target.className == 'delete') {
        const tr = e.target.parentElement;
        tr.parentNode.removeChild(tr);
    }
});

function addUser(event) {
    event.preventDefault(); // prevent the form from submitting

    // retrieve form data
    const name = document.getElementById('name').value;
    const id = document.getElementById('id').value;
    const country = document.getElementById('country').value;

    // retrieve selected languages
    const languages = [];
    const checkboxes = document.getElementsByName('languages');
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            languages.push(checkbox.value);
        }
    });

    // create a new row in the table
    const table = document.getElementById('user-table');
    const newRow = table.insertRow();

    // insert cells into the new row
    const nameCell = newRow.insertCell();
    const idCell = newRow.insertCell();
    const countryCell = newRow.insertCell();
    const languagesCell = newRow.insertCell();
    const actionsCell = newRow.insertCell();
    

    // set the cell values to the form data
    nameCell.innerText = name;
    idCell.innerText = id;
    countryCell.innerText = country;
    languagesCell.innerText = languages.join(', ');
    actionsCell.innerHTML = '<button class="btn btn-danger btn-sm" onclick="deleteRow(this)">Delete</button>';
    
}

