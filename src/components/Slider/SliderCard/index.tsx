import type { FC } from "react";
import "./SliderCard.scss";

type SliderCardProps = {
  link: string;
  img: string;
  title: string;
};

const SliderCard: FC<SliderCardProps> = ({ img, title, link }) => {
  return (
    <div className="img-wrapper">
      <a href={link} className="img-link">
        <img src={img} alt={title} className="img-slide" />
      </a>
    </div>
  );
};

export default SliderCard;
