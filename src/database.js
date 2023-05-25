const database = {
    tourDates: [
        {
            id: 1,
            cityId: 2,
            date: "05/25/2022",
            time: "8:00 PM",
            venue: "Northern Auditorium",
            opener: 5
        },
        {
            id: 2,
            cityId: 5,
            date: "05/28/2022",
            time: "6:30 PM",
            venue: "Winter Arena",
            opener: 1
        },
        {
            id: 3,
            cityId: 1,
            date: "06/10/2022",
            time: "8:00 PM",
            venue: "Triple Dent Gum Fairgrounds",
            opener: 3
        },
        {
            id: 4,
            cityId: 4,
            date: "06/14/2022",
            time: "7:15 PM",
            venue: "Starlake Amphitheatre",
            opener: 2
        },
        {
            id: 5,
            cityId: 3,
            date: "06/18/2022",
            time: "8:00 PM",
            venue: "Deep Reed Commons",
            opener: 4
        },
    ],
    cities: [
        {
            id: 1,
            city: "Naji",
            country: "China"
        },
        {
            id: 2,
            city: "Central",
            country: "Hong Kong"
        },
        {
            id: 3,
            city: "Tacoma",
            country: "United States"
        },
        {
            id: 4,
            city: "Murici",
            country: "Brazil"
        },
        {
            id: 5,
            city: "Sidem",
            country: "Indonesia"
        }
    ],
    openers: [
        {
            id: 1,
            band: "Lucid Neck",
        },
        {
            id: 2,
            band: "The Fallen Son",
        },
        {
            id: 3,
            band: "Wally And The Pencils",
        },
        {
            id: 4,
            band: "The Long Biscuit Quartet",
        },
        {
            id: 5,
            band: "Nasty Detective",
        },
    ]
};

// write getters for tourDates, cities, and openers
export const getTourDates = () => {
    return database.tourDates.map(tourDate => ({ ...tourDate }))
}
export const getCities = () => {
    return database.cities.map(city => ({ ...city }))
}
export const getOpeners = () => {
    return database.openers.map(opener => ({ ...opener }))
}