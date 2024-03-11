'use client';
import React,{useState, useEffect, Suspense, useMemo} from 'react'
import { fetchCarsData } from '@/UtilFunctions'
import { carFilters,car } from '@/types'
import { CarCard,CarDetails, CarModal, ShowMore } from '.';
import { useRouter, useSearchParams } from 'next/navigation';

async function fetchCarsDataFiltered(carFiltersobj: carFilters){


    const response = await fetchCarsData({ carFilter:  { 
        manufacturer: carFiltersobj.manufacturer,
        year: carFiltersobj.year,
        model: carFiltersobj.model,
        limit: carFiltersobj.limit,
        fuel: carFiltersobj.fuel,
        make: carFiltersobj.make
    } });
    let carsData: car[] = [];
    if (response) {
      carsData = response.data;
    }
    return carsData;

}

///This is the second commit


 function CarList() {

    const searchParams = useSearchParams()

    const carFiltersobj = useMemo(() => ({
        year: Number(searchParams.get('year')) || 2022, // Handle non-numeric years
        model: searchParams.get('model') || ' ',
        limit: Number(searchParams.get('limit')) || 10, // Default limit
        fuel: searchParams.get('fuel') || '',
        make: searchParams.get('make') || '', // Include 'make' as requested
    }), [
        
        searchParams.get('year'),
        searchParams.get('model'),
        searchParams.get('limit'),
        searchParams.get('fuel'),
        searchParams.get('make'),
    ]);

    
      
      

    

    

    

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedCar, setSelectedCar] = useState<car | undefined>(undefined)
    const [carsData, setCarsData] = useState<car[]>([]);

    useEffect(() => {
        async function fetchData() {

            

            const response = await fetchCarsDataFiltered(carFiltersobj);
            console.log(response)
            setCarsData(response)

        }
        fetchData();
      }, [carFiltersobj]);




    

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

                {carsData && carsData.length > 0 ? (
                    <div className='w-full grid gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
                    {carsData.map((car, index) => (
                        <CarCard key={index} carInstance={car} onViewDetailsClick={() => handleViewDetailsClick(car)} />
                    ))}
                    </div>
                ) : (
                    <h1 className='font-extrabold text-xl text-center py-5  mx-auto w-full'> Oops! We couldn't find any cars matching your search</h1>
                )}
            <div>

                {
                    isModalOpen && selectedCar && (

                        <CarModal ismodalOpen={isModalOpen} carDetails={selectedCar} closeModal={closeModal} />

                    )
                }
                
            </div>

            {
                (carFiltersobj.limit || 10) >= carsData.length && (
                    <ShowMore 

                        pageNumber={(carFiltersobj.limit || 10) /10}
                        isNext={(carFiltersobj.limit ||10) > carsData.length}
                    
                    />
                )
                
            }
            
            
            
        </section>
    </Suspense>
  )
}

export default CarList

