const url = "https://jsonplaceholder.typicode.com/posts";

getData();

function getData(){
const data = { 
    userId: '12', 
    id: '2p', 
    title: 'djemsi', 
    body: 'karisik' 
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Označava da se šalje JSON
    },
    body: JSON.stringify(data) // Konvertuje objekat u JSON string
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // Čeka JSON odgovor
    })
    .then(data => {
      console.log("Response:", data); // Radi nešto sa povratnim podacima
    })
    .catch(error => console.error("There was a problem with the fetch operation:", error));

}

// putData();

// function putData(){
//     const data = {
//         title: "updated title",
//         body: "updated body",
//       };
    
//       fetch(`${url}/posts/1`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       })
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error("Something went wrong");
//           }
//           return response.json();
//         })
//         .then((data) => console.log("PUT response:", data))
//         .catch((error) => console.log("Error:", error));
// }

// deleteUser();

// function deleteUser(){
//     fetch(`${url}/posts/1`, {
//         method: "DELETE"
//     }).then(response => {
//         if(!response.ok){
//             throw new Error("Something went wrong");
//         }
//         console.log("Delete success")
//     }).catch(error => console.log(error))

// }

