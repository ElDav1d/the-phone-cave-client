import {
  Galaxy_S7,
  Honor_10,
  IPhone_7,
  Moto_G6,
  Nokia_7,
  P10_Lite,
  Xiaomi_MI_A2,
  ZenPhone_5,
} from "./images";

function Image({ imageFileName, altText }) {
  const image = imageFileName.split(".")[0];

  const images = {
    Galaxy_S7,
    Honor_10,
    IPhone_7,
    Moto_G6,
    Nokia_7,
    P10_Lite,
    Xiaomi_MI_A2,
    ZenPhone_5,
  };
  return <img src={images[image]} alt={altText} />;
}

export default Image;
