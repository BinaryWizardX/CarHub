'use client';
import React,{useState, useEffect, Suspense} from 'react'
import { fetchCarsData } from '@/UtilFunctions'
import { carFilters,car } from '@/types'
import { CarCard,CarDetails, CarModal } from '.';
import { useRouter, useSearchParams } from 'next/navigation';

async function fetchCarsDataFiltered(){


    const response = await fetchCarsData({ carFilter:  { make:"Honda" } });
    let carsData: car[] = [];
    if (response) {
      carsData = response.data;
    }
    return carsData;

}



 function CarList() {

    const searchParams = useSearchParams()

    const carFiltersobj = {
        manufacturer: searchParams.get('Manufacturer') || '',
        year: Number(searchParams.get('year')) || undefined, // Handle non-numeric years
        model: searchParams.get('modal') || '',
        limit: Number(searchParams.get('limit')) || 10, // Default limit
        fuel: searchParams.get('fuel') || '',
        make: searchParams.get('make') || '', // Include 'make' as requested
      };
      
      

    

    

    

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedCar, setSelectedCar] = useState<car | undefined>(undefined)
    const [carsData, setCarsData] = useState<car[]>([]);

    useEffect(() => {
        async function fetchData() {

            const response = await fetchCarsDataFiltered();
            setCarsData(response)

            /*
            const response = await fetchCarsData({ carFilter: { model: "corolla" } });
            if (response) {
                setCarsData(response.data);
            }
            */
        }
        fetchData();
      }, []);



    /*
    const response = await fetchCarsData({carFilter:{model:"corolla"}});
    let carsData:car[] = [];
    if(response){
        carsData = response.data
    }
    */
    

    const handleViewDetailsClick = (car:car)=>{
        console.log(car)
        setSelectedCar(car)
        setIsModalOpen(true);
    }

    const closeModal = ()=>{
        setIsModalOpen(false)
    }

    
  return (
    <Suspense fallback = {<h1>Loading Cars ...</h1>}>
        <section className='cars-cards-section mx-auto max-w-7xl p-3'>
            <div className='w-full grid gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>

                {carsData?
                    (
                        carsData.map((car,index)=>{
                            return(

                                <CarCard key={index}  carInstance={car} onViewDetailsClick = {()=> handleViewDetailsClick(car)} />

                            )
                            
                            
                            
                        })
                        

                    )
                    :
                    (
                        <h1> cars data is not presented</h1>

                    )
                
                }
                
            
            </div>
            <div>

                {
                    isModalOpen && selectedCar && (

                        <CarModal ismodalOpen={isModalOpen} carDetails={selectedCar} closeModal={closeModal} />

                    )
                }
                
                </div>
        </section>
    </Suspense>
  )
}

export default CarList
