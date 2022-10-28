export type ThemeType = {
    primaryColor: string;
    secondaryColor: string;
    backgroundColor: string;
    primaryColorText: string;
    secondaryColorText: string;
    primaryButtonText: string;
    secondaryButtonText: string;
    smallPadding: number;
    largePadding: number;
    padding: number;
    border: number;
    margin: number;
    smallMargin: number;
    largeMargin: number;
    placeholderColor: string;
    loadingColor: string;
    loadingBackground: string;
    inputBackground: string;
    accentBackground: string;
    accent: string;
    menu: string;
  }

  const theme = {
    primaryColor: '#393d42',
    smallPadding: 2,
    largePadding: 8,
    padding: 5,
    border: 50,
    margin: 10,
    smallMargin: 5,
    largeMargin: 10,
  }

  export const lightTheme: ThemeType = {
    ...theme,
    primaryButtonText: '#fff',
    secondaryButtonText: '#004696',
    secondaryColor: "#fff",
    backgroundColor: "#f1f2f7",
    primaryColorText: "#000000",
    secondaryColorText: "#666",
    placeholderColor: "#7d7f86",
    loadingColor: '#fff',
    loadingBackground: "#161B20",
    inputBackground: "#dee1e7",
    accentBackground: "rgba(10, 132, 255, 0.1)",
    accent: "#0a84ff",
    menu: "#fff"
  };

  export const darkTheme: ThemeType = {
    ...theme,
    primaryButtonText: '#fff',
    secondaryButtonText: '#09101D',
    secondaryColor: "#1a1d1e",
    backgroundColor: "#000",
    primaryColorText: "#fff",
    secondaryColorText: "#999",
    placeholderColor: "#fff", //666
    loadingColor: '#161B20',
    loadingBackground: "#161B20",
    inputBackground: "#1e2022",
    accentBackground: "rgba(10, 132, 255, 0.1)",
    accent: "#0a84ff",
    menu: "#000000"
  };