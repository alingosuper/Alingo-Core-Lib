export const performSearch = async (query) => {
    // یہ فنکشن مقامی JSON یا Firebase سے سرچ کرے گا
    console.log("Searching for:", query);
    
    // مثال کے طور پر نقشے کا ڈیٹا فیچ کرنا
    const response = await fetch('/map-core/src/data/locations.json');
    const data = await response.json();
    
    return data.features.filter(item => 
        item.properties.name.toLowerCase().includes(query.toLowerCase())
    );
};
