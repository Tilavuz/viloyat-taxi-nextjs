import React, { useState } from 'react'

export default function useLoading() {
  const [pending, setPending] = useState<boolean>(false)

  function handleLoading(bool: boolean) {
    setPending(bool)
  }

  return { pending, handleLoading }

}
