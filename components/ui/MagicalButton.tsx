import React from 'react'

const MagicalButton = ({title, icon, position, handleClick, otherClasses} : {
  title : string;
  icon : React.ReactNode;
  position : String;
  handleClick?: () => void;
  otherClasses?:String
}) => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none w-full md:w-60 md:mt-10 focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50">
    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
    <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 gap-2 px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl ${otherClasses}`}>
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
    </span>
    </button>
  )
}

export default MagicalButton

