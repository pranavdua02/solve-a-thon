import { useState, useRef } from "react";
import axios from "axios";

const SpeechProcessor = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const recognitionRef = useRef(null);
  const silenceTimerRef = useRef(null);

  // Start Recording
  const startRecording = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onstart = () => {
      setIsRecording(true);
      setTranscript("");
    };

    recognition.onresult = (event) => {
      const lastResult = event.results[event.results.length - 1][0].transcript;
      setTranscript(lastResult);
      resetSilenceTimer(recognition);
    };

    recognition.onspeechend = () => {
      stopRecording(recognition);
    };

    recognition.onerror = (event) => {
      console.error("Recognition error:", event.error);
      stopRecording(recognition);
    };

    recognitionRef.current = recognition;
    recognition.start();
    resetSilenceTimer(recognition);
  };

  // Stop Recording
  const stopRecording = (recognition) => {
    if (recognition) recognition.stop();
    setIsRecording(false);
    clearTimeout(silenceTimerRef.current);
    if (transcript) processText(transcript);
  };

  // Silence detection (3 sec)
  const resetSilenceTimer = (recognition) => {
    clearTimeout(silenceTimerRef.current);
    silenceTimerRef.current = setTimeout(() => {
      stopRecording(recognition);
    }, 3000);
  };

  // Process Text (send to API)
  const processText = async (text) => {
    try {
      const response = await axios.post("https://your-service.com/api", { text });
      if (response.data.reply) {
        speak(response.data.reply);
      }
    } catch (error) {
      console.error("Error processing text:", error);
    }
  };

  // Text-to-Speech (TTS)
  const speak = (text) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    synth.speak(utterance);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Voice Assistant</h1>
      <button
        className={`px-6 py-3 text-white rounded-full ${
          isRecording ? "bg-red-500" : "bg-blue-500"
        }`}
        onClick={() => (isRecording ? stopRecording(recognitionRef.current) : startRecording())}
      >
        {isRecording ? "Stop Recording" : "Start Recording"}
      </button>
      <p className="mt-4 text-lg">{transcript}</p>
    </div>
  );
};

export default SpeechProcessor;
