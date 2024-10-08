"use Client";
import {Fragment, useState} from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Listbox, Transition } from '@headlessui/react';
import { CustomFilterProps } from '@/types';


const CustomFilter = ({title, options}:
  CustomFilterProps) => {
    const [selected,setSelected]= useState(options[0]);
  return (
    <div className='w-fit'>
      <Listbox>
        <div className='relative w-fit z-10'>
          <Listbox.Button className="custom-bilter__btn">
            <span>Filter</span>
          </Listbox.Button>
        </div>
      </Listbox>
      
    </div>
  )
}

export default CustomFilter
