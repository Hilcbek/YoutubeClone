const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.RAPID_API_KEY,
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
  };
  
  export let  fetchFromApi = async (url) => {
	let response =  await fetch(url, options)
	let res = await response.json()
	 return res
  }