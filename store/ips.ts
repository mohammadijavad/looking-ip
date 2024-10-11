import { create } from "zustand/index";
import {Ip} from "@/types";

interface StoreIps {
  ipList: Ip[];
  setIpList: (ip: Ip[]) => void;
}

export const useStoreIps = create<StoreIps>((set) => ({
  ipList: [],
  setIpList: (ipList) => set({ ipList }),
}));
