import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Img = ({ src, alt, className }: { src: string; alt?: string; className?: string }) => {
  const isAbsolute = src.startsWith('http') || src.startsWith('https');
  return (
    <img
      src={isAbsolute ? src : `/${src}`}
      alt={alt || src}
      className={cn("object-cover", className)}
      referrerPolicy="no-referrer"
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
      "flex items-center w-full p-5 rounded-3xl border-2 transition-all duration-300",
      selected 
        ? "border-green-500 bg-[#F4F7FA] shadow-md transform scale-[1.01]" 
        : "border-transparent bg-white shadow-sm hover:shadow-md hover:border-gray-200"
    )}
  >
    {emoji && (
      <div className="w-12 h-12 rounded-2xl bg-[#FDFBF7] flex items-center justify-center text-2xl mr-4 flex-shrink-0 shadow-inner">
        {emoji}
      </div>
    )}
    <div className="flex-1 flex flex-col items-center justify-center pr-4">
      <span className="font-bold text-[#2D3748] text-lg leading-tight text-center">{text}</span>
      {subText && <span className="text-sm text-[#718096] mt-1 text-center font-medium">{subText}</span>}
    </div>
    <div className={cn(
      "w-7 h-7 rounded-full flex items-center justify-center border-2 transition-colors flex-shrink-0",
      selected ? "border-green-500 bg-green-500" : "border-gray-300"
    )}>
      {selected && <CheckCircle2 className="text-white w-5 h-5" />}
    </div>
  </button>
);
