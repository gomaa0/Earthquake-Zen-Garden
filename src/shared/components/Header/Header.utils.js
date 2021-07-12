export const generateHeaderPropsByData = appData => ({
  title: appData?.site?.title,
  logoImage: appData?.site?.logoImage,
  name: appData?.profile?.firstName,
});
