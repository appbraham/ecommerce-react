interface ITextfield{
    label: string;
    icon?: string;
}

const Textfield = ({label, icon="search"}: ITextfield) => {
  
  const renderIcon = () => {

    if(icon === "email"){      
      return <svg className="absolute -translate-y-1/2 top-1/2 left-4" width="22" height="16" viewBox="0 0 22 16" fill="none"><path d="M20 .125H2A1.125 1.125 0 0 0 .875 1.25V14a1.875 1.875 0 0 0 1.875 1.875h16.5A1.875 1.875 0 0 0 21.125 14V1.25A1.125 1.125 0 0 0 20 .125Zm-9 7.849L4.892 2.375h12.216L11 7.974ZM7.7 8l-4.575 4.193V3.807L7.699 8Zm1.664 1.526.876.804a1.125 1.125 0 0 0 1.52 0l.876-.804 4.472 4.099H4.892l4.472-4.099ZM14.301 8l4.574-4.192v8.385L14.301 8Z" fill="black" fillOpacity=".4"/></svg>
    }

    return <svg className="absolute -translate-y-1/2 top-1/2 left-4" width="24" height="24" fill="none"><path className="fill-black/50" d="m21.796 20.204-4.452-4.454a8.636 8.636 0 1 0-1.594 1.594l4.456 4.457a1.126 1.126 0 1 0 1.594-1.594l-.004-.003ZM4.125 10.5a6.375 6.375 0 1 1 6.375 6.375A6.381 6.381 0 0 1 4.125 10.5Z" fill="currentColor"/></svg>
  }

  return (
    <div className="relative w-full">
        <input type="text" placeholder={label} className="w-full h-12 font-satoshi font-medium text-base bg-gray-200 rounded-full outline-0 pl-12 pr-6 py-2 placeholder:text-black/50 hover:ring-2 hover:ring-black" />
        {renderIcon()}
    </div>
  );
}

export default Textfield