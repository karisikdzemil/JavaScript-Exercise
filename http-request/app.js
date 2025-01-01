const url = "https://jsonplaceholder.typicode.com/posts";

getData();

function getData(){
    fetch(url, {
        method: "DELETE"
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}
