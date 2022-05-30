// export default function useTheme() {
//   const [theme, setTheme] = useState<"light" | "dark">(
//     typeof window !== "undefined" ? localStorage.theme : "light"
//   );
//   const colorTheme = theme === "dark" ? "light" : "dark";

//   const changeTheme = (theme: any) => {
//     setTheme(theme)
//   }

//   useEffect(() => {
//     if(typeof window !== 'undefined') {
//         console.log("changing")
//         const root = window.document.documentElement;
//         root.classList.remove(colorTheme);
//         root.classList.add(theme);
    
//         // Save theme to Local Storage
//         localStorage.setItem("theme", theme);
//     } else {console.log('undefined')}
//   }, [theme, colorTheme]);

//   return {colorTheme, changeTheme};
// }