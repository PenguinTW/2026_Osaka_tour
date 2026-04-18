/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Clock, 
  Train, 
  Plane, 
  Star, 
  Utensils, 
  ChevronRight, 
  Ticket, 
  ExternalLink,
  ChevronLeft,
  Calendar,
  Info,
  Car,
  Footprints,
  Navigation,
  QrCode,
  Eye,
  X,
  MapPin,
  TrainFront,
  ArrowRight
} from 'lucide-react';
import { TRIP_DATA } from './data.ts';
import { TimelineItem, DayItinerary, Voucher } from './types.ts';

// Helper to determine transport icon
const TransportIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'train': return <Train className="w-4 h-4" />;
    case 'flight': return <Plane className="w-4 h-4" />;
    case 'car': return <Car className="w-4 h-4" />;
    case 'walk': return <Footprints className="w-4 h-4" />;
    default: return <Navigation className="w-4 h-4" />;
  }
};

const VoucherCard = ({ voucher }: { voucher: Voucher }) => {
  const [showPreview, setShowPreview] = useState(false);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (showPreview) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showPreview]);

  const isLinktUrl = voucher.previewUrl?.includes('linkt.to');

  const handlePreviewClick = () => {
    if (isLinktUrl && voucher.previewUrl) {
      window.open(voucher.previewUrl, '_blank');
    } else {
      setShowPreview(true);
    }
  };

  return (
    <>
      <div className="flex flex-col mb-3 last:mb-0">
        <div className="flex items-center justify-between p-4 bg-white border border-dashed border-border-subtle rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent-primary/10 text-accent-primary">
              <Ticket className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <p className="text-sm font-semibold text-text-main">{voucher.title}</p>
                {voucher.userId === 1 && (
                  <span className="px-1.5 py-0.5 text-[10px] font-bold bg-blue-100 text-blue-600 rounded-md">使用者 1</span>
                )}
                {voucher.userId === 2 && (
                  <span className="px-1.5 py-0.5 text-[10px] font-bold bg-purple-100 text-purple-600 rounded-md">使用者 2</span>
                )}
              </div>
              <p className="text-[11px] text-text-muted">
                {voucher.type.toUpperCase()} • {voucher.fileName?.split('-').pop() || '查看詳情'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {voucher.previewUrl && (
              <button 
                onClick={handlePreviewClick}
                className="w-10 h-10 rounded-md flex items-center justify-center bg-slate-100 text-text-muted hover:text-accent-primary transition-colors"
                title={isLinktUrl ? "在新分頁開啟憑證" : "預覽檔案"}
              >
                {isLinktUrl ? <ExternalLink className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            )}
            {voucher.orderNumber && (
              <div className="text-right sm:block hidden">
                <p className="text-[9px] uppercase font-bold tracking-wider text-text-muted opacity-60">Order ID</p>
                <p className="text-xs font-mono font-semibold text-text-main">{voucher.orderNumber}</p>
              </div>
            )}
            <div className="w-10 h-10 bg-black rounded-md flex items-center justify-center">
              <QrCode className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {showPreview && voucher.previewUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowPreview(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl h-[85vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-border-subtle bg-white">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent-primary/10 text-accent-primary rounded-lg">
                    <Ticket className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text-main">{voucher.title}</h4>
                    <p className="text-[10px] text-text-muted uppercase font-bold tracking-wider">Document Preview</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowPreview(false)}
                  className="p-2 hover:bg-slate-100 rounded-full text-text-muted transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Body (Iframe) */}
              <div className="flex-1 bg-slate-50 relative">
                <iframe 
                  src={voucher.previewUrl} 
                  className="w-full h-full border-none"
                  allow="autoplay"
                  loading="lazy"
                />
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-3 bg-slate-50 border-t border-border-subtle flex items-center justify-center">
                <p className="text-[11px] text-text-muted font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  此檔案僅供擁有檢視權限的 Google 帳號讀取
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const TimelineCard = ({ item }: { item: TimelineItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative pl-10 pb-10 last:pb-0">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-timeline-line ml-[14px]" />
      
      {/* Timeline dot */}
      <div className={`absolute left-0 top-1.5 w-[30px] h-[30px] rounded-full flex items-center justify-center z-10 border-4 border-background-base
        ${item.time ? 'bg-accent-primary text-white shadow-lg shadow-accent-primary/20 scale-110' : 'bg-timeline-line text-white/50'}`}>
        {item.transportInfo ? (
          <TransportIcon type={item.transportInfo.type} />
        ) : (
          <div className="w-2 h-2 rounded-full bg-white" />
        )}
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <p className="text-[12px] font-bold tracking-tight text-text-muted">
            {item.time || '計劃行程'}
          </p>
        </div>
        
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold text-text-main tracking-tight leading-snug flex-1">
            {item.title}
          </h3>
          
          <div className="flex items-center gap-2">
            {/* Google Map Link Button */}
            {item.location?.googleMapUrl && (
              <a 
                href={item.location.googleMapUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm border border-blue-100 group"
                title="開啟 Google 地圖"
              >
                <MapPin className="w-5 h-5" />
              </a>
            )}

            {/* Transit/Transfer Link Button */}
            {item.link && (
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all duration-300 shadow-sm border border-emerald-100 group"
                title="查看轉乘資訊"
              >
                <TrainFront className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {item.description && (
          <p className="text-sm text-text-muted leading-relaxed mt-1">
            {item.description}
          </p>
        )}

        {(item.location || item.details || item.vouchers || item.transportInfo) && (
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-1.5 text-[11px] font-bold text-accent-primary mt-3 bg-accent-primary/5 px-3 py-1.5 rounded-full w-fit hover:bg-accent-primary/10 transition-colors uppercase tracking-wide"
          >
            {isOpen ? '隱藏詳情' : '📄 檢視詳情'}
          </button>
        )}

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-4 pb-2 flex flex-col gap-4">
                {item.location && (
                  <div className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-border-subtle shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-accent-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-text-main">{item.location.name}</p>
                      {item.location.address && (
                        <p className="text-xs text-text-muted mt-1">{item.location.address}</p>
                      )}
                    </div>
                  </div>
                )}

                {item.transportInfo && (
                  <div className="flex flex-col gap-3 p-4 bg-slate-50 rounded-2xl border border-border-subtle">
                    {item.transportInfo.platforms && (
                      <div className="text-[11px] font-bold text-text-muted flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-white border border-border-subtle rounded-md">月台 PLATFORM</span>
                        <span className="text-text-main">{item.transportInfo.platforms}</span>
                      </div>
                    )}
                    <ul className="flex flex-col gap-2">
                      {item.transportInfo.details.map((detail, idx) => (
                        <li key={idx} className="text-[13px] text-text-muted flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent-primary mt-1.5 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {item.details && (
                  <div className="flex flex-col gap-2 pl-2">
                    {item.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                        <p className="text-[13px] text-text-muted">{detail}</p>
                      </div>
                    ))}
                  </div>
                )}

                {item.vouchers && (
                  <div className="mt-2">
                    <p className="text-[11px] font-bold text-text-muted uppercase tracking-[0.1em] mb-3 px-1">相關證件與憑證</p>
                    <div className="flex flex-col gap-1">
                      {item.vouchers.map(v => (
                        <div key={v.id}>
                          <VoucherCard voucher={v} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default function App() {
  const [activeDay, setActiveDay] = useState(1);
  const [todayDay, setTodayDay] = useState<number | null>(null);

  // Auto-detect current day of trip
  useEffect(() => {
    const today = new Date();
    const todayStr = today.getFullYear() + '-' + 
                    String(today.getMonth() + 1).padStart(2, '0') + '-' + 
                    String(today.getDate()).padStart(2, '0');
    
    const dayMatch = TRIP_DATA.days.find(d => d.date.startsWith(todayStr));
    if (dayMatch) {
      setActiveDay(dayMatch.day);
      setTodayDay(dayMatch.day);
    } else {
      // If not during trip, default to Day 1
      setActiveDay(1);
      setTodayDay(null);
    }
  }, []);

  const currentDayData = useMemo(() => 
    TRIP_DATA.days.find(d => d.day === activeDay) || TRIP_DATA.days[0], 
  [activeDay]);

  // Handle day changes with scroll
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeDay]);

  return (
    <div className="min-h-screen bg-background-base text-text-main font-sans selection:bg-accent-primary/20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border-subtle">
        <div className="max-w-md mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex flex-col">
              <h1 className="text-xl font-extrabold tracking-tight text-text-main">
                2026大阪行
              </h1>
              <p className="text-[12px] text-text-muted font-medium mt-0.5">
                2026年04月19日 - 04月26日 • 心齋橋停留
              </p>
            </div>
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-slate-100 flex items-center justify-center border border-border-subtle shadow-inner">
              <img 
                src="https://picsum.photos/seed/osaka/200/200" 
                alt="Profile" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Day Selector */}
          <div className="flex gap-3 overflow-x-auto no-scrollbar py-2">
            {TRIP_DATA.days.map((d) => {
              const [datePart] = d.date.split(' ');
              const [year, month, day] = datePart.split('-');
              const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
              const displayMonth = monthNames[parseInt(month) - 1];
              const isToday = todayDay === d.day;

              return (
                <button
                  key={d.day}
                  onClick={() => setActiveDay(d.day)}
                  className={`flex-shrink-0 flex flex-col items-center justify-center w-[52px] h-[52px] rounded-2xl transition-all duration-300 border
                    ${activeDay === d.day 
                      ? 'bg-accent-primary border-accent-primary text-white shadow-lg shadow-accent-primary/30' 
                      : 'bg-white border-border-subtle text-text-muted hover:border-accent-primary/50'}
                    ${isToday ? 'border-red-500 border-2 ring-2 ring-red-500/20' : ''}`}
                >
                  <span className={`text-[10px] font-bold uppercase leading-none mb-0.5 
                    ${activeDay === d.day ? 'opacity-90' : 'opacity-60'} 
                    ${isToday && activeDay !== d.day ? 'text-red-500' : ''}`}>
                    {displayMonth}
                  </span>
                  <span className={`text-[15px] font-extrabold leading-none ${isToday && activeDay !== d.day ? 'text-red-500' : ''}`}>
                    {day}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-6 py-6 pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2 }}
          >
            {/* Day Page Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-accent-primary" />
                <p className="text-[12px] font-bold text-accent-primary tracking-widest uppercase">
                  行程路線總覽 DAY {activeDay}
                </p>
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-text-main">
                {currentDayData.title}
              </h2>
            </div>

            {/* Placeholder for Map Overview (Mobile version of the design's right col) */}
            <div className="mb-10 h-[160px] bg-slate-200 rounded-[24px] relative overflow-hidden border border-border-subtle shadow-inner group">
              <img 
                src={`https://picsum.photos/seed/${activeDay}/600/300?blur=5`} 
                alt="Map Preview" 
                className="w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-10 h-10 bg-accent-primary border-[3px] border-white rounded-full rounded-tr-none rotate-45 flex items-center justify-center shadow-xl">
                    <MapPin className="w-5 h-5 text-white -rotate-45" />
                 </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur px-4 py-2 rounded-xl flex items-center justify-between border border-white/20">
                <span className="text-[11px] font-bold text-text-main pointer-events-none">當日行程分佈概覽</span>
                <Navigation className="w-4 h-4 text-accent-primary" />
              </div>
            </div>

            {/* Timeline Wrapper */}
            <div className="bg-white border border-border-subtle rounded-[28px] p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]">
              <div className="flex flex-col">
                {currentDayData.items.map((item: TimelineItem) => (
                  <div key={item.id}>
                    <TimelineCard item={item} />
                  </div>
                ))}
              </div>
            </div>

            {/* Notes Section */}
            {currentDayData.notes && (
              <div className="mt-8 p-6 bg-slate-100/80 border border-border-subtle rounded-[24px]">
                <div className="flex items-center gap-2 text-text-muted mb-3">
                  <Info className="w-4 h-4" />
                  <p className="text-[11px] font-extrabold uppercase tracking-widest">行程備註細節</p>
                </div>
                <p className="text-[13px] text-text-muted font-medium leading-relaxed italic">
                  {currentDayData.notes}
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Hotel Quick Bar */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-border-subtle z-40">
        <div className="max-w-md mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-50 border border-border-subtle rounded-xl flex items-center justify-center text-xl">
              🏨
            </div>
            <div>
              <p className="text-[13px] font-bold text-text-main leading-tight">{TRIP_DATA.hotel.name}</p>
              <p className="text-[11px] text-text-muted line-clamp-1">{TRIP_DATA.hotel.address}</p>
            </div>
          </div>
          <a 
            href={TRIP_DATA.hotel.googleMapUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 bg-accent-primary rounded-xl flex items-center justify-center shadow-lg shadow-accent-primary/20 hover:scale-105 transition-transform"
          >
            <MapPin className="w-5 h-5 text-white" />
          </a>
        </div>
      </footer>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
