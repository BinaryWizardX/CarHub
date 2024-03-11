import React from 'react'
import { SearchBar, CustomFilters } from '.'

export  interface Item {
  key : string,
  label : string
}

function CarCatelogue() {

  const currentYear = new Date().getFullYear()

 

  const dropDownMenu1 : Item[] = [
    {
      key : "item1",
      label : "Fuel"
    },
    {
      key : "item2",
      label : "Gas"
    },
    {
      key : "item3",
      label : "Electricity"
    }

    
  ];

  const dropDownMenu2 : Item[] = [
    {
      key : "item0",
      label : "Year",
    }

  ]

  for(let year :number = 2015; year <= currentYear; year++){
    dropDownMenu2.push(
      {
        key: `item${year - 2014}`, 
         label: String(year),

      }
    )
  }
  return (
    <section id='CarCatelogue' className='max-w-7xl mx-auto p-3'>
        <h1 className='text-4xl font-extrabold'>Car Catelogue</h1>
        <p className='pt-5 text-gray-700'>Explore out cars you might like</p>

        <div className='search-bar-section  flex justify-between my-10 max-[1200px]:flex-col max-[1200px]:gap-5'>

            <SearchBar />

            <div className='custom-filters flex justify-between gap-5 max-[1200px]:flex-col'>

                <CustomFilters menuName = "fuel" menuList ={dropDownMenu1} />
                <CustomFilters menuName='year' menuList={dropDownMenu2}/>,



            </div>

        </div>

    </section>
  )
}

export default CarCatelogue