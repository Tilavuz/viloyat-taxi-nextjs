export interface PassengerPost {
    _id: string,
    passenger_id: string,
    drivers_id: string[],
    accepted_driver_id: string,
    status: 'active' | 'not active' | 'block' | 'cancellation'
    passenger_name: string,
    price: number,
    start_city: string
    destination_city: string
    travel_date: string
    number_of_passengers: number
    additional_info: string
    createdAt: string
}

export interface DriverPost {
    _id: string
    driver_id: string
    passengers_id: string[]
    driver_name: string
    phone_number: string
    vehiclet_type: string
    vehiclet_number: string
    status: 'active' | 'not active' | 'block' | 'cancellation'
    additional_info: string
    number_of_passengers: number
    price: number,
    start_city: string
    destination_city: string
    travel_date: string
    createdAt: string
}