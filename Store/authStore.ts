import { create } from 'zustand'

// Define types for state & actions
interface AuthState {
    isInitializing: boolean,
    setIsInitializing: (isInitializing: boolean) => void
    accessToken: string,
    addAccessToken: (token: string) => void,
    user: { id: number, name: string, email: string, role: string },
    setUser: (user: { id: number, name: string, email: string, role: string }) => void

}

// Create store using the curried form of `create`
export const useAuthStore = create<AuthState>()((set) => ({
    isInitializing: true,
    setIsInitializing: (isInitializing: boolean) => set({ isInitializing }),
    accessToken: '',
    addAccessToken: (token: string) => set({ accessToken: token }),
    user: { id: 0, name: '', email: '', role: '' },
    setUser: (user: { id: number, name: string, email: string, role: string }) => set({ user }),

}))