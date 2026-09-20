'use client';

import { useState } from 'react';
import {
  Upload,
  FileText,
  MessageSquare,
  LayoutDashboard,
  Brain,
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function WorkspacePage() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [sources, setSources] = useState<string[]>([]);
  const [asking, setAsking] = useState(false);
  const [error, setError] = useState('');

  async function uploadDocument() {
    if (!selectedFile) {
      setError('Please select a document first.');
      return;
    }

    setUploading(true);
    setUploadMessage('');
    setError('');

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch(`${API_URL}/upload`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || 'Upload failed.');
      }

      setUploadMessage('Document uploaded and indexed successfully.');
      setSelectedFile(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed.');
    } finally {
      setUploading(false);
    }
  }

  async function askQuestion() {
    if (!question.trim()) {
      setError('Please enter a question.');
      return;
    }

    setAsking(true);
    setAnswer('');
    setSources([]);
    setError('');

    try {
      const response = await fetch(`${API_URL}/rag-chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: question,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || 'Unable to get an answer.');
      }

      setAnswer(data.answer || 'No answer received.');
      setSources(data.sources || []);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Something went wrong.'
      );
    } finally {
      setAsking(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 flex-col border-r border-slate-800 bg-slate-900/60 p-5">
        <div className="flex items-center gap-3 mb-10">
          <div className="rounded-xl bg-gradient-to-br from-cyan-400 to-violet-600 p-2">
            <Brain className="h-6 w-6 text-white" />
          </div>

          <div>
            <h1 className="font-bold text-white">
              Enterprise OS
            </h1>
            <p className="text-xs text-slate-500">
              Intelligence Platform
            </p>
          </div>
        </div>

        <nav className="space-y-2">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center gap-3 rounded-lg px-4 py-3 text-sm ${
              activeTab === 'dashboard'
                ? 'bg-cyan-500/15 text-cyan-300'
                : 'text-slate-400 hover:bg-slate-800'
            }`}
          >
            <LayoutDashboard className="h-5 w-5" />
            Dashboard
          </button>

          <button
            onClick={() => setActiveTab('documents')}
            className={`w-full flex items-center gap-3 rounded-lg px-4 py-3 text-sm ${
              activeTab === 'documents'
                ? 'bg-cyan-500/15 text-cyan-300'
                : 'text-slate-400 hover:bg-slate-800'
            }`}
          >
            <FileText className="h-5 w-5" />
            Documents
          </button>

          <button
            onClick={() => setActiveTab('assistant')}
            className={`w-full flex items-center gap-3 rounded-lg px-4 py-3 text-sm ${
              activeTab === 'assistant'
                ? 'bg-cyan-500/15 text-cyan-300'
                : 'text-slate-400 hover:bg-slate-800'
            }`}
          >
            <MessageSquare className="h-5 w-5" />
            AI Assistant
          </button>
        </nav>

        <div className="mt-auto rounded-xl border border-slate-800 bg-slate-950/70 p-4">
          <p className="text-xs text-slate-500">SYSTEM STATUS</p>
          <div className="mt-2 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-sm text-emerald-300">
              Backend Connected
            </span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <section className="flex-1 p-6 md:p-10">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <header className="mb-10">
            <p className="text-sm text-cyan-400">
              ENTERPRISE INTELLIGENCE OS
            </p>

            <h2 className="mt-2 text-3xl md:text-4xl font-black">
              Workspace
            </h2>

            <p className="mt-3 text-slate-400">
              Manage your organizational knowledge and interact with AI.
            </p>
          </header>

          {/* Dashboard */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <div className="grid gap-5 md:grid-cols-3">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                  <FileText className="mb-4 h-7 w-7 text-cyan-400" />
                  <p className="text-sm text-slate-400">
                    Document Intelligence
                  </p>
                  <h3 className="mt-2 text-xl font-bold">
                    Knowledge Base
                  </h3>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                  <Brain className="mb-4 h-7 w-7 text-violet-400" />
                  <p className="text-sm text-slate-400">
                    AI Engine
                  </p>
                  <h3 className="mt-2 text-xl font-bold">
                    RAG Assistant
                  </h3>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                  <CheckCircle className="mb-4 h-7 w-7 text-emerald-400" />
                  <p className="text-sm text-slate-400">
                    System Status
                  </p>
                  <h3 className="mt-2 text-xl font-bold">
                    Operational
                  </h3>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
                <h3 className="text-2xl font-bold">
                  Welcome to your workspace
                </h3>

                <p className="mt-3 text-slate-400">
                  Upload company documents and ask questions using
                  your AI-powered knowledge assistant.
                </p>

                <button
                  onClick={() => setActiveTab('documents')}
                  className="mt-6 rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
                >
                  Upload Documents
                </button>
              </div>
            </div>
          )}

          {/* Documents */}
          {activeTab === 'documents' && (
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold">
                  Document Management
                </h3>

                <p className="mt-2 text-slate-400">
                  Upload PDF, DOCX, or TXT files for indexing.
                </p>
              </div>

              <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-slate-700 bg-slate-950/50 p-10 text-center hover:border-cyan-400">
                <Upload className="mb-4 h-10 w-10 text-cyan-400" />

                <p className="font-semibold">
                  Click to select a document
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  PDF, DOCX, and TXT supported
                </p>

                <input
                  type="file"
                  accept=".pdf,.docx,.txt"
                  className="hidden"
                  onChange={(event) => {
                    setSelectedFile(event.target.files?.[0] || null);
                    setUploadMessage('');
                    setError('');
                  }}
                />
              </label>

              {selectedFile && (
                <p className="mt-4 text-sm text-cyan-300">
                  Selected: {selectedFile.name}
                </p>
              )}

              <button
                onClick={uploadDocument}
                disabled={uploading}
                className="mt-6 flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-slate-950 disabled:opacity-50"
              >
                {uploading && (
                  <Loader2 className="h-4 w-4 animate-spin" />
                )}

                {uploading ? 'Uploading...' : 'Upload & Index'}
              </button>

              {uploadMessage && (
                <p className="mt-5 flex items-center gap-2 text-sm text-emerald-400">
                  <CheckCircle className="h-4 w-4" />
                  {uploadMessage}
                </p>
              )}
            </div>
          )}

          {/* AI Assistant */}
          {activeTab === 'assistant' && (
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold">
                  AI Knowledge Assistant
                </h3>

                <p className="mt-2 text-slate-400">
                  Ask questions about your indexed documents.
                </p>
              </div>

              <textarea
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                placeholder="Ask something about your documents..."
                className="min-h-32 w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-slate-100 outline-none focus:border-cyan-400"
              />

              <button
                onClick={askQuestion}
                disabled={asking}
                className="mt-4 flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-slate-950 disabled:opacity-50"
              >
                {asking && (
                  <Loader2 className="h-4 w-4 animate-spin" />
                )}

                {!asking && <Send className="h-4 w-4" />}

                {asking ? 'Thinking...' : 'Ask AI'}
              </button>

              {answer && (
                <div className="mt-8 rounded-xl border border-slate-700 bg-slate-950/70 p-6">
                  <h4 className="mb-3 font-bold text-cyan-300">
                    AI Response
                  </h4>

                  <p className="whitespace-pre-wrap text-slate-300">
                    {answer}
                  </p>

                  {sources.length > 0 && (
                    <div className="mt-6 border-t border-slate-800 pt-4">
                      <h5 className="text-sm font-semibold text-slate-400">
                        Sources
                      </h5>

                      <ul className="mt-2 space-y-1 text-sm text-slate-500">
                        {sources.map((source, index) => (
                          <li key={index}>{source}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-red-900/50 bg-red-950/30 p-4 text-sm text-red-300">
              <AlertCircle className="h-5 w-5 shrink-0" />
              <p>{error}</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
