const contactsElem = document.querySelector('.contacts');

async function getData() {
    const result = await axios.get("https://jsonplaceholder.typicode.com/users");
    result.data.forEach(user => {
        const li = document.createElement('tr');
        li.innerHTML = `<tr>
            <td>${user.name}<strong></td>
            <td>@${user.username}</strong></td>
            <td><small>${user.email}</small></td>
        </tr>`
        contactsElem.appendChild(li);
    });
}

getData();

// axios
//     .get("https://jsonplaceholder.typicode.com/users")
//     .then(function(result){
//         // console.log();

//         result.data.forEach(user => {
//             const li = document.createElement('tr');
//             li.innerHTML = `<tr>
//                 <td>${user.name}<strong></td>
//                 <td>@${user.username}</strong></td>
//                 <td><small>${user.email}</small></td>
//             </tr>`
//             contactsElem.appendChild(li)
//         })
//     })