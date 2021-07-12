import get from 'lodash/get';
import keyBy from 'lodash/keyBy';
import AppData from './App.data.json';

export const appFeaturesById = keyBy(get(AppData, ['data', 'features']), 'id');

export const featurePropertiesById = featuresById => id =>
  featuresById[id]?.properties;
