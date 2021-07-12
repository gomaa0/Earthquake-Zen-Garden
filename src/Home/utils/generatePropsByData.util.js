export const generatePropsByData = appData => ({
  title: appData?.data?.metadata?.title,
  earthquakes: Object.values(appData?.data?.features ?? {}).map(feature => ({
    magnitude: feature?.properties?.mag,
    title: feature?.properties?.place,
    time: feature?.properties?.time,
    id: feature?.id,
  })),
});
