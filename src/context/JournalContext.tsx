import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type SentimentLabel = 'positive' | 'neutral' | 'negative';

export interface JournalEntry {
  id: string;
  text: string;
  sentiment: SentimentLabel;
  summary: string;
  suggestion: string;
  createdAt: string; 
}

interface JournalContextValue {
  entries: JournalEntry[];
  loading: boolean;
  error: string | null;
  addEntry: (entry: Omit<JournalEntry, 'id' | 'createdAt'>) => Promise<void>;
}

const JournalContext = createContext<JournalContextValue | undefined>(undefined);

const STORAGE_KEY = '@journal_entries_v1';

export const JournalProvider = ({ children }: { children: ReactNode }) => {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // AsyncStorage'tan geçmiş verileri yükle
  useEffect(() => {
    const loadEntries = async () => {
      try {
        const json = await AsyncStorage.getItem(STORAGE_KEY);
        if (json) {
          const parsed: JournalEntry[] = JSON.parse(json);
          setEntries(parsed);
        }
      } catch (e) {
        console.warn('AsyncStorage load error', e);
        setError('Geçmiş veriler yüklenirken hata oluştu.');
      } finally {
        setLoading(false);
      }
    };

    loadEntries();
  }, []);

  const persistEntries = async (newEntries: JournalEntry[]) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newEntries));
    } catch (e) {
      console.warn('AsyncStorage save error', e);
      setError('Veriler kaydedilirken bir hata oluştu.');
    }
  };

  const addEntry = async (entry: Omit<JournalEntry, 'id' | 'createdAt'>) => {
    const newEntry: JournalEntry = {
      ...entry,
      id: `${Date.now()}-${Math.random().toString(36).substring(2, 8)}`,
      createdAt: new Date().toISOString(),
    };

    const newEntries = [newEntry, ...entries];
    setEntries(newEntries);
    await persistEntries(newEntries);
  };

  const value: JournalContextValue = {
    entries,
    loading,
    error,
    addEntry,
  };

  return <JournalContext.Provider value={value}>{children}</JournalContext.Provider>;
};

export const useJournal = () => {
  const ctx = useContext(JournalContext);
  if (!ctx) {
    throw new Error('useJournal must be used within a JournalProvider');
  }
  return ctx;
};