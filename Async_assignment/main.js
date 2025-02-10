import { fetchDataWithCallback } from './callback.js';
import { fetchDataWithPromise } from './promise.js';
import { fetchDataWithAsyncAwait } from './async.js';

// Function to display data in HTML
function displayData(data, method) {
    let outputDiv = document.getElementById("output");
    let formattedData = `
        <h2>Data fetched using ${method}</h2>
        <p><strong>Tree Value:</strong> ${data.tree}</p>
        <p><strong>Is Cake Present:</strong> ${data.see.cake}</p>
        <p><strong>Star:</strong> ${data.see.star}</p>
        <p><strong>Chief:</strong> ${data.see.chief}</p>
        <p><strong>Numbers in 'these':</strong> ${data.see.these.filter(item => typeof item === "number").join(", ")}</p>
        <hr>
    `;
    outputDiv.innerHTML += formattedData;
}

// Fetch using Callbacks
fetchDataWithCallback((error, data) => {
    if (error) {
        console.error("Callback Error:", error);
        return;
    }
    displayData(data, "Callback");
});

// Fetch using Promises
fetchDataWithPromise()
    .then(data => displayData(data, "Promise"))
    .catch(error => console.error("Promise Error:", error));

// Fetch using Async/Await
async function loadData() {
    try {
        let data = await fetchDataWithAsyncAwait();
        displayData(data, "Async/Await");
    } catch (error) {
        console.error("Async/Await Error:", error);
    }
}
loadData();
