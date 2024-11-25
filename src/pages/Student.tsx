// import React, { useState } from "react";
// import axios from "axios";

// const Student: React.FC = () => {
//   // State for file input
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);

//   // States for the results
//   const [diagnosis, setDiagnosis] = useState<string | null>(null);
//   const [confidence, setConfidence] = useState<string | null>(null);
//   const [explanation, setExplanation] = useState<string | null>(null);
//   const [generatedReport, setGeneratedReport] = useState<string | null>(null);

//   // State for loading and errors
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);

//   // Handle file selection
//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files && event.target.files[0]) {
//       setSelectedFile(event.target.files[0]);
//       setDiagnosis(null); // Reset previous results
//       setConfidence(null);
//       setExplanation(null);
//       setGeneratedReport(null);
//       setError(null);
//     }
//   };

//   // Handle form submission
//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     if (!selectedFile) {
//       setError("Please select a file to upload.");
//       return;
//     }

//     // Prepare the form data
//     const formData = new FormData();
//     formData.append("file", selectedFile);

//     try {
//       setIsLoading(true);
//       setError(null);

//       // Make POST request to Flask API
//       const response = await axios.post("http://127.0.0.1:5000/analyze", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       // Extract results from response
//       const { diagnosis, confidence, explanation, generated_report } = response.data;
//       setDiagnosis(diagnosis);
//       setConfidence(confidence);
//       setExplanation(explanation);
//       setGeneratedReport(generated_report);
//     } catch (err) {
//       console.error(err);
//       setError("An error occurred while processing the image. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
//       <h1 className="text-3xl font-bold mb-4">X-Ray Analysis</h1>
//       <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleFileChange}
//           className="block w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-700 file:text-white hover:file:bg-blue-800"
//         />
//         <button
//           type="submit"
//           disabled={!selectedFile || isLoading}
//           className={`w-full py-2 px-4 bg-blue-600 rounded-lg text-white font-semibold ${
//             isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
//           }`}
//         >
//           {isLoading ? "Analyzing..." : "Upload and Analyze"}
//         </button>
//       </form>

//       {error && <p className="text-red-500 mt-4">{error}</p>}

//       {/* Display results */}
//       {diagnosis && (
//         <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md w-full max-w-md">
//           <h2 className="text-xl font-bold mb-2">Analysis Results</h2>
//           <p>
//             <strong>Diagnosis:</strong> {diagnosis}
//           </p>
//           <p>
//             <strong>Confidence:</strong> {confidence}
//           </p>
//           <p>
//             <strong>Explanation:</strong> {explanation}
//           </p>
//           <p>
//             <strong>Generated Report:</strong> {generatedReport}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Student;


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from "react";
// import axios from "axios";

// const Student: React.FC = () => {
//   // State for file input
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);

//   // States for the results
//   const [diagnosis, setDiagnosis] = useState<string | null>(null);
//   const [confidence, setConfidence] = useState<string | null>(null);
//   const [explanation, setExplanation] = useState<string | null>(null);
//   const [generatedReport, setGeneratedReport] = useState<string | null>(null);

//   // State for loading and errors
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);

//   // Handle file selection
//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files && event.target.files[0]) {
//       setSelectedFile(event.target.files[0]);
//       // Reset previous results when a new file is uploaded
//       setDiagnosis(null);
//       setConfidence(null);
//       setExplanation(null);
//       setGeneratedReport(null);
//       setError(null);
//     }
//   };

//   // Handle form submission
//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     if (!selectedFile) {
//       setError("Please select a file to upload.");
//       return;
//     }

//     // Reset previous results and error before starting the new analysis
//     setDiagnosis(null);
//     setConfidence(null);
//     setExplanation(null);
//     setGeneratedReport(null);
//     setError(null);

//     // Prepare the form data
//     const formData = new FormData();
//     formData.append("file", selectedFile);

//     try {
//       setIsLoading(true);

//       // Make POST request to Flask API
//       const response = await axios.post("http://127.0.0.1:5000/analyze", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       // Extract results from response
//       const { diagnosis, confidence, explanation, generated_report } = response.data;
//       setDiagnosis(diagnosis);
//       setConfidence(confidence);
//       setExplanation(explanation);
//       setGeneratedReport(generated_report);
//     } catch (err) {
//       console.error(err);
//       setError("An error occurred while processing the image. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
//       <h1 className="text-3xl font-bold mb-4">X-Ray Analysis</h1>
//       <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleFileChange}
//           className="block w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-700 file:text-white hover:file:bg-blue-800"
//         />
//         <button
//           type="submit"
//           disabled={!selectedFile || isLoading}
//           className={`w-full py-2 px-4 bg-blue-600 rounded-lg text-white font-semibold ${
//             isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
//           }`}
//         >
//           {isLoading ? "Analyzing..." : "Upload and Analyze"}
//         </button>
//       </form>

//       {error && <p className="text-red-500 mt-4">{error}</p>}

//       {/* Display results */}
//       {diagnosis && (
//         <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md w-full max-w-md">
//           <h2 className="text-xl font-bold mb-2">Analysis Results</h2>
//           <p>
//             <strong>Diagnosis:</strong> {diagnosis}
//           </p>
//           <p>
//             <strong>Confidence:</strong> {confidence}
//           </p>
//           <p>
//             <strong>Explanation:</strong> {explanation}
//           </p>
//           <p>
//             <strong>Generated Report:</strong> {generatedReport}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Student;



