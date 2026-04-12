import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Img = ({ src, alt, className, loading = "lazy", width, height }: { src: string; alt?: string; className?: string; loading?: "lazy" | "eager" | "anonymous"; width?: string | number; height?: string | number }) => {
  const isAbsolute = src.startsWith('http') || src.startsWith('https');
  return (
    <img
      src={isAbsolute ? src : `/${src}`}
      alt={alt || src}
      className={cn("object-cover", className)}
      referrerPolicy="no-referrer"
      loading={loading}
      decoding="async"
      width={width}
      height={height}
      onError={(e) => {
        if (!isAbsolute) {
          e.currentTarget.src = `https://placehold.co/600x400/FDFBF7/344966?text=${src.replace('.png', '')}`;
        }
      }}
    />
  );
};

export const Button = ({ children, onClick, className, variant = 'primary', disabled = false }: any) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg",
        variant === 'primary' 
          ? "bg-gradient-to-r from-[#344966] to-[#2B3A5A] text-white hover:from-[#2B3A5A] hover:to-[#1E2A45] shadow-[#344966]/30" 
          : "bg-white text-[#344966] border-2 border-[#344966] hover:bg-gray-50",
        disabled ? "opacity-50 cursor-not-allowed active:scale-100" : "",
        className
      )}
    >
      {children}
    </button>
  );
};

export const CardTypeB = ({ emoji, text, subText, selected, onClick }: any) => (
  <button
    onClick={onClick}
    className={cn(
      "flex items-center w-full p-6 rounded-3xl border-4 transition-all duration-300",
      selected 
        ? "border-green-500 bg-white shadow-[0_10px_25px_rgba(34,197,94,0.15)] transform scale-[1.02]" 
        : "border-transparent bg-white shadow-sm hover:shadow-md hover:border-gray-100"
    )}
  >
    {emoji && (
      <div className="w-14 h-14 rounded-2xl bg-[#F8F9FA] flex items-center justify-center text-3xl mr-5 flex-shrink-0 shadow-sm border border-gray-100">
        {emoji}
      </div>
    )}
    <div className="flex-1 flex flex-col items-start pr-4">
      <span className="font-extrabold text-[#2D3748] text-xl leading-tight text-left">{text}</span>
      {subText && <span className="text-sm text-[#718096] mt-1 text-left font-bold opacity-80 uppercase tracking-wide">{subText}</span>}
    </div>
    <div className={cn(
      "w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all flex-shrink-0",
      selected ? "border-green-500 bg-green-500 scale-110 shadow-lg" : "border-gray-200 bg-gray-50"
    )}>
      {selected && <CheckCircle2 className="text-white w-5 h-5 stroke-[3px]" />}
    </div>
  </button>
);
