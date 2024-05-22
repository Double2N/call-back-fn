//This is the exemple of my first Callback_function in javaScript

let person = [{ firstName: "Nchizi", lastName: "Bimenyimana" }];
const fullName = person.map((pf) => {
  return [pf.firstName, pf.lastName];
});
console.log(fullName);
