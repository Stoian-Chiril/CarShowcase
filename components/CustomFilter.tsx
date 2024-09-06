'use client';

import { Fragment, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from "@headlessui/react";
import { CustomFilterProps } from "@/types";
import { updateSearchParams } from "@/utils";

const CustomFilter = ({title, options}: CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0])
  const router = useRouter()

  const handleUpdateParams = (e: {title: string, value:string}) => {
  const newPathName = updateSearchParams(title, e.value.toLowerCase())

  router.push(newPathName, {scroll: false})
  }

  return (
    <div className='w-fit'>
      <Listbox
        value={selected}
        onChange={(e)=>{
          setSelected(e);
          handleUpdateParams(e)
        }}
      >
        <div className='relative w-fit z-10'>
          <ListboxButton className='custom-filter__btn'>
            <span className='block truncate'>
              {selected.title}
            </span>
            <Image 
            src='/chevron-up-down.svg' 
            width={20} 
            height={20} 
            className='ml-4 
            object-contain' 
            alt='chevron_up-down' 
          />
          </ListboxButton>
          <Transition
            as={Fragment} 
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <ListboxOptions 
              anchor="bottom"
              className="bsolute mt-1 max-h-60 w-auto overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            >
              {options.map((option) => (
                <ListboxOption
                  key={option.title}
                  className= "relative data-[focus]:bg-blue-300 cursor-default select-none py-2 px-4"
                  
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span className={`block ml-2 truncate ${selected ? "font-medium" : "font-normal"}`} >
                        {option.title}
                      </span>
                    </>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
          </div>
      </Listbox>
    </div>
  );
}

export default CustomFilter