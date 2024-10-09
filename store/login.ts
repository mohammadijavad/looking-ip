import { create } from 'zustand'
interface StoreState {
  step: number;
  phoneNumber: string;
  setStep: (step: number) => void;
  setPhoneNumber: (phone: string) => void;
}

export const useStore = create<StoreState>((set) => ({
  step: 1,
  phoneNumber: "",
  setStep: (step) => set({ step }),
  setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
}));
