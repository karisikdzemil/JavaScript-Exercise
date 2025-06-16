"use strict";
// let id: number = 5;
// let company: string = "Acme Corp";
// let isPublished: boolean = true;
const signContract = (employee) => {
    console.log("Contract signed by: " + employee.name + "with email" + employee.email);
};
signContract({ name: "Pedro", cerditScore: 800, id: 34, email: "pedro@gmail.com" });
