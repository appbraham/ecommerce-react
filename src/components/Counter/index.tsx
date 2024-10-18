interface ICounter {
    label: string;
    count: string;
}

const Counter = ( {label, count}: ICounter ) => {
  return (
    <div className="flex flex-col lg:gap-2">
        <span className="font-satoshi text-2xl font-bold lg:text-[40px] ">{count}+</span>
        <span className="font-satoshi text-sm text-black/60">{label}</span>
    </div>
  )
}

export default Counter