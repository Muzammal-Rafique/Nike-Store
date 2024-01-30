import CardSlider from "@/components/CardSlider";
import CustomerReviews from "@/components/CustomerReview";
import Hero from "@/components/Hero";
import Stat from "@/components/Stat";
import Subscribe from "@/components/Subscribe";

export default function Home() {
  return (
    <div>
      <Hero />
      <Stat />
      <CardSlider />
      <CustomerReviews />
    </div>
  );
}
