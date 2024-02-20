import axios from "axios";
import { car, carFilters } from "@/types";
type props ={
    carFilter : carFilters
}

export const fetchCarsData = async({carFilter}:props)=>{
    
    console.log("Function called")

    const {year,fuel,limit,manufacturer,model,make} = carFilter
    const headers = {

    'X-RapidAPI-Key': '7f63d4e1c3msh2c585464ac1f73ap101165jsn1d51819beb11',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'

    }

    try{

        const results = await axios.get("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",{
        headers : headers,
        params : carFilter
        
            }
        )

        return results;
        
    }
    catch(error){
        console.log(error)
    }

    

    
}

export const calculateRent = (city_mpg: number, year : number)=>{

    const baseRent = 60; 
    const yearFactor = (new Date().getFullYear() - year) * 10; 
    const mpgFactor = 100 / city_mpg; 

    let rent = baseRent + yearFactor + mpgFactor;

     rent = Math.round(rent)

    return rent;

}

export const generateCarImageUrl = (car: car, angle?: string) => {
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, model, year } = car;
  
    url.searchParams.append('customer','hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(" ")[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    // url.searchParams.append('zoomLevel', zoomLevel);
    url.searchParams.append('angle', `${angle}`);
  
    return `${url}`;
  } 