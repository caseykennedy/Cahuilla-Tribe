// useOverlay toggle hook
// Toggles the overlay currently used for the reservation form

import { useState } from 'react'

// ___________________________________________________________________

const useOverlay = () => {
  const [isShowing, setIsShowing] = useState(false)

  function toggleOverlay() {
    setIsShowing(!isShowing)
  }

  return {
    isShowing,
    toggleOverlay
  }
}

export default useOverlay
