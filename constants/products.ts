interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: number;
}

export const products: Product[] = [
  {
    id: 1,
    title: 'Air Jordan 1 High OG "Royal Reimagined"',
    price: 180,
    description:
      "The AJ1 forever changed the footwear game. Building on its legacy, this regal edition pairs premium Royal Blue suede with rich Black leather. Classic Nike Air branding on the tongue and insole is complemented by the Wings logo on the padded, high-cut collar. The signature star-studded outsole gets the Royal Blue treatment, letting you walk the dynasty forward with each step.",
    image: "/products/nike-1.png",
    rating: 4.5,
  },
  {
    id: 2,
    title: "Nike Dunk Low Retro",
    price: 118,
    description:
      "Created for the hardwood but taken to the streets, the Dunk Low returns with a subtly festive message and colors. It channels '80s vibes with premium leather that softens and gains vintage character with wear, while modern cushioning helps bring the comfort into the 21st century.",
    image: "/products/nike-2.png",
    rating: 4.2,
  },
  {
    id: 3,
    title: "Nike Zoom Vomero 5",
    price: 180,
    description:
      "Carve a new lane for yourself in the Zoom Vomero 5—your go-to for complexity, depth and now, easy styling. The richly layered design includes textiles, synthetic suede and plastic accents that come together to make one of the coolest sneakers of the season. A neutral palette makes them a certain win for any 'fit your wardrobe throws at you. Taking early 2000s running to modern heights, it's a true tech meets low-key love story.",
    image: "/products/nike-3.png",
    rating: 4.0,
  },
  {
    id: 4,
    title: 'Sabrina 1 "West Coast Roots"',
    price: 130,
    description:
      "Sabrina Ionescu's game is unique, hard to define and built with an undeniable craft. Her signature shoe helps you unlock your versatility with a snappy forefoot Zoom Air unit and cloud-like React foam to help keep you energized. We used insights from next-gen athletes of all genders around the world to bring grippy, best-in-class traction, reliable midfoot support and stability to the court—which every hooper needs. Built for crafty players like Sabrina, but made for anyone who's ready to put in the work to take their game to the next level.",
    image: "/products/nike-4.png",
    rating: 4.8,
  },
  {
    id: 5,
    title: "Nike Air Max 2017",
    price: 190,
    description:
      "The Nike Air Max 2017 delivers the plush sensation you love with a full-length Max Air unit. The upper is seamlessly constructed with zonal support and ventilation while molded foam wraps your mid-foot and heel for secure comfort.",
    image: "/products/nike-5.png",
    rating: 4.3,
  },
  {
    id: 6,
    title: "Air Jordan XXXVIII 'Aqua' ",
    price: 200,
    description:
      "These blue hues look even better now than they did 30 years ago. An homage to heritage, the special edition AJXXXVIII “Aqua” reimagines one of the most coveted AJ8 colorways of all time—it even has the iconic tongue patch. All the game-ready tech you expect is there too, like low-to-the-court cushioning and a secure upper that helps support every move.",
    image: "/products/nike-6.png",
    rating: 4.7,
  },
  {
    id: 7,
    title: "Jordan Jumpman Pro",
    price: 145,
    description:
      "It's time for a comeback. The 25th anniversary of the Jumpman Pro marks the return of this sleek, minimal shoe made with extra-luxe materials. With leather in the upper, plenty of Air cushioning in the sole, and just the right amount of bling, these premium kicks are a celebration of style and comfort.",
    image: "/products/nike-7.png",
    rating: 4.1,
  },
  {
    id: 8,
    title: "Jordan Stay Loyal 3",
    price: 115,
    description:
      "You gotta know where you've been to know where you're going. We took that to heart when creating the Stay Loyal 3, a modern shoe built on the Air Jordan legacy. Inside and out, they're made for versatility, with minimalist looks, cloud-like cushioning and design elements that echo the AJ4. In other words, style with proven lasting power.",
    image: "/products/nike-8.png",
    rating: 4.4,
  },
  {
    id: 9,
    title: "Nike Air More Uptempo '96",
    price: 153,
    description:
      "Bold, eye-catching and all about the A-I-R. The Nike Air More Uptempo '96 refreshes an original that has reigned supreme for more than 20 years. With a design inspired by high-flying basketball style and '90s graffiti art, these kicks can't help but turn heads off court. Plus, Air units in the heel, forefoot and midfoot provide comfortable cushioning so you feel as good as you look.",
    image: "/products/nike-9.png",
    rating: 4.6,
  },
  {
    id: 10,
    title: "Nike Air Max 270",
    price: 160,
    description:
      "Nike's first lifestyle Air Max brings you style, comfort and big attitude in the Nike Air Max 270. The design draws inspiration from Air Max icons, showcasing Nike's greatest innovation with its large window and fresh array of colors.",
    image: "/products/nike-10.png",
    rating: 4.9,
  },
  {
    id: 11,
    title: "Nike Blazer Mid '77",
    price: 93,
    description:
      "Feel the vintage vibes in every step with the Blazer Mid '77. It delivers a timeless design that’s easy to wear, with a crisp leather upper that pairs with soft suede accents for a premium feel. The earth-toned palette and a gum outsole make it look like you’ve pulled this pair from the history books.",
    image: "/products/nike-11.png",
    rating: 4.2,
  },
  {
    id: 12,
    title: "Tiger Woods '13",
    price: 150,
    description:
      "On the 10th anniversary of possibly the most popular Tiger Woods shoe ever, we’re rereleasing the iconic design as our 1st true Tiger retro, an ahead-of-its-time game-changer. It offers the unique fit and feel of Nike Free technology for all-round comfort and roaring post-putt fist pumps. The outsole helps keep you steady, so you can channel your Tiger-esque club twirls after ripping a massive tee shot down the middle of the fairway.",
    image: "/products/nike-12.png",
    rating: 4.7,
  },
  {
    id: 13,
    title: "Air Jordan 3 Fear",
    price: 250,
    description:
      "Clean and supreme, the AJ3 returns with all of its classic style and grace. Quality leather in the upper—with that luxurious elephant print texture—combines with visible Nike Air in the sole to make a comfortable, everyday icon.",
    image: "/products/nike-12.png",
    rating: 4.8,
  },
  {
    id: 14,
    title: 'Air Jordan 4 Craft "Olive"',
    price: 210,
    description:
      "Here's the '89 classic, done up in elegant earth tones. Suede, leather and textiles come together in the upper for a truly textured look. And of course, all your favorite AJ4 elements are there too—like the floating eyestays and mesh-inspired side panels.",
    image: "/products/nike-14.png",
    rating: 4.5,
  },
  {
    id: 15,
    title: "KD16",
    price: 169,
    description:
      "Kevin Durant is a true hooper. He'd be just as happy running pickup all afternoon as he would be dropping 40-pieces in the playoffs. When your avid appetite for the game can’t be satisfied, lace up in the KD16’s. Nike Air and Zoom Air work together to provide speed and stability for all four quarters, while the upper is lower and the overall load is lighter compared to the previous iteration. It's ideal for the hoopaholic who can’t say no to just one more game. This special design pays homage to KD’s long, winding journey and ability to ride out every up and down along the way",
    image: "/products/nike-15.png",
    rating: 4.6,
  },
  {
    id: 16,
    title: 'Air Jordan 13 "Wheat"',
    price: 175,
    description:
      "Celebrate 25 years of the AJ13 with a colorway bring-back. Dimpled full-grain White leather gets a soft, synthetic Wheat suede treatment for a boost of elegance. Capping it off, the green cat's eye emblem on the heel and panther paw-inspired outsole honor MJ's slick 'Black Cat' alter ego.",
    image: "/products/nike-16.png",
    rating: 4.4,
  },
  {
    id: 17,
    title: "Nike M2K Tekno",
    price: 120,
    description:
      "The Nike M2K Tekno Shoe draws inspiration from the Monarch franchise and pushes it into today with a futuristic heel counter and plush tongue for additional comfort.",
    image: "/products/nike-17.png",
    rating: 4.1,
  },
  {
    id: 18,
    title: "Nike Air Max AP",
    price: 105,
    description:
      "With its sleek, sporty design, the Nike Air Max AP lets you bridge past and present in first-class comfort. Flashes of heritage detailing nod to the Air Max 97 while the streamlined upper and softer midsole give it a modern edge. The low-profile design with plush padded collar, airy mesh and comfort sockliner begs to be worn with any outfit.",
    image: "/products/nike-18.png",
    rating: 4.0,
  },
  {
    id: 19,
    title: "Zion 3 'Gen Zion'",
    price: 140,
    description:
      "Take the classic combo of black and white, and infuse it with some youthful energy. The result: This special edition Zion 3. Check out those colorful pops. Feel the court-ready tech. And that icy outsole? It’s over.",
    image: "/products/nike-19.png",
    rating: 4.2,
  },
  {
    id: 20,
    title: "Nike Air Penny 2 x Stüssy",
    price: 200,
    description:
      "For Penny devotees and those just looking to refresh their off-court game, we've teamed up with Stüssy to bring you the assist your outfit needs. Echoing Stüssy's coveted style, it brings the magic with hemp canvas and synthetic suede. The neutral upper keeps them easy to style, while visible Nike Air cushioning delivers all-star comfort.",
    image: "/products/nike-20.png",
    rating: 4.7,
  },
  {
    id: 21,
    title: 'Luka 2 "Caves"',
    price: 130,
    description:
      "Slovenia—Luka’s home country—is the first nation to be declared a “Green Destination of the World” in its entirety. Celebrate its status with this special-edition Luka 2. The colorway is inspired by Slovenia’s stunning underground caves. The shoe’s mindful construction (each pair is made with at least 20% recycled material by weight) honors the country’s ongoing dedication to sustainability.",
    image: "/products/nike-21.png",
    rating: 4.5,
  },
];
