const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC3aj05GEEyzdOqYM5FLSFeg&part=snippet%2Cid&order=date&maxResults=5';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'f1f30414d2msh6b59d0b8456bddbp13a319jsn844d211cff37',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
    const response = await fetch(urlApi, options);
    const data = await response.json(); 
    return data; 
}

