import React from 'react';
import AppData from './App.data.json';
import {generatePropsByData as generateHeaderPropsByData} from './shared/components/Header/Header.utils';
import {generatePropsByData as generateHomePropsByData} from '/Home/utils/generatePropsByData.util';

const headerProps = generateHeaderPropsByData(AppData);
const homeProps = generateHomePropsByData(AppData);

export const AppContext = React.createContext({});

const AppProvider = ({children}) => {
  return (
    <AppContext.Provider
      value={{
        AppData,
        headerProps,
        homeProps,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
