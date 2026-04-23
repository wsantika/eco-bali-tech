'use client';

import { useState, useCallback } from 'react';
import { RotateCcw, Trophy, Gamepad2, CheckCircle, XCircle } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { WasteItem, WasteCategory, wasteCategories, gameItems, shuffleItems } from '@/app/data/game-items';
import { cn } from '@/app/lib/utils';

interface GameResult {
  item: WasteItem;
  correct: boolean;
  droppedOn: WasteCategory;
}

export default function WasteGame() {
  const [items, setItems] = useState<WasteItem[]>(() => shuffleItems(gameItems).slice(0, 10));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [results, setResults] = useState<GameResult[]>([]);
  const [feedback, setFeedback] = useState<{ message: string; correct: boolean; fact: string } | null>(null);
  const [dragOverBin, setDragOverBin] = useState<WasteCategory | null>(null);
  const [gameComplete, setGameComplete] = useState(false);

  const currentItem = items[currentIndex];

  const handleDrop = useCallback((category: WasteCategory) => {
    if (!currentItem || gameComplete) return;

    const correct = currentItem.category === category;
    const result: GameResult = { item: currentItem, correct, droppedOn: category };

    if (correct) {
      setScore((s) => s + 10);
      setFeedback({ message: 'Benar! 🎉', correct: true, fact: currentItem.fact });
    } else {
      const correctCat = wasteCategories.find(c => c.id === currentItem.category);
      setFeedback({
        message: `Salah! Yang benar: ${correctCat?.emoji} ${correctCat?.name}`,
        correct: false,
        fact: currentItem.fact,
      });
    }

    setResults((r) => [...r, result]);
    setDragOverBin(null);

    setTimeout(() => {
      setFeedback(null);
      if (currentIndex + 1 >= items.length) {
        setGameComplete(true);
      } else {
        setCurrentIndex((i) => i + 1);
      }
    }, 1800);
  }, [currentItem, currentIndex, items.length, gameComplete]);

  const handleReset = () => {
    setItems(shuffleItems(gameItems).slice(0, 10));
    setCurrentIndex(0);
    setScore(0);
    setResults([]);
    setFeedback(null);
    setDragOverBin(null);
    setGameComplete(false);
  };

  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', 'waste-item');
  };

  const handleDragOver = (e: React.DragEvent, category: WasteCategory) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setDragOverBin(category);
  };

  const handleDragLeave = () => {
    setDragOverBin(null);
  };

  const handleDropEvent = (e: React.DragEvent, category: WasteCategory) => {
    e.preventDefault();
    handleDrop(category);
  };

  // Touch-friendly: tap on bin to place item there
  const handleBinClick = (category: WasteCategory) => {
    if (feedback || gameComplete) return;
    handleDrop(category);
  };

  const correctCount = results.filter(r => r.correct).length;
  const progress = ((currentIndex + (gameComplete ? 0 : 0)) / items.length) * 100;

  return (
    <SectionWrapper id="game" className="bg-gradient-to-b from-white to-eco-white">
      <div className="text-center mb-10">
        <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4 animate-on-scroll">
          🎮 Waste Sorting Game
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-eco-dark mb-4 animate-on-scroll">
          Pilah Sampah <span className="eco-gradient-text">Mini Game</span>
        </h2>
        <p className="text-eco-gray max-w-2xl mx-auto animate-on-scroll">
          Seret sampah ke tempat yang benar! Di mobile, tap sampah lalu tap tong yang sesuai.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {!gameComplete ? (
          <div className="space-y-6 animate-on-scroll">
            {/* Progress bar */}
            <div className="glass-card p-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Gamepad2 className="w-5 h-5 text-eco-green" />
                <span className="font-semibold text-eco-dark text-sm">
                  {currentIndex + 1} / {items.length}
                </span>
              </div>
              <div className="flex-1 h-2.5 bg-eco-gray-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-eco-green to-eco-emerald rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex items-center gap-1.5">
                <Trophy className="w-5 h-5 text-eco-amber" />
                <span className="font-bold text-eco-dark">{score}</span>
              </div>
            </div>

            {/* Current item to sort */}
            {currentItem && !feedback && (
              <div className="flex justify-center">
                <div
                  draggable
                  onDragStart={handleDragStart}
                  className="waste-item glass-card p-6 sm:p-8 text-center cursor-grab active:cursor-grabbing select-none"
                >
                  <div className="text-6xl mb-3">{currentItem.emoji}</div>
                  <div className="text-lg font-bold text-eco-dark">{currentItem.name}</div>
                  <div className="text-sm text-eco-gray mt-1">
                    Seret ke tong yang benar ↓
                  </div>
                </div>
              </div>
            )}

            {/* Feedback */}
            {feedback && (
              <div className={cn(
                'text-center p-6 rounded-2xl animate-scale-in',
                feedback.correct ? 'bg-green-50 border-2 border-green-200' : 'bg-red-50 border-2 border-red-200'
              )}>
                <div className="text-2xl font-bold mb-2" style={{ color: feedback.correct ? '#16A34A' : '#EF4444' }}>
                  {feedback.message}
                </div>
                <div className="text-sm text-eco-gray">{feedback.fact}</div>
              </div>
            )}

            {/* Drop bins */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {wasteCategories.map((cat) => (
                <div
                  key={cat.id}
                  onDragOver={(e) => handleDragOver(e, cat.id)}
                  onDragLeave={handleDragLeave}
                  onDrop={(e) => handleDropEvent(e, cat.id)}
                  onClick={() => handleBinClick(cat.id)}
                  className={cn(
                    'drop-zone p-4 sm:p-5 rounded-2xl text-center cursor-pointer transition-all duration-200',
                    dragOverBin === cat.id && 'drag-over',
                    feedback && 'pointer-events-none opacity-60'
                  )}
                  style={{
                    borderColor: dragOverBin === cat.id ? cat.color : undefined,
                    background: dragOverBin === cat.id ? `${cat.color}10` : 'white',
                  }}
                >
                  <div className="text-3xl mb-2">{cat.emoji}</div>
                  <div className="text-sm font-semibold text-eco-dark">{cat.name}</div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Game Complete */
          <div className="glass-card p-8 sm:p-10 text-center animate-scale-in">
            <div className="text-6xl mb-4">🏆</div>
            <h3 className="text-3xl font-bold text-eco-dark mb-2">Game Selesai!</h3>
            <div className="text-5xl font-bold eco-gradient-text mb-2">{score} / {items.length * 10}</div>
            <p className="text-eco-gray mb-6">
              Kamu menjawab benar {correctCount} dari {items.length} sampah
            </p>

            {/* Results breakdown */}
            <div className="max-w-md mx-auto mb-8 space-y-2">
              {results.map((r, i) => (
                <div key={i} className={cn(
                  'flex items-center gap-3 p-3 rounded-xl text-sm text-left',
                  r.correct ? 'bg-green-50' : 'bg-red-50'
                )}>
                  {r.correct
                    ? <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                    : <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                  }
                  <span className="text-lg mr-1">{r.item.emoji}</span>
                  <span className="text-eco-dark font-medium">{r.item.name}</span>
                  {!r.correct && (
                    <span className="text-eco-gray ml-auto text-xs">
                      → {wasteCategories.find(c => c.id === r.item.category)?.name}
                    </span>
                  )}
                </div>
              ))}
            </div>

            <button onClick={handleReset} className="btn-primary">
              <RotateCcw className="w-4 h-4" />
              Main Lagi
            </button>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
