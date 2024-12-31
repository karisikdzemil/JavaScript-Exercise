// const url = "https://jsonplaceholder.typicode.com/posts";
// const apiKey = "2956d7a8d96543d896e134215243112";
const url = 'https://api.quotable.io';

fetchData()

async function fetchData(){
    try{

        const response = await fetch(url, "GET");

        if(!response.ok){
            throw new Error("Could not fetch resourse!");
        }
        const data = response.json();

        console.log(data)
    }catch(error){
        console.error(error);
    }
}
