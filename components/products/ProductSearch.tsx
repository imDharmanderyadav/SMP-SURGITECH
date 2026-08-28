"use client";

import { Search, X } from "lucide-react";

interface ProductSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function ProductSearch({ searchQuery, onSearchChange }: ProductSearchProps) {
  return (
    <div className="relative max-w-xl mx-auto">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-slate-400" />
      </div>
      <input
        type="text"
        placeholder="Search products by name..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full rounded-xl border border-slate-200 bg-white pl-12 pr-10 py-3.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 shadow-sm transition-all"
      />
      {searchQuery && (
        <button
          onClick={() => onSearchChange("")}
          className="absolute inset-y-0 right-0 pr-4 flex items-center"
        >
          <X className="h-4 w-4 text-slate-400 hover:text-slate-600" />
        </button>
      )}
    </div>
  );
}