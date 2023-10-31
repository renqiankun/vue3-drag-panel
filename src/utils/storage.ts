let pannelKey = "pannel-json";

export const setPannel = (val: any) => {
  try {
    sessionStorage[pannelKey] = JSON.stringify(val);
  } catch (error) {}
};

export const getPannel = () => {
  let pannel = {};
  try {
    pannel = JSON.parse(sessionStorage[pannelKey] || "{}");
  } catch (error) {}
  return pannel;
};
