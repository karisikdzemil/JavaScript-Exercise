"use strict";
// let id: number = 5;
// let company: string = "Acme Corp";
// let isPublished: boolean = true;
// let ids: number[] = [1, 2, 3, 4, 5];
// let x: any = "pedro";
// let xArr:any = ["pedro", 0, true];
// const concatValues = (a: string, b:string): string => {
//     return a + b;
// }
// console.log(concatValues("Hello ", "World"));
// console.log(concatValues("5", "10"));
// user infterfaces
// interface UserInterface {
//     id: number,
//     name: string,
//     age?: number,
//     greet(message: string): void
// }
// const User: UserInterface = {
//     id: 2,
//     name: "Pedro",
//     greet(message){
//         console.log(message)
//     }
// }
// User.greet("Hello");
// if(!User.age){
//     console.log("No age Of the User!");
// }else{
//     console.log(User.age);
// }
// Unions and intersections:
// type IDFieldType = string | number;
// const printID = (id: IDFieldType) => {
//     console.log("ID: " +  id);
// }
// printID(12345678);
// interface BusinessPartner {
//     name: string,
//     cerditScore: number,
// }
// interface UserIdentity {
//     id: number,
//     email: string,
// }
// type Employee = BusinessPartner & UserIdentity;
// const signContract = (employee: Employee) => {
//     console.log("Contract signed by: " + employee.name + " with email " + employee.email);
// }
// signContract({name: "Pedro", cerditScore: 800, id: 34, email: "pedro@gmail.com"})
// Enums 
var LoginError;
(function (LoginError) {
    LoginError["Unauthorized"] = "unauthorized";
    LoginError["Nouser"] = "nouser";
    LoginError["WrongCredentials"] = "wrongcredentials";
    LoginError["Internal"] = "internal";
})(LoginError || (LoginError = {}));
const printErrorMsg = (error) => {
    if (error === LoginError.Unauthorized) {
        console.log("User not authorized");
    }
    else if (error === LoginError.Nouser) {
        console.log("No user was found with that username.");
    }
    else if (error === LoginError.WrongCredentials) {
        console.log("Wrong username/password combination");
    }
    else {
        console.log("Internal error");
    }
};
printErrorMsg(LoginError.WrongCredentials);
