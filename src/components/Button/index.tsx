interface IButton {
    label: string;
    bgColor: string;
    fontColor: string;
    bdrRadius: string;
}

const Button = ({ label, bgColor, fontColor, bdrRadius }: IButton) => {
    return <button className={`${bgColor} ${fontColor} ${bdrRadius} px-4 py-2`}>{label}</button>;
};

export default Button