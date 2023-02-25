const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a3b75967f6mshdaf0ff7e08338c7p135ee2jsn97b50190fc68',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
  };
  
  export let  fetchFromApi = async (url) => {
	let response =  await fetch(url, options)
	let res = await response.json()
	 return res
  }