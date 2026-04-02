import {createContext, use, useContext} from "react";


 export const Themecontext = createContext({
    themeMode: 'light',
    darkTheme:()=>{},
    lightTheme:()=>{} 
 })

 export const ThemeProvider = Themecontext.Provider

 export default function useTheme(){
    return useContext(Themecontext)
 }

 /*

 // this is safer version of useTheme 
 
 export default function useTheme(){
   const context = useContext(Themecontext);
   if(!context){
    throw new Error('useTheme must be used within a ThemeProvider')
   } 

   return context
 }

 */