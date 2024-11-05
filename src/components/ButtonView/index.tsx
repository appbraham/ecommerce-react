interface Props {
  label: string;
  visible?: boolean;
}

const ButtonView = ({label, visible=true}:Props) => {
  return (
    <div className={`${visible?'block':'hidden'} flex items-center justify-center`}>
        <button className="w-full h-14 font-satoshi font-medium text-base text-black px-2 py-2 rounded-full border-2 border-black/10 sm:w-56 hover:text-white hover:bg-black">{label}</button>
    </div>
  )
}

export default ButtonView