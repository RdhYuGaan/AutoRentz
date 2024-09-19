const url= 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '83f0014d1bmsh1de98a48be0337dp107f48jsn2efc0ad3e2cf',
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
};

try {
	const response = await fetch(url, options);
    const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

export async function fetchCars(){
const headers={
     'x-rapidapi-key': '83f0014d1bmsh1de98a48be0337dp107f48jsn2efc0ad3e2cf',
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
}

const responce = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
    {
        headers:headers,
    }
);
}