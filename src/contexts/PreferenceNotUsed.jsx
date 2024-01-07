// import { createContext, useContext, useState } from 'react';

// const PreferenceContext = React.createContext();

// const PreferenceProvider = ({children}) => {
//     //start preference of theme with light
//     const [ preferences, setPreferences ] = useState({theme:'light'})

//     //page mount, initial preference is light
//     useEffect(() => {
//         const savedPreferences = localStorage.getItem('preferences')
//         const initialPreference = savedPreferences ? JSON.parse(savedPreferences) : { theme: 'light '}  
//         setPreferences(initialPreference)
//     }, [])

//     //add to local storage
//     const updatePreferences = (newPreference) => {
//         setPreferences(newPreference)
//         localStorage.setItem('preferences', JSON.stringify(newPreference))
//     }

//     return (
//         <PreferenceContext.Provider value={{preferences, updatePreferences}}>
//             {children}
//         </PreferenceContext.Provider>
//     )
// }   

// export { PreferenceProvider, PreferenceContext };


