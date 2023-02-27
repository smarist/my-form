import { ChangeEvent } from "react"

export type TextAreaProps = {
  label?: string,
  onSelectImage: (event: ChangeEvent<HTMLInputElement>) => void;
  name?: string,
  imgName?: string,
  imgSrc?: string,
}