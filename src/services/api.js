export const getAll = async (endpoint) => {
    let resp = ''
    await fetch(`https://swapi.dev/api/${endpoint}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((resp) => { return resp.json() })
        .then((data) => {
            return resp = data
        })
        .catch((error) => console.log('Error:', error));
        return resp
    };
    
    export const getOne = async (endpoint, id) => {
        let resp = ''
        await fetch(`https://swapi.dev/api/${endpoint}/${id}/`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((resp) => { return resp.json() })
            .then((data) => {
                return resp = data
            })
            .catch((error) => console.log('Error:', error));
            return resp
        };

