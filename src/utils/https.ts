export default async function get(url: string){
  const response = await fetch(url);

  if(!response.ok){
    throw new Error('something went wrong!');
  }

  const data = response.json() as unknown;
  return data;
}
