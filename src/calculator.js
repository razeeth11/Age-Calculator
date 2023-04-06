  export function ageCalculator(birthday){

  const today = new Date().getTime();
  const current = new Date(birthday).getTime();
  const resInMilliSeconds = today - current

  const years = Math.floor(resInMilliSeconds / ( 1000 * 3600 * 365 * 24))
  const months = Math.floor(resInMilliSeconds / ( 1000 * 3600 * 365 * 24 * 2))
  const days = Math.floor(resInMilliSeconds / ( 1000 * 3600 * 365 * 24))

  return {
    years : years,
    months : months,
    days : days
  }
}