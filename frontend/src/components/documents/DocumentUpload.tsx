'use client';

import { useState } from 'react';

export default function DocumentUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setIsUploading(true);
    // Implementation for file upload
    setIsUploading(false);
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Upload Document</h2>

      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
        <input
          type="file"
          onChange={handleFileChange}
          className="hidden"
          id="file-upload"
        />
        <label htmlFor="file-upload" className="cursor-pointer">
          <div className="flex flex-col items-center justify-center">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.58 5 5 0 119.76 0A4 4 0 017 16z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <p className="mt-2 text-sm text-gray-600">
              <span className="font-medium text-indigo-600">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-500">
              PDF, DOC, DOCX, TXT (Max 10MB)
            </p>
          </div>
        </label>
      </div>

      {file && (
        <div className="mt-4">
          <p className="text-sm text-gray-600">Selected file: {file.name}</p>
          <button
            onClick={handleUpload}
            disabled={isUploading}
            className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 disabled:opacity-50"
          >
            {isUploading ? 'Uploading...' : 'Upload Document'}
          </button>
        </div>
      )}
    </div>
  );
}