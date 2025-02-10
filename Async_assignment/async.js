export async function fetchDataWithAsyncAwait() {
    try {
        let response = await fetch('data2.json');
        if (!response.ok) throw new Error("Network response was not ok");
        let data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}
