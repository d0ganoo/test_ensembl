const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}

export const getData = function(url){
    return fetch(url, {headers}).then(response => response.json(), error => console.error("Failed to load data", error));
}