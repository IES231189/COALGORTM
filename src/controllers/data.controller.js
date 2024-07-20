// data.controller.js
let data = [];

export async function fetchData() {
    const response = await fetch("../../data/bussines.json");
    const jsonData = await response.json();
    data = jsonData.slice(0,400);
    return data; 
}
