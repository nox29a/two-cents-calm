"use client";
import { Mic, ArrowRight, Square, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { Header } from "@/components/Header";

export default function CoachingForm() {
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [goals, setGoals] = useState<string[]>([]);
  const [notes, setNotes] = useState("");
  const [audioError, setAudioError] = useState(""); // Stan do przechowywania błędu audio
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [customGoal, setCustomGoal] = useState('');
  const chunks = useRef<Blob[]>([]);
  const [showAudioInfo, setShowAudioInfo] = useState(false); // Stan do pokazywania informacji o audio

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      chunks.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.current.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunks.current, { type: "audio/webm" });
        const url = URL.createObjectURL(blob);
        setAudioURL(url);
        setAudioError(""); // Wyczyść błąd po udanym nagraniu
      };

      mediaRecorderRef.current.start();
      setRecording(true);
    } catch (err) {
      console.error("Error accessing microphone:", err);
      setAudioError("Nie udało się uzyskać dostępu do mikrofonu");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      mediaRecorderRef.current.stop();
      setRecording(false);
    }
  };

  const handleGoalChange = (goal) => {
    if (goals.includes(goal)) {
      setGoals(goals.filter(g => g !== goal));
    } else if (goals.length < 3) {
      setGoals([...goals, goal]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Sprawdź czy audio zostało nagrane
    if (chunks.current.length === 0) {
      setAudioError("Nagranie audio jest wymagane do wysłania formularza");
      // Przewiń do sekcji nagrywania
      document.getElementById("recording-section")?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("notes", notes);
    formData.append("goals", JSON.stringify(goals));

    if (chunks.current.length > 0) {
      const blob = new Blob(chunks.current, { type: "audio/mp3" });
      formData.append("file", blob, "recording.mp3");
    }

    try {
      await fetch("https://nox29a.app.n8n.cloud/webhook/coaching-form", {
        method: "POST",
        body: formData,
      });
      alert("Formularz wysłany ✅");
    } catch (err) {
      console.error("Błąd wysyłki:", err);
      alert("Nie udało się wysłać formularza ❌");
    }
  };

  return (
    <>
      <Header />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-6 p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-large w-full max-w-lg mx-auto border border-gray-100 dark:border-gray-800"
      >
        {/* Dane kontaktowe */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <input
            type="text"
            placeholder="Imię"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-4 border border-gray-200 dark:border-gray-700 rounded-xl w-full focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 bg-white dark:bg-gray-800"
            required
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-4 border border-gray-200 dark:border-gray-700 rounded-xl w-full focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 bg-white dark:bg-gray-800"
            required
          />
        </motion.div>

        {/* Cele - Grid z checkboxami */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="space-y-4"
        >
          <p className="font-medium text-lg">Co chciałbyś poprawić? (wybierz max 3)</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Samotność */}
            <label className="flex items-center space-x-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
              <input
                type="checkbox"
                checked={goals.includes("samotność")}
                onChange={() => handleGoalChange("samotność")}
                className="h-5 w-5 text-primary focus:ring-primary/30 rounded-lg"
              />
              <span>Samotność</span>
            </label>
            
            {/* Smutek */}
            <label className="flex items-center space-x-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
              <input
                type="checkbox"
                checked={goals.includes("smutek")}
                onChange={() => handleGoalChange("smutek")}
                className="h-5 w-5 text-primary focus:ring-primary/30 rounded-lg"
              />
              <span>Smutek</span>
            </label>
            
            {/* Lęk */}
            <label className="flex items-center space-x-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
              <input
                type="checkbox"
                checked={goals.includes("lęk")}
                onChange={() => handleGoalChange("lęk")}
                className="h-5 w-5 text-primary focus:ring-primary/30 rounded-lg"
              />
              <span>Lęk i niepokój</span>
            </label>
            
            {/* Motywacja */}
            <label className="flex items-center space-x-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
              <input
                type="checkbox"
                checked={goals.includes("motywacja")}
                onChange={() => handleGoalChange("motywacja")}
                className="h-5 w-5 text-primary focus:ring-primary/30 rounded-lg"
              />
              <span>Brak motywacji</span>
            </label>
            
            {/* Relacje */}
            <label className="flex items-center space-x-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
              <input
                type="checkbox"
                checked={goals.includes("relacje")}
                onChange={() => handleGoalChange("relacje")}
                className="h-5 w-5 text-primary focus:ring-primary/30 rounded-lg"
              />
              <span>Trudności w relacjach</span>
            </label>
            
            {/* Sen */}
            <label className="flex items-center space-x-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
              <input
                type="checkbox"
                checked={goals.includes("sen")}
                onChange={() => handleGoalChange("sen")}
                className="h-5 w-5 text-primary focus:ring-primary/30 rounded-lg"
              />
              <span>Problemy ze snem</span>
            </label>
            
            {/* Stres */}
            <label className="flex items-center space-x-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
              <input
                type="checkbox"
                checked={goals.includes("stres")}
                onChange={() => handleGoalChange("stres")}
                className="h-5 w-5 text-primary focus:ring-primary/30 rounded-lg"
              />
              <span>Przewlekły stres</span>
            </label>
            
            {/* Pewność siebie */}
            <label className="flex items-center space-x-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
              <input
                type="checkbox"
                checked={goals.includes("pewność")}
                onChange={() => handleGoalChange("pewność")}
                className="h-5 w-5 text-primary focus:ring-primary/30 rounded-lg"
              />
              <span>Niska pewność siebie</span>
            </label>
          </div>
          
          {/* Własny cel */}
          <div className="pt-2">
            <input
              type="text"
              placeholder="Inny problem (wpisz własny)"
              value={customGoal}
              onChange={(e) => setCustomGoal(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && customGoal.trim() !== '') {
                  e.preventDefault();
                  handleGoalChange(customGoal.trim());
                  setCustomGoal('');
                }
              }}
              className="p-4 border border-gray-200 dark:border-gray-700 rounded-xl w-full focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 bg-white dark:bg-gray-800"
            />
            <p className="text-sm text-muted-foreground mt-1"></p>
            
            {/* Wyświetlanie dodanych własnych celów */}
            {goals.filter(goal => ![
              "samotność", "praca", "smutek", "lęk", "motywacja", 
              "relacje", "sen", "stres", "pewność"
            ].includes(goal)).map((customGoal, index) => (
              <div key={index} className="flex items-center justify-between mt-2 p-2 bg-primary/10 rounded-lg">
                <span>{customGoal}</span>
                <button 
                  type="button" 
                  onClick={() => handleGoalChange(customGoal)}
                  className="text-red-500 hover:text-red-700"
                >
                  {/* Usuń */}
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Nagrywanie audio */}
        <motion.div 
          id="recording-section"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="space-y-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800/50"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <p className="font-medium text-lg text-blue-700 dark:text-blue-300">Nagraj swoją wiadomość:</p>
              <button 
                type="button" 
                onClick={() => setShowAudioInfo(!showAudioInfo)}
                className="text-blue-500 hover:text-blue-700 px-2"
              >
                <Info size={18} />
              </button>
            </div>
            <div>
              {!recording ? (
                <button
                  type="button"
                  onClick={startRecording}
                  className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-medium hover:shadow-large hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
                >
                  <Mic className="h-5 w-5" />
                  Start
                </button>
              ) : (
                <button
                  type="button"
                  onClick={stopRecording}
                  className="px-6 py-3 bg-red-600 text-white rounded-xl shadow-medium hover:shadow-large hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
                >
                  <Square className="h-5 w-5" />
                  Stop
                </button>
              )}
            </div>
          </div>

          <AnimatePresence>
            {showAudioInfo && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="mt-2 p-3 bg-blue-100 dark:bg-blue-800/30 rounded-lg text-sm text-blue-700 dark:text-blue-300">
                  <p>Twoja wiadomość głosowa pomoże nam lepiej zrozumieć Twoją sytuację i dostosować pomoc do Twoich potrzeb.</p>
                  <p className="mt-1 font-medium">Nagranie jest wymagane do przesłania formularza.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {audioError && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg border border-red-200 dark:border-red-800/50"
              >
                <p className="text-red-700 dark:text-red-300 font-medium">{audioError}</p>
              </motion.div>
            )}
          </AnimatePresence>

          {audioURL && (
            <div className="mt-4 w-full">
              <p className="text-green-700 dark:text-green-300 font-medium mb-2">Nagranie zostało pomyślnie dodane:</p>
              <audio controls src={audioURL} className="w-full rounded-xl" />
              <a
                href={audioURL}
                download="recording.webm"
                className="block mt-2 text-blue-600 dark:text-blue-400 hover:underline text-sm text-center"
              >
                Pobierz nagranie
              </a>
            </div>
          )}
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          type="submit"
          disabled={goals.length === 0 || chunks.current.length === 0}
          className="relative px-8 py-4 bg-primary text-white rounded-xl shadow-medium hover:shadow-large hover:-translate-y-0.5 transition-all duration-200 text-lg font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
    
          
          Wyślij formularz
          <ArrowRight className="h-5 w-5" />
        </motion.button>


   
      </form>
      
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/5"></div>
      </div>
    </>
  );
}