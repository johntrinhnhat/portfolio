import { GiDiamonds } from "react-icons/gi";

export interface DiamdColor {
  color?: string;
}

const Diamond = ({ color }: DiamdColor) => {
  return <GiDiamonds color={color} />;
};

export default Diamond;
