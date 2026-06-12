#!/bin/bash
SERVICES=("Agriculture" "Bank" "Food" "Services" "Shipment" "Shopping" "Tour-and-Travel")

echo "Linking Map-Core to services..."

for SERVICE in "${SERVICES[@]}"; do
    if [ -d "$SERVICE/src" ]; then
        echo "Linking $SERVICE..."
        # میپ کا symlink بنائیں
        ln -sf ~/Map "$SERVICE/src/map-core"
        
        # eventBus کو اپ ڈیٹ کرنے کے لیے سرچ کنیکٹر کو امپورٹ کرنا (نمونہ)
        echo "import { connectSearchToMap } from './map-core/src/SearchConnector.js';" >> "$SERVICE/src/main.js"
    fi
done
echo "All services linked successfully!"
