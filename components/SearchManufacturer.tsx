"use client";
import { useState,Fragment } from 'react';
import Image from 'next/image';
import { Combobox, Transition } from '@headlessui/react';
import { manufacturers } from '@/public/constants';
import { SearchManufacturerProps } from './types'


const SearchManufacturer = ({
    manufacturer, setManufacturer}
:SearchManufacturerProps) => {
  const [query,setquery]=useState('');

  
  const filteredManufacturers =
   query === ""
     ?manufacturers 
     : manufacturers.filter((item)=>(
      item.toLowerCase()
      .replace(/\s+g, "")
      .includes(query.toLowerCase().replace(/\s+g,"")

      )))

  return (
   <div className='search-manufacturer'>
    <Combobox>
      <div className="relative w-full">
        <Combobox.Button className="absolute top-[14px]">
          <Image src="car-logo.svg" 
            width={20} 
            height={28} 
            className="ml-4" 
            alt= "car-logo"
          />
        </Combobox.Button>

        <Combobox.Input className="search-manufacturer__input"
        placeholder="volkswagen" 
        displayValue={(manufacturer:string)=>
          manufacturer}
        onChange={(e) =>setquery(e.target.value)}
        />

        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opasity-100"
          leaveTo='opasity-0'
          afterLeave={()=>setquery('')}
          >
            
        </Transition>
      </div>
    </Combobox>
   </div>

  )
}

export default SearchManufacturer
