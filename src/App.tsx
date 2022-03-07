import { ThemeProvider } from 'styled-components';


// Styles : Of the demonstration page
import DemoStyle from './styles/DemoStyle';

// Styles : Of the form itself
import FormStyle from './forms/styles/Style';

// Default Themes
import defaultTheme from './styles/themes/Theme_1';

// The demonstration page component
import DemoPage from './demo/DemoPage';
import { createContext, useState } from 'react';


// 1 - Define the properties of MyContext
type AppContextProps = {
  theme: {};
  setTheme: any;
}

// Context used to set the application theme
export const AppContext = createContext({} as AppContextProps);


function App()
{
  // The theme in use
  const [ theme, setTheme ] = useState(defaultTheme);


  return (
    <AppContext.Provider value={{ theme, setTheme }}>

      <ThemeProvider theme={theme}>
        <DemoStyle />
        <FormStyle />

        <DemoPage />
      </ThemeProvider>

    </AppContext.Provider>
  );
}

export default App;