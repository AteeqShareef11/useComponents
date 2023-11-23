import Image from "next/image";
import LogoPic from "../images/logos/logo.png"

export function Logo(props) {
  return (
    <Image style={{ width: "50%" }} src={LogoPic} alt="" />
  )
}
