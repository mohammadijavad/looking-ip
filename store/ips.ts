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
export const useStoreIps = create<StoreIps>((set) => ({
    ips:[],
    setIpList:(ips)=>set({ips}),
}));
