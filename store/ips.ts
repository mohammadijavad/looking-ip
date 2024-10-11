import { create } from "zustand/index";
import {Ip} from "@/types";

interface StoreIps {
  ips: Ip[];
  setIpList: (ip: Ip[]) => void;
}

export const useStoreIps = create<StoreIps>((set) => ({
  ips: [],
  setIpList: (ips) => set({ ips }),
}));
