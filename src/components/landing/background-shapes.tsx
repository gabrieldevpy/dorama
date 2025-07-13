import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

export function BackgroundShapes() {
  const shapes = [
    { size: 'w-32 h-32', top: 'top-[10%]', left: 'left-[5%]', animation: 'animate-float-1' },
    { size: 'w-16 h-16', top: 'top-[20%]', left: 'left-[80%]', animation: 'animate-float-2' },
    { size: 'w-24 h-24', top: 'top-[40%]', left: 'left-[90%]', animation: 'animate-float-3' },
    { size: 'w-40 h-40', top: 'top-[60%]', left: 'left-[10%]', animation: 'animate-float-4' },
    { size: 'w-20 h-20', top: 'top-[80%]', left: 'left-[70%]', animation: 'animate-float-2' },
    { size: 'w-12 h-12', top: 'top-[90%]', left: 'left-[30%]', animation: 'animate-float-1' },
  ];

  return (
    <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden">
      {shapes.map((shape, i) => (
        <Heart
          key={i}
          className={cn(
            'absolute text-primary/25 fill-current',
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
