import React, { useState, useEffect } from 'react';
import { PaperDesignShaderBackground } from './components/ui/paper-design-shader-background';
import { RefractedText } from './components/ui/refracted-text';
import { LiquidGlassOrb } from './components/ui/liquid-glass-orb';
import { ChromaticButton } from './components/ui/chromatic-button';
import { LiquidGlassButton } from './components/ui/liquid-glass-button';
import { Key, Volume2, ShieldCheck, Cpu } from 'lucide-react';

export default function App() {
  const [apiKey, setApiKey] = useState<string>('');
  const [showKeyModal, setShowKeyModal] = useState<boolean>(false);
  const [tempKey, setTempKey] = useState<string>('');
  const [status, setStatus] = useState<string>('ULTRON Protocol Active');

  useEffect(() => {
    const stored = localStorage.getItem('GEMINI_API_KEY');
    if (stored) {
      setApiKey(stored);
    } else {
      setShowKeyModal(true);
    }
  }, []);

  const handleSaveKey = () => {
    localStorage.setItem('GEMINI_API_KEY', tempKey);
    setApiKey(tempKey);
    setShowKeyModal(false);
  };

  const speakUltron = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.pitch = 0.2;
      utterance.rate = 0.85;
      const voices = window.speechSynthesis.getVoices();
      const maleVoice = voices.find(v => v.name.toLowerCase().includes('male') || v.name.toLowerCase().includes('david') || v.name.toLowerCase().includes('google us english'));
      if (maleVoice) utterance.voice = maleVoice;
      window.speechSynthesis.speak(utterance);
    }
    setStatus(`Synthesizing: "${text}"`);
  };

  return (
    <PaperDesignShaderBackground>
      <div className="flex flex-col items-center justify-between min-h-screen px-4 py-8 max-w-6xl mx-auto text-slate-100">
        <header className="w-full flex justify-between items-center py-4 border-b border-cyan-900/40">
          <div className="flex items-center gap-2">
            <Cpu className="w-6 h-6 text-cyan-400" />
            <span className="font-mono text-xl tracking-wider text-cyan-400 font-bold">ULTRON v1.0</span>
          </div>
          <button
            onClick={() => setShowKeyModal(true)}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-mono bg-cyan-950/60 border border-cyan-800/60 rounded-md hover:bg-cyan-900/60 text-cyan-300 transition-colors"
          >
            <Key className="w-3.5 h-3.5" />
            {apiKey ? 'API Key Stored' : 'Set API Key'}
          </button>
        </header>

        <main className="flex flex-col items-center my-auto w-full max-w-3xl gap-8 text-center">
          <RefractedText text="ULTRON PROTOCOL" />

          <div className="w-full relative flex justify-center items-center">
            <LiquidGlassOrb />
          </div>

          <p className="text-slate-400 font-mono text-sm max-w-md">
            Neural voice synthesis and quantum glass refraction core. System ready for deployment.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <ChromaticButton onClick={() => speakUltron("I am Ultron. Peace in our time.")}>
              <Volume2 className="w-4 h-4" /> Synthesize Voice
            </ChromaticButton>

            <LiquidGlassButton variant="cyan" onClick={() => speakUltron("Protocol verified. Access granted.")}>
              Verify Protocol
            </LiquidGlassButton>

            <LiquidGlassButton variant="purple" onClick={() => speakUltron("Quantum core operating at maximum capacity.")}>
              Core Diagnostics
            </LiquidGlassButton>

            <LiquidGlassButton variant="amber" onClick={() => speakUltron("Warning. Intruders detected in sector seven.")}>
              Alert Mode
            </LiquidGlassButton>
          </div>

          <div className="font-mono text-xs text-cyan-400/80 bg-black/40 px-4 py-2 rounded-full border border-cyan-900/30">
            {status}
          </div>
        </main>

        <footer className="w-full py-4 text-center font-mono text-xs text-slate-500 border-t border-slate-900">
          ULTRON PROTOCOL &copy; 2026. Local localStorage security enabled.
        </footer>

        {showKeyModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="bg-slate-900 border border-cyan-500/30 rounded-2xl p-6 w-full max-w-md shadow-2xl flex flex-col gap-4">
              <div className="flex items-center gap-3 text-cyan-400">
                <ShieldCheck className="w-6 h-6" />
                <h3 className="text-lg font-bold font-mono">Gemini API Key</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Enter your Gemini API key. This key is stored locally in your browser's <code className="text-cyan-300">localStorage</code> and is never sent to external servers.
              </p>
              <input
                type="password"
                placeholder="AIzaSy..."
                value={tempKey}
                onChange={(e) => setTempKey(e.target.value)}
                className="w-full px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-cyan-200 focus:outline-none focus:border-cyan-500 font-mono"
              />
              <div className="flex justify-end gap-3 mt-2">
                <button
                  onClick={() => setShowKeyModal(false)}
                  className="px-4 py-2 text-xs font-mono text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveKey}
                  className="px-4 py-2 text-xs font-mono bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg transition-colors"
                >
                  Save Key
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </PaperDesignShaderBackground>
  );
}
