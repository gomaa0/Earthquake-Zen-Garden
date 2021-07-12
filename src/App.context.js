import React from 'react';
import AppData from './App.data.json';
import {generateHeaderPropsByData} from './shared/components/Header/Header.utils';

const headerProps = generateHeaderPropsByData(AppData);
export const AppContext = React.createContext({});

const AppProvider = ({children}) => {
  console.log(headerProps);
  return (
    <AppContext.Provider
      value={{
        AppData,
        headerProps,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
