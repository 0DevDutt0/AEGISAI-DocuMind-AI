'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, FileText, Download, Trash2, Search } from 'lucide-react';

interface Document {
  id: string;
  name: string;
  type: string;
  size: string;
  uploadedAt: string;
  status: 'processing' | 'completed' | 'failed';
}

export function DocumentManager() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading documents
    const timer = setTimeout(() => {
      setDocuments([
        {
          id: '1',
          name: 'Annual Report 2023.pdf',
          type: 'PDF',
          size: '2.4 MB',
          uploadedAt: '2023-12-15',
          status: 'completed',
        },
        {
          id: '2',
          name: 'Project Proposal.docx',
          type: 'DOCX',
          size: '1.1 MB',
          uploadedAt: '2023-12-14',
          status: 'completed',
        },
        {
          id: '3',
          name: 'Financial Data.xlsx',
          type: 'XLSX',
          size: '3.7 MB',
          uploadedAt: '2023-12-13',
          status: 'processing',
        },
        {
          id: '4',
          name: 'Research Notes.txt',
          type: 'TXT',
          size: '0.5 MB',
          uploadedAt: '2023-12-12',
          status: 'completed',
        },
      ]);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Document Manager</h2>
        <Button>
          <Upload className="w-4 h-4 mr-2" />
          Upload Document
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {documents.map((doc) => (
          <Card key={doc.id}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  {doc.name}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Type</span>
                  <span className="text-sm">{doc.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Size</span>
                  <span className="text-sm">{doc.size}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Uploaded</span>
                  <span className="text-sm">{doc.uploadedAt}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Status</span>
                  <span className="text-sm">
                    {doc.status === 'completed' && (
                      <span className="text-green-500">Completed</span>
                    )}
                    {doc.status === 'processing' && (
                      <span className="text-yellow-500">Processing</span>
                    )}
                    {doc.status === 'failed' && (
                      <span className="text-red-500">Failed</span>
                    )}
                  </span>
                </div>
              </div>
              <div className="flex justify-end space-x-2 mt-4">
                <Button variant="ghost" size="sm">
                  <Download className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Upload New Document</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <Upload className="w-12 h-12 mx-auto text-gray-400" />
            <p className="mt-4 text-lg font-medium">Drag and drop files here</p>
            <p className="text-gray-500">or</p>
            <Button className="mt-4">Browse Files</Button>
            <p className="mt-4 text-sm text-gray-500">
              Supported formats: PDF, DOCX, XLSX, TXT (Max 10MB)
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}