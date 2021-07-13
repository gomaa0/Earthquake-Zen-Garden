export const generatePropsByData = appData => ({
  title: appData?.site?.title,
  logoImage: appData?.site?.logoImage,
  name: appData?.profile?.firstName,
});
