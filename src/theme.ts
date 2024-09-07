export const mediaQuery = {
    breakpoints: {
      mobile: 767,
      mobileVertical: 991,
    },
  } as const;
  
  export const lightTheme = {
    color: {
      primaryBackground: "#FBFBFE",
      primaryTextColor: "#6E7E91",
      secondaryTextColor: "#252525",
      secondaryBackground: "#FFFFFF",
      primaryBorder: "#D1D5DA",
      togglerBackground: "#E5E5E5",
      mainBlue: "#0366D6",
      hoverBorder: "#6D93BE",
      white: "#FFFFFF",
      shadow: "#090A33",
      visited: "#144620",
    },
  } as const;
  
  export const darkTheme = {
    color: {
      primaryBackground: "#252525",
      primaryTextColor: "#FFFFFF",
      secondaryTextColor: "#FFFFFF",
      secondaryBackground: "#363636",
      primaryBorder: "#D1D5DA",
      togglerBackground: "#363636",
      mainBlue: "#2188FF",
      hoverBorder: "#6D93BE",
      white: "#FFFFFF",
      shadow: "#090A33",
    },
  } as const;
  