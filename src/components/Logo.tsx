import { Hexagon } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative animate-float">
        <Hexagon className="w-8 h-8 text-[#40B5AD]" strokeWidth={1.5} />
        <Hexagon 
          className="w-8 h-8 absolute top-0 left-0 text-[#2A6F97] opacity-50 transform rotate-30" 
          strokeWidth={1.5}
        />
      </div>
      <span className="text-xl font-bold tracking-tight text-gray-900">hub</span>
    </div>
  );
}