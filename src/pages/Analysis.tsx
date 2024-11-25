import React, { useState } from 'react';
import { Upload, FileImage, AlertCircle, Download } from 'lucide-react';
import axios from 'axios';

const Analysis = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [analysis, setAnalysis] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleFileSelect = (file: File) => {
    if (file.type.startsWith('image/')) {
      setSelectedFile(file);
      setLoading(true);
      setError(null);
      
      const formData = new FormData();
      formData.append('file', file);

      axios.post('http://localhost:5000/analyze', formData)
        .then(response => {
          setAnalysis(response.data);
          setLoading(false);
        })
        .catch(err => {
          setError('Failed to analyze image. Please try again.');
          setLoading(false);
        });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Pneumonia Analysis</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Upload X-Ray Image</h2>
            
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-lg p-8 text-center ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
            >
              <FileImage className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <p className="text-gray-600 mb-2">Drag and drop your X-ray image here</p>
              <p className="text-sm text-gray-500 mb-4">or</p>
              <label className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer">
                <Upload className="h-5 w-5 mr-2" />
                Browse Files
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => e.target.files && handleFileSelect(e.target.files[0])}
                />
              </label>
            </div>

            {selectedFile && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="font-medium">Selected File:</p>
                <p className="text-sm text-gray-600">{selectedFile.name}</p>
              </div>
            )}
          </div>

          {/* Analysis Results */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Analysis Results</h2>
            
            {loading && (
              <div className="h-64 flex items-center justify-center">
                <span className="text-gray-500">Analyzing...</span>
              </div>
            )}

            {error && (
              <div className="h-64 flex items-center justify-center">
                <AlertCircle className="h-8 w-8 text-red-500 mr-2" />
                <span className="text-red-500">{error}</span>
              </div>
            )}

            {!analysis && !loading && !error && (
              <div className="h-64 flex items-center justify-center">
                <AlertCircle className="h-8 w-8 text-gray-400 mr-2" />
                <span className="text-gray-500">Upload an image to see analysis results</span>
              </div>
            )}

            {analysis && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">Prediction</p>
                    <p className="text-xl font-semibold text-red-600">{analysis.diagnosis}</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">Confidence</p>
                    <p className="text-xl font-semibold">{analysis.confidence}</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">Biological Causes</p>
                    <p className="text-xl font-semibold">{analysis.structured_report.biological_causes}</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">Pathological Analysis</p>
                    <p className="text-xl font-semibold">{analysis.structured_report.pathological_analysis}</p>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-medium mb-4">Detailed Report</h3>
                  <p className="text-gray-600 mb-4">{analysis.blip_report}</p>
                  <button className="flex items-center text-blue-600 hover:text-blue-700">
                    <Download className="h-5 w-5 mr-2" />
                    Download Full Report
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
