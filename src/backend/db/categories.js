import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Men_Collection",
    description:
      "Check out our best men collection",
      image:"https://images.pexels.com/photos/5319580/pexels-photo-5319580.jpeg?auto=compress&cs=tinysrgb&w=600",
      discount:"30-60% OFF"
  },
  {
    _id: uuid(),
    categoryName: "Women_Collection",
    description:
      "Check out our best women collection",
      image:"https://images.pexels.com/photos/4734810/pexels-photo-4734810.jpeg?auto=compress&cs=tinysrgb&w=600",
      discount:"30-60% OFF"
  },
  {
    _id: uuid(),
    categoryName: "Kids_Collection",
    description:
      "Check out our best kids collection",
      image:"https://images.pexels.com/photos/8224757/pexels-photo-8224757.jpeg?auto=compress&cs=tinysrgb&w=600",
      discount:"30-60% OFF"
  },
];
