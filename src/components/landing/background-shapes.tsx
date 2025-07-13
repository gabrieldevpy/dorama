import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

export function BackgroundShapes() {
  const shapes = [
    { size: 'w-24 h-24', top: 'top-[10%]', left: 'left-[5%]', animation: 'animate-float-1' },
    { size: 'w-12 h-12', top: 'top-[20%]', left: 'left-[80%]', animation: 'animate-float-2' },
    { size: 'w-16 h-16', top: 'top-[40%]', left: 'left-[90%]', animation: 'animate-float-3' },
    { size: 'w-28 h-28', top: 'top-[60%]', left: 'left-[10%]', animation: 'animate-float-4' },
    { size: 'w-14 h-14', top: 'top-[80%]', left: 'left-[70%]', animation: 'animate-float-2' },
    { size: 'w-10 h-10', top: 'top-[90%]', left: 'left-[30%]', animation: 'animate-float-1' },
  ];

  return (
    <div className="absolute inset-0 -z-10 h-full w-full">
      {shapes.map((shape, i) => (
        <Heart
          key={i}
          className={cn(
            'absolute text-primary/15 fill-current',
            shape.size,
            shape.top,
            shape.left,
            shape.animation
          )}
        />
      ))}
    </div>
  );
}
