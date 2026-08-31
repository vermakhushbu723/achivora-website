import { Screen, type ScreenSpec } from './screens';

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-4 pt-2.5 pb-1 text-[9px] font-bold text-text-main">
      <span>9:41</span>
      <span className="flex items-center gap-1">
        <span className="inline-block w-3.5 h-1.5 rounded-[2px] border border-text-main/70" />
        <span className="inline-block w-1 h-1.5 rounded-[1px] bg-text-main/70" />
      </span>
    </div>
  );
}

/** Phone chrome around one rendered screen. */
export default function PhoneMockup({
  spec,
  className = '',
}: {
  spec: ScreenSpec;
  className?: string;
}) {
  return (
    <div
      className={`relative w-[232px] shrink-0 rounded-[2.2rem] bg-[#1b1d21] p-[9px] shadow-card-hover ${className}`}
    >
      {/* Side buttons */}
      <span className="absolute -left-[2px] top-24 w-[3px] h-8 rounded-l bg-[#1b1d21]" />
      <span className="absolute -right-[2px] top-20 w-[3px] h-12 rounded-r bg-[#1b1d21]" />

      <div className="relative h-[470px] rounded-[1.7rem] bg-white overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-[#1b1d21] rounded-b-xl z-20" />

        <div className="relative z-10 h-full flex flex-col">
          <StatusBar />
          <div className="flex-1 overflow-hidden">
            <Screen spec={spec} />
          </div>
        </div>
      </div>
    </div>
  );
}
