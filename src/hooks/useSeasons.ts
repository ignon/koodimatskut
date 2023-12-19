import { useEffect } from "react"

export const getSeason = (): string => {
  // return 'summer'
  const month = getMonth()
  if (isBetween(month, 11, 12)) {
    return 'winter'
  }
  if (isBetween(month, 5, 7)) {
    return 'summer'
  }
  return ''
}

const useSeasons = (): void => {
  useEffect(() => {

    const season = getSeason()
    if (season == 'winter') {
      setBackground('bg-winter')
    }
    if (season == 'summer' && window.innerWidth >= 850) {
      setBackground('bg-summer')
    }
  }, [])
}

const isBetween = (val: number, min: number, max: number): boolean => {
  return (val >= min && val <= max)
}

const getMonth = (): number => {
    return (new Date()).getMonth() + 1
}

const setBackground = (background: string): void => {
    document.getElementsByTagName('body')[0].classList.add(background)
}

export default useSeasons
