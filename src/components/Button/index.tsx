interface IButton {
    label: string;
    bgColor: string;
    fontColor: string;
    bdrRadius: string;
}

const Button = ({ label, bgColor, fontColor, bdrRadius }: IButton) => {
    return <button className={`${bgColor} ${fontColor} ${bdrRadius} px-14 py-2 w-full h-[52px] sm:w-fit`}>{label}</button>;
};

export default Button