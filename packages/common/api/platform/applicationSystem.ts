import fetch from '../../fetch'
import url from './url'

export function getSystem(keywrods:any) {
    console.log(123456789); 
    return fetch.post(url.getSystem, keywrods)
}

export function setSystem(keywrods:any) {
    return fetch.post(url.setSystem, keywrods)
}

export function delSystem(keywrods:any) {
    return fetch.post(url.delSystem, keywrods)
}

export function getMenuS(keywrods:any) {
    return fetch.post(url.getMenus, keywrods)
}

export function getTreeMenus(keywrods:any) {
    return fetch.post(url.getTreeMenus, keywrods)
}

export function getDataBase(keywrods:any) {
    return fetch.post(url.getDataBase, keywrods)
}

