function sendToServer() {
    let item = document.querySelector('#inp').value;
    fetch('/', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({text: item})
    })
    .then(data => console.log(data))
}