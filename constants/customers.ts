interface Review {
  imgURL: string;
  customerName: string;
  rating: number;
  feedback: string;
}

export const reviews: Review[] = [
  {
    imgURL: "/customer1.jpeg",
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: "/customer2.svg",
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];
