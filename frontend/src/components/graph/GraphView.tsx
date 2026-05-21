'use client';

import { useState, useEffect } from 'react';

export default function GraphView() {
  const [entities, setEntities] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching entities
    setTimeout(() => {
      setEntities([
        { id: '1', name: 'Document Analysis', type: 'Process' },
        { id: '2', name: 'Entity Extraction', type: 'Process' },
        { id: '3', name: 'John Smith', type: 'Person' },
        { id: '4', name: 'Company XYZ', type: 'Organization' },
        { id: '5', name: '2023 Annual Report', type: 'Document' },
      ]);
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="bg-white shadow rounded-lg p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Knowledge Graph</h2>

      <div className="border rounded-lg p-4 h-96 overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {entities.map((entity) => (
            <div
              key={entity.id}
              className="border rounded-lg p-3 hover:shadow-md transition-shadow"
            >
              <div className="font-medium">{entity.name}</div>
              <div className="text-sm text-gray-500">{entity.type}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}