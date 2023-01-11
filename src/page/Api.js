import axios from 'axios'

const port = 8172

export const ajax = axios.create({
   baseURL: 'http://localhost:'+port
});


export async function testzz(){


  try {
    const response = await axios.get('https://example.org');
    console.log(response);
  } catch (error) {
    console.error(error);
  }


}


