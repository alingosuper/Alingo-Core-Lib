export const getMapData = async (type) => {
  // یہ فنکشن مرکزی Map-Core سے ڈیٹا لا کر دے گا
  const response = await fetch(`/api/locations/${type}`);
  return response.json();
};
