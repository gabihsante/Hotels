export interface Places {
    hotels: Hotel[],
    placeId: number
}

export interface Hotel {
    id: number,
    favorite: boolean,
    name: string,
    description: string,
    stars: string,
    thumb: string,
    amenities: Amenities[],
    hasBreakFast: boolean,
    hasRefundableRoom: boolean,
    hasAgreement: boolean,
    nonRefundable: boolean | null,
    address: {
        street: string,
        number: string,
        district: string | null,
        city: string,
        state: string,
        country: string,
        zipCode: string | null,
        fullAddress: string
    },
    images: string[],
    deals: string | null,
    roomsQuantity: number,
    price: number
}

export interface Amenities {
    key: any,
    label: string,
}

export interface Place {
    name: string,
    state: {
        name: string,
        shortname: string
    },
    placeId: number,
}
