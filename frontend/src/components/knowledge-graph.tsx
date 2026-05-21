'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ForceGraph2D from 'react-force-graph2d';
import { Search, Plus, Eye, Download } from 'lucide-react';

interface Node {
  id: string;
  name: string;
  type: 'entity' | 'concept' | 'document' | 'relationship';
  size: number;
}

interface Link {
  source: string;
  target: string;
  value: number;
}

export function KnowledgeGraph() {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [links, setLinks] = useState<Link[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading knowledge graph data
    const timer = setTimeout(() => {
      setNodes([
        { id: '1', name: 'Artificial Intelligence', type: 'concept', size: 30 },
        { id: '2', name: 'Machine Learning', type: 'concept', size: 25 },
        { id: '3', name: 'Deep Learning', type: 'concept', size: 20 },
        { id: '4', name: 'Neural Networks', type: 'concept', size: 15 },
        { id: '5', name: 'Natural Language Processing', type: 'concept', size: 22 },
        { id: '6', name: 'Computer Vision', type: 'concept', size: 20 },
        { id: '7', name: 'Research Paper', type: 'document', size: 12 },
        { id: '8', name: 'Technical Report', type: 'document', size: 10 },
        { id: '9', name: 'Dataset', type: 'entity', size: 18 },
        { id: '10', name: 'Algorithm', type: 'entity', size: 16 },
      ]);

      setLinks([
        { source: '1', target: '2', value: 5 },
        { source: '2', target: '3', value: 4 },
        { source: '3', target: '4', value: 3 },
        { source: '1', target: '5', value: 4 },
        { source: '1', target: '6', value: 3 },
        { source: '5', target: '7', value: 2 },
        { source: '6', target: '8', value: 2 },
        { source: '3', target: '9', value: 3 },
        { source: '2', target: '10', value: 3 },
        { source: '4', target: '10', value: 2 },
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
        <h2 className="text-2xl font-bold">Knowledge Graph</h2>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Node
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Knowledge Graph Visualization</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-96">
            <ForceGraph2D
              graphData={{ nodes, links }}
              nodeLabel="name"
              nodeVal="size"
              nodeColor={(node: Node) => {
                switch (node.type) {
                  case 'concept':
                    return '#3b82f6';
                  case 'document':
                    return '#10b981';
                  case 'entity':
                    return '#f59e0b';
                  case 'relationship':
                    return '#8b5cf6';
                  default:
                    return '#6b7280';
                }
              }}
              linkColor={() => '#9ca3af'}
              linkWidth={1}
              linkDirectionalArrowLength={6}
              linkDirectionalArrowRelPos={1}
              onNodeClick={(node: Node) => {
                console.log('Node clicked:', node);
              }}
              onNodeDragEnd={(node: Node) => {
                node.fx = node.x;
                node.fy = node.y;
              }}
            />
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Graph Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Nodes</span>
                <span className="font-mono">{nodes.length}</span>
              </div>
              <div className="flex justify-between">
                <span>Links</span>
                <span className="font-mono">{links.length}</span>
              </div>
              <div className="flex justify-between">
                <span>Concepts</span>
                <span className="font-mono">{nodes.filter(n => n.type === 'concept').length}</span>
              </div>
              <div className="flex justify-between">
                <span>Documents</span>
                <span className="font-mono">{nodes.filter(n => n.type === 'document').length}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-sm">Added new concept: Transformer Models</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm">Updated relationship between NLP and AI</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                <span className="text-sm">Processed 5 new documents</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Export Options</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Download className="w-4 h-4 mr-2" />
                Export as PNG
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Download className="w-4 h-4 mr-2" />
                Export as SVG
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Download className="w-4 h-4 mr-2" />
                Export as JSON
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}