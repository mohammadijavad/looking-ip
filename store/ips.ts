import {create} from "zustand/index";

export interface Ip {
    ip: string
    location: Location
    domains: string[]
    as: As
    isp: string
}

export interface Location {
    country: string
    region: string
    city: string
    lat: number
    lng: number
    postalCode: string
    timezone: string
    geonameId: number
}

export interface As {
    asn: number
    name: string
    route: string
    domain: string
    type: string
}


interface StoreIps{
    ips:Ip[]
    setIpList:(ip:Ip[])=>{}
}



const fakeData=[
    {
        "ip": "8.8.8.8",
        "location": {
            "country": "US",
            "region": "California",
            "city": "Mountain View",
            "lat": 32.69922,
            "lng": -117.11281,
            "postalCode": "",
            "timezone": "-07:00",
            "geonameId": 5375481
        },
        "domains": [
            "0-e.in",
            "001.publicvm.com",
            "00100tet.xyz",
            "0050500.xyz",
            "007515.com"
        ],
        "as": {
            "asn": 15169,
            "name": "GOOGLE",
            "route": "8.8.8.0/24",
            "domain": "https://about.google/intl/en/",
            "type": "Content"
        },
        "isp": "Google LLC"
    },
    {
        "ip": "8.8.8.8",
        "location": {
            "country": "US",
            "region": "California",
            "city": "Mountain View",
            "lat": 32.69922,
            "lng": -117.11281,
            "postalCode": "",
            "timezone": "-07:00",
            "geonameId": 5375481
        },
        "domains": [
            "0-e.in",
            "001.publicvm.com",
            "00100tet.xyz",
            "0050500.xyz",
            "007515.com"
        ],
        "as": {
            "asn": 15169,
            "name": "GOOGLE",
            "route": "8.8.8.0/24",
            "domain": "https://about.google/intl/en/",
            "type": "Content"
        },
        "isp": "Google LLC"
    },
    {
        "ip": "8.8.8.8",
        "location": {
            "country": "US",
            "region": "California",
            "city": "Mountain View",
            "lat": 32.69922,
            "lng": -117.11281,
            "postalCode": "",
            "timezone": "-07:00",
            "geonameId": 5375481
        },
        "domains": [
            "0-e.in",
            "001.publicvm.com",
            "00100tet.xyz",
            "0050500.xyz",
            "007515.com"
        ],
        "as": {
            "asn": 15169,
            "name": "GOOGLE",
            "route": "8.8.8.0/24",
            "domain": "https://about.google/intl/en/",
            "type": "Content"
        },
        "isp": "Google LLC"
    }
]
export const useStoreIps = create<StoreIps>((set) => ({
    ips:[],
    setIpList:(ips)=>set({ips}),
}));
