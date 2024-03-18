import { create } from "zustand";

export interface UserState {
    privateKey: string
}

export const useUserStore = create<UserState>(() => ({
    privateKey: "",
}))

export const setPrivateKey = (privateKey: string) => useUserStore.setState({privateKey});
