import React from 'react'
import { WrapperImg,WrapperProduct } from './styles'
import {useNavigate} from "react-router-dom"
const TypeProduct = ({name}) => {

const handleTypeImg = () =>{
  switch (name) {
    case "TV":
      return "https://sudospaces.com/viomivietnam-vn/2022/05/tivi-xiaomi-mi-tv-p1-55-inch-hang-xuat-eu-chinh-hang-gia-re-nhat-1-large.jpg"
    case "Điện thoại":
      return "https://cdn.tgdd.vn/Products/Images/42/303833/iphone-15-pro-blue-thumbnew-600x600.jpg"
    case "Ipad":
      return "https://laptop88.vn/media/news/2910_hinhanhmaytinhxachtay4.jpg"
    case "Tai nghe":
    return "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lld91enbttqg1f"
    case "Chuột":
      return "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ll0wnc8fmevf01"
    case "Ốp điện thoại":
      return "https://down-vn.img.susercontent.com/file/sg-11134201-7rbmb-lq0vx4pf5plqb6"
    case "Loa":
      return "https://down-vn.img.susercontent.com/file/c10040b41e8cbf54a56c745da46d278f"
    case "Bàn phím":
      return "https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lo4ypi6wvu2f6c"
    case "Tủ lạnh":
      return "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lq8rn9f3zebbb2"
    case "Máy ảnh":
      return "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmzwydz9ucs38c"
    case "Máy hút bụi":
      return "https://down-vn.img.susercontent.com/file/77488de0e587dc5bc92e1a9ff910c853"
    case "Quạt tản nhiệt":
      return "https://down-vn.img.susercontent.com/file/30ee1253fed77dd92f1162d2d4629902"
    default:
      return  "https://cdn.tgdd.vn/Products/Images/42/303833/iphone-15-pro-blue-thumbnew-600x600.jpg"
  }
}
const imgType = handleTypeImg()
// console.log("imgType", imgType)
const navigate = useNavigate()

const handleNavigateType = (typeProduct) =>{
  navigate(`/product/${typeProduct.normalize('NFD').replace(/[\u0300-\u036F]/g,'')?.replace(/ /g,'_')}`, {state: typeProduct}) //giúp bỏ dấu và chuyển dấu cách bằng dấu _
}
  return (
    <WrapperProduct onClick={() => handleNavigateType(name)}>
      <WrapperImg src={ imgType }></WrapperImg>
      <div>{name}</div>
    </WrapperProduct>
  )
}

export default TypeProduct