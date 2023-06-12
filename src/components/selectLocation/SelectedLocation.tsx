import React, { useState } from 'react';
// import LocationCR1Data from '../../JSON/Location.json';

export interface CR1Placement {
  Id: number;
  name: string;
}

export interface UpdateCR1 {
  setSelectedLocation: (update:CR1Placement) => void
}



const SelectedLocation = ({data, update}:{data:CR1Placement[], update: UpdateCR1}) => {
  const [selectedLocation, setSelectedLocation] = useState<CR1Placement | null>(null);

  const handleLocationSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(event.target.value);
    const location = data.find((location) => location.Id === selectedId);
    setSelectedLocation(location || null);
  };
  

  return (
    <div>
      <h1>Sélection d'un emplacement</h1>
      <select value={selectedLocation?.Id || ''} onChange={handleLocationSelection}>
        <option value="">Sélectionnez un emplacement</option>
        {data.map((location: CR1Placement) => (
          <option key={location.Id} value={location.Id}>
            {location.name}
          </option>
        ))}
      </select>
      {selectedLocation && (
        <div>
          <h2>Emplacement sélectionné :</h2>
          
        </div>
      )}
    </div>
  );
};

export default SelectedLocation;
