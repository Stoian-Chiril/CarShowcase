
export async function fetchCars() {
    const headers = {
        'x-rapidapi-key': '2a5c17be1cmsh744ec15e2e2a2c8p1ec8d1jsn6c9c631420d8',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'

    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{
        headers: headers

    });
    const result = await response.json();

    return result
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50;
    const mileageFactor = 0.1;
    const ageFactor = 0.5;

    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
}