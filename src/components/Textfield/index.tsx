interface ITextfield{
    label: string;
    icon?: string;
}

const Textfield = ({label, icon="search"}: ITextfield) => {
  
  const renderIcon = () => {

    if(icon === "email"){      
      return <svg className="absolute -translate-y-1/2 top-1/2 left-4" width="24" height="24" viewBox="0 0 24 24"><path className="stroke-black/50" fill="none" d="m16.484 11.976 6.151-5.344v10.627zm-7.926.905 2.16 1.875c.339.288.781.462 1.264.462h.017-.001.014c.484 0 .926-.175 1.269-.465l-.003.002 2.16-1.875 6.566 5.639H1.995zM1.986 5.365h20.03l-9.621 8.356a.6.6 0 0 1-.38.132h-.014.001-.014a.6.6 0 0 1-.381-.133l.001.001zm-.621 1.266 6.15 5.344-6.15 5.28zm21.6-2.441c-.24-.12-.522-.19-.821-.19H1.859a1.9 1.9 0 0 0-.835.197l.011-.005A1.86 1.86 0 0 0 0 5.855v12.172a1.86 1.86 0 0 0 1.858 1.858h20.283a1.86 1.86 0 0 0 1.858-1.858V5.855c0-.727-.419-1.357-1.029-1.66l-.011-.005z"/></svg>
    }

    return <svg className="absolute -translate-y-1/2 top-1/2 left-4" width="24" height="24" fill="none"><path className="fill-black/50" d="m21.796 20.204-4.452-4.454a8.636 8.636 0 1 0-1.594 1.594l4.456 4.457a1.126 1.126 0 1 0 1.594-1.594l-.004-.003ZM4.125 10.5a6.375 6.375 0 1 1 6.375 6.375A6.381 6.381 0 0 1 4.125 10.5Z" fill="currentColor"/></svg>
  }

  return (
    // <div className="relative w-full hidden lg:block">
    <div className="relative w-full">
        <input type="text" placeholder={label} className="w-full h-12 font-satoshi font-medium text-base bg-gray-200 rounded-full pl-12 pr-6 py-2 placeholder:text-black/50" />
        {renderIcon()}
    </div>
  );
}

export default Textfield