const form = document.getElementById('usernameForm');
const output = document.getElementById('output');
const universalUrl = "https://api.github.com/users/";

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const clientUrl = universalUrl + username;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', clientUrl);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(this.responseText);
            const name = data.name;
            //console.log(data);
            //output.innerText = `Name: ${name ? name : "No name found"}`;
            output.innerHTML = `<div>
                            <p> Name : ${name}</p>
                            <p> Location : ${data.location}</p>
                            <p> Total public Repo : ${data.public_repos}</p>
                            <p> Github created in : ${data.created_at}</p>
                        </div>`
        } else if (xhr.readyState === 4) {
            output.innerText = "User not found.";
        }
    }
    xhr.send();
});