import React from 'react'
import { items } from './items'
import Link from 'next/link'
import { Apple } from 'lucide-react'

export default function Footer() {
  return (
    <footer className='bg-[#081144] text-white pt-16'>
        <div className='flex items-start justify-between px-28'>
            {
                items.map(item => {
                    return <div key={item.title}>
                        <h4 className='font-bold text-2xl mb-4'>{item.title}</h4>
                        <ul>
                            {
                                item.resources.map(resource => {
                                    return <li key={resource.name}>
                                        <Link href={resource.link} className='flex items-center font-bold text-xl gap-2'>
                                            {resource.icon}
                                            <span>{resource.name}</span>
                                        </Link>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                })
            }
            <div>
                <h4 className='font-bold text-2xl mb-4'>Mobil ilovalar</h4>
                <ul>
                    <li>
                        <Link className='flex items-center font-bold text-xl gap-2' href={'/'}>
                            <Apple size={20}/>
                            <span>Iphone</span>
                        </Link>
                    </li>
                    <li>
                        <Link className='flex items-center font-bold text-xl gap-2' href={'/'}>Android</Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className='h-[66px] flex items-center justify-center mt-16 bg-[#1a2355]'>
            <h4 className='font-bold text-2xl cursor-pointer text-white'>
                <Link href={"/"}>
                    Viloyat<span className="text-[#facc15]">Taxi</span>
                </Link>
            </h4>
        </div>
    </footer>
  )
}
