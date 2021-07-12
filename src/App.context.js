import React from 'react';
import AppData from './App.data.json';
import {appFeaturesById, featurePropertiesById} from './App.utils';
import {generatePropsByData as generateHeaderPropsByData} from './shared/components/Header/Header.utils';
import {generatePropsByData as generateHomePropsByData} from '/Home/utils/generatePropsByData.util';

const headerProps = generateHeaderPropsByData(AppData);
const homeProps = generateHomePropsByData(AppData);
const getFeaturePropertiesById = featurePropertiesById(appFeaturesById);

export const AppContext = React.createContext({});

const AppProvider = ({children}) => {
  return (
    <AppContext.Provider
      value={{
        AppData,
        headerProps,
        homeProps,
        getFeaturePropertiesById,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
