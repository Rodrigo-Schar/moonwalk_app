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
    secondaryColor: "#004696",
    backgroundColor: "#f1f2f7",
    primaryColorText: "#7d7f86",
    secondaryColorText: "#004696",
    placeholderColor: "#fff",
    loadingColor: '#fff',
    loadingBackground: "#161B20"
  };

  export const darkTheme: ThemeType = {
    ...theme,
    primaryButtonText: '#fff',
    secondaryButtonText: '#09101D',
    secondaryColor: "#fff",
    backgroundColor: "#f1f2f7",
    primaryColorText: "#7d7f86",
    secondaryColorText: "#666",
    placeholderColor: "#fff",
    loadingColor: '#161B20',
    loadingBackground: "#161B20"
  };