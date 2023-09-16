import React, { useState } from 'react'

export function useLocalStorage(key, initialValue){
    const [value, setValue] = useState(() => {
        const localStorageValue = window.localStorage.getItem(key)
        if (localStorageValue){
            return JSON.parse(localStorageValue)
        } else {
            window.localStorage.setItem(key, JSON.stringify(initialValue))
            return initialValue
        }
    })

    return [value, setValue]
}

export default {
    useLocalStorage
}