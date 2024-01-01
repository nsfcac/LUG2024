import { create } from 'zustand';

const useGeneralStore = create((set) => ({
    navigationToggle: false,
    toggleNavigationToggle: () => set((state) => ({ navigationToggle: !state.navigationToggle })),
    setNavigationToggle: (val=true) => set(() => ({ navigationToggle: val })),
}));

export default useGeneralStore;