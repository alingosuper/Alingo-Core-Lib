export const fetchLocations = async (category) => {
  // یہاں پروفیشنل API کالز یا GeoJSON فیچنگ ہوگی
  console.log(`Fetching data for: ${category}`);
  return { status: 'success', data: [] };
};
import { master_shield } from '../../Alingo-core-security/src/security_engine.js';

export const filterLocations = (allData, query) => {
    return allData.features.filter(item => 
        item.properties.name.includes(query) || 
        item.properties.category === query
    );
};
