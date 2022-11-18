import { atom } from 'recoil';

export const NavExpandedState = atom({
    key: 'navsizestate',
    default: true
})
export const ActiveNavLink = atom({
    key: 'activenavlink',
    default: window.location.pathname,
})
export const logedin = atom({
    key: 'islogedin',
    default: false,
})
export const openConfirmationMessage = atom({
    key: 'openconfirmationmessage',
    default: false,
})
export const confirmationTitle = atom({
    key: 'confirmationTitle',
    default: '',
})
export const confirmationMessage = atom({
    key: 'confirmationMessage',
    default: '',
})
export const confirmationCancel = atom({
    key: 'confirmationCancel',
    default: async () => {},
})
export const confirmationConfirm = atom({
    key: 'confirmationConfirm',
    default: async () => {},
})
export const thememode = atom({
    key: 'thememode',
    default: 'light',
})