import React, { useState } from "react";
import axios from "axios";

const Student: React.FC = () => {
  // State for file input
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // States for the results
  const [diagnosis, setDiagnosis] = useState<string | null>(null);
  const [confidence, setConfidence] = useState<string | null>(null);
  const [blipReport, setBlipReport] = useState<string | null>(null);

  // States for structured report parts
  const [biologicalCauses, setBiologicalCauses] = useState<string | null>(null);
  const [pathologicalAnalysis, setPathologicalAnalysis] = useState<string | null>(null);
  const [environmentalFactors, setEnvironmentalFactors] = useState<string | null>(null);

  // State for chat-based interaction
  const [chatQuery, setChatQuery] = useState<string>("");
  const [chatResponse, setChatResponse] = useState<string | null>(null);

  // State for loading and errors
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
      // Reset previous results when a new file is uploaded
      setDiagnosis(null);
      setConfidence(null);
      setBlipReport(null);
      setBiologicalCauses(null);
      setPathologicalAnalysis(null);
      setEnvironmentalFactors(null);
      setError(null);
    }
  };

  // Handle form submission for analysis
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedFile) {
      setError("Please select a file to upload.");
      return;
    }

    // Reset previous results and error before starting the new analysis
    setDiagnosis(null);
    setConfidence(null);
    setBlipReport(null);
    setBiologicalCauses(null);
    setPathologicalAnalysis(null);
    setEnvironmentalFactors(null);
    setError(null);

    // Prepare the form data
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      setIsLoading(true);

      // Make POST request to Flask API
      const response = await axios.post("http://127.0.0.1:5000/analyze", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Extract results from response
      const { diagnosis, confidence, blip_report, structured_report } = response.data;

      setDiagnosis(diagnosis);
      setConfidence(confidence);
      setBlipReport(blip_report);

      // Set structured report parts
      setBiologicalCauses(structured_report.biological_causes);
      setPathologicalAnalysis(structured_report.pathological_analysis);
      setEnvironmentalFactors(structured_report.environmental_factors);
    } catch (err) {
      console.error(err);
      setError("An error occurred while processing the image. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle chat submission for question answering
  const handleChatSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!chatQuery.trim()) {
      setError("Please enter a question to ask.");
      return;
    }

    try {
      setIsLoading(true);

      // Make POST request to the backend for chat responses
      const response = await axios.post("http://127.0.0.1:5000/chat", {
        question: chatQuery,
      });

      setChatResponse(response.data.answer);
    } catch (err) {
      console.error(err);
      setError("An error occurred while fetching the answer. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4">X-Ray Analysis and Medical Assistance</h1>

      <form onSubmit={handleSubmit} className="w-[70%] max-w-full space-y-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-700 file:text-white hover:file:bg-blue-800"
        />
        <button
          type="submit"
          disabled={!selectedFile || isLoading}
          className={`w-full py-2 px-4 bg-blue-600 rounded-lg text-white font-semibold ${
            isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
          }`}
        >
          {isLoading ? "Analyzing..." : "Upload and Analyze"}
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {/* Display results in separate boxes */}
      {diagnosis && (
        <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md w-[70%] max-w-full">
          <h2 className="text-xl font-bold mb-2">Diagnosis</h2>
          <p>{diagnosis}</p>
        </div>
      )}

      {confidence && (
        <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md w-[70%] max-w-full">
          <h2 className="text-xl font-bold mb-2">Confidence</h2>
          <p>{confidence}</p>
        </div>
      )}

      {blipReport && (
        <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md w-[70%] max-w-full">
          <h2 className="text-xl font-bold mb-2">BLIP Report</h2>
          <p>{blipReport}</p>
        </div>
      )}

      {/* Structured Report Parts */}
      {(biologicalCauses || pathologicalAnalysis || environmentalFactors) && (
        <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md w-[70%] max-w-full">
          <h2 className="text-xl font-bold mb-2">Structured Report</h2>
          {biologicalCauses && (
            <div className="mb-4">
              <h3 className="font-semibold">Biological Causes:</h3>
              <p>{biologicalCauses}</p>
            </div>
          )}
          {pathologicalAnalysis && (
            <div className="mb-4">
              <h3 className="font-semibold">Pathological Analysis:</h3>
              <p>{pathologicalAnalysis}</p>
            </div>
          )}
          {environmentalFactors && (
            <div>
              <h3 className="font-semibold">Environmental Factors:</h3>
              <p>{environmentalFactors}</p>
            </div>
          )}
        </div>
      )}

      {/* Chat-based interaction */}
      {diagnosis && (
        <div className="mt-8 w-[70%] max-w-full">
          <h2 className="text-xl font-bold mb-4">Ask a Question</h2>
          <form onSubmit={handleChatSubmit} className="space-y-4">
            <input
              type="text"
              value={chatQuery}
              onChange={(e) => setChatQuery(e.target.value)}
              placeholder="Ask about the diagnosis or report..."
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none"
            />
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-2 px-4 bg-green-600 rounded-lg text-white font-semibold ${
                isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-green-700"
              }`}
            >
              {isLoading ? "Fetching Answer..." : "Ask"}
            </button>
          </form>
          {chatResponse && (
            <div className="mt-4 bg-gray-800 p-4 rounded-lg shadow-md">
              <p>
                <strong>Answer:</strong> {chatResponse}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Student;
