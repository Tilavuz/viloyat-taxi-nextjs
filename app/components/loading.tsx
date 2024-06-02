import { Loader } from 'lucide-react'
import React from 'react'

export default function Loading({ size, styles } : { size: number, styles: string }) {
  return (
    <div className={styles}>
        <Loader className='animate-spin' size={size} />
    </div>
  )
}
