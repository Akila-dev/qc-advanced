import { create } from 'zustand';

export const useRegisterStore = create((set) => ({
	pendingData: {},
	storePendingData: (data) => set({ pendingData: data }),
	clearPendingData: () => set({ pendingData: {} }),
}));
