"use client";
import type { FC } from "react";
import "./CategoryCard.scss";

type CategoryCardProps = {
  title: string;
  link: string;
  children: React.ReactNode;
};

const CategoryCard: FC<CategoryCardProps> = ({ title, link, children }) => {
  return (
    <div className="cat-card">
      <a href={link} target="_blank" className="cat-link">
        {children}
        <h2 className="cat-title">{title}</h2>
      </a>
    </div>
  );
};

export default CategoryCard;
