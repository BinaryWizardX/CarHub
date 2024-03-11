import { MouseEventHandler } from "react";


export type CustomButtonProps = {
    isDisabled?: boolean;
    btnType? : "button" | "submit" ;
    title : string;
    textStyles? : string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    containerStyles?: string;
}

export type carFilters = {
    manufacturer?: string;
    year?: number;
    model?: string;
    limit?: number;
    fuel?: string;
    make? :string;

}

export type car = {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export type ShowMoreProps = {
  pageNumber: number;
  isNext: boolean;
}
