import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist({
    key: 'app-data', // configuration stay the same too
    storage: localStorage
});

export const compactSidebarState = atom({
    key: 'compactSidebar', // Unique state identifier
    default: false, // Default state value
    effects_UNSTABLE: [persistAtom]
});
