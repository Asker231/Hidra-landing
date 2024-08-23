import { ButtonHTMLAttributes, ReactNode } from "react";

type TButton = "S"|"B"

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{
    children:ReactNode,
    typeB:TButton

}