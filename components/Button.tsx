
interface ButtonType {
    title: string;
    icon?: any;
    iconPosition?: "prev" | "next";
    buttonWidth: number;
    bgBtn?: boolean;
    onClick?: () => void;
}

export const Button:React.FC<ButtonType> = ({title, icon, iconPosition, buttonWidth, bgBtn, onClick}) => {
    return (
        <button onClick={onClick} style={{width:`${buttonWidth}px`}} className={`${bgBtn ? "bg-transparent" : "bg-[#46A358]"} hover:opacity-80 duration-300 ${icon && iconPosition ? "py-[8px]" : "py-[10px]"}  rounded-[6px] flex items-center justify-center space-x-1`}>
            {icon && iconPosition == "prev" && icon}
            <span className={`font-medium text-[12px] leading-5 text-white ${bgBtn ? "text-[#46A358]" : "text-white"} `}>{title}</span>
            {icon && iconPosition == "next" && icon}
        </button>
    )
}