async function sendHttpRequest(url) {
    const response = await fetch(url);

    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    const data = await response.json();
    return data;
}

export default sendHttpRequest;
