export function fetchDataWithCallback(callback) {
    setTimeout(() => {
        fetch('data2.json')
            .then(response => {
                if (!response.ok) throw new Error("Network response was not ok");
                return response.json();
            })
            .then(data => callback(null, data))
            .catch(error => callback(error, null));
    }, 10000); // 10 seconds delay
}
