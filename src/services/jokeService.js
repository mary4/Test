export async function loadJoke(){
    const res = await fetch("https://api.chucknorris.io/jokes/random");
    const joke = await res.json();
 
    return joke["value"];
}