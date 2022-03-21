export const icons = {
  spicy: "https://i.ibb.co/5FPS0NV/group-2.png",
  spicyDekstop: "https://i.ibb.co/ns4DL2R/spicy-Desktop.png",
  vegan: "https://i.ibb.co/LnVYWPv/vegan-icon.png",
  veganDesktop: "https://i.ibb.co/LnVYWPv/vegan-icon.png",
  vegiterian: "https://i.ibb.co/vwGsDJ8/vegiterian-icon.png",
  vegiterianDesktop: "https://i.ibb.co/7JJQMKQ/vegetarian-Desktop.png",
};

const restaurantImages= {
  claro: "https://i.ibb.co/k6n0kBN/claro.png",
  desktopClaro: "https://i.ibb.co/k6n0kBN/claro.png",
  bigClaro: "https://i.ibb.co/JBjqPBF/bigClaro.png",
  lumina:"https://i.ibb.co/NxM6h6G/mizlala-gret-mullet-fillet.png",
  desktopLumina:"https://i.ibb.co/grpCC4G/mizlala-gret-mullet-fillet-desktop.png",
  bigLumina: "https://i.ibb.co/fv1cd9j/big-Lumina.png",
  tiger:"https://i.ibb.co/VNB2476/screen-shot-2019-01-06-at-10-57-26.png",
  desktopTiger:"https://i.ibb.co/pzsnMrz/tiger-lili.png",
  bigTiger: "https://i.ibb.co/7YjHw5F/big-Tigerlili.png",  
  onza:"https://i.ibb.co/nMFVjvX/screen-shot-2019-01-06-at-10-55-45.png",
  bigOnza: "https://i.ibb.co/LJJtrps/bigOnza.png",
  kitchen:"https://i.ibb.co/VNB2476/screen-shot-2019-01-06-at-10-57-26.png",
  mashya: "https://i.ibb.co/prWLzj9/mashya.png",
  bigMashya:"https://i.ibb.co/PDgHQzX/big-Mashya.png"
}

const dishImages= {
  garbanzo: "https://i.ibb.co/JFZ6xC2/rectangle-3.png",
  desktopGarbanzo: "https://i.ibb.co/NNvmk03/garbanzo-Desktop.png",
  padKimao:"https://i.ibb.co/NxM6h6G/mizlala-gret-mullet-fillet.png",
  desktopPadKimao:"https://i.ibb.co/71PTfqj/padkimao-Desktop.png",
  pizza:"https://i.ibb.co/VNB2476/screen-shot-2019-01-06-at-10-57-26.png",
  desktopPizza:"https://i.ibb.co/S7fz224/pizza-Desktop.png",
  fish: "https://i.ibb.co/YWpxh3Q/screen-shot-2019-01-06-at-10-55-45-2x.png"
}

const dishes = [
  {
    key: "1",
    restaurantImage: restaurantImages.claro,
    desktopImage: restaurantImages.desktopClaro,
    bigImage: restaurantImages.bigClaro,
    restaurantName: "Claro",
    chefName: "Ran Shmueli",
    signatureName: "Pad Ki Mao",
    signatureImage: dishImages.padKimao,
    signatureDesktopImage: dishImages.desktopPadKimao,
    signatureDescription:
      "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
    icon: icons.spicy,
    price: 88,
    side: ["White Bread", "Sticky Rice"],
    changes: ["Without Onion", "Without Peanuts", "Less Spicy"],
  },
  {
    key: "2",
    restaurantImage: restaurantImages.lumina,
    desktopImage: restaurantImages.desktopLumina,
    bigImage: restaurantImages.bigLumina,
    restaurantName: "Lumina",
    chefName: "Meir Adoni",
    signatureName: "Garbanzo Frito",
    signatureImage: dishImages.garbanzo,
    signatureDesktopImage: dishImages.desktopGarbanzo,
    signatureDescription:
      "Polenta fingers, veal cheek,magic chili cured lemon cream, yellow laksa",
    icon: icons.vegiterian,
    price: 25,
    side: ["White Bread", "Sticky Rice"],
    changes: ["Without Onion", "Without Peanuts", "Less Spicy"],
  },
  {
    key: "3",
    restaurantImage: restaurantImages.tiger,
    desktopImage: restaurantImages.desktopTiger,
    bigImage: restaurantImages.bigTiger,
    restaurantName: "Tiger Lilly",
    chefName: "Yanir Green",
    signatureName: "Smoked Pizza",
    signatureImage: dishImages.pizza,
    signatureDesktopImage: dishImages.desktopPizza,
    signatureDescription:
      "Basil dough, cashew butter, demi-glace, bison & radish",
    icon: icons.vegan,
    price: 45,
    side: ["White Bread", "Sticky Rice"],
    changes: ["Without Onion", "Without Peanuts", "Less Spicy"],
  },
  {
    key: "4",
    restaurantImage: restaurantImages.onza,
    desktopImage: restaurantImages.onza,
    bigImage: restaurantImages.bigOnza,
    restaurantName: "Onza",
    chefName: "Yossi Shitrit",
    signatureName: "fish",
    signatureImage: dishImages.fish,
    signatureDesktopImage: dishImages.garbanzoDesktop,
    signatureDescription:
      "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
    icon: icons.spicy,
    price: 45,
    side: ["White Bread", "Sticky Rice"],
    changes: ["Without Onion", "Without Peanuts", "Less Spicy"],
  },
  {
    key: "5",
    restaurantImage: restaurantImages.kitchen,
    desktopImage: restaurantImages.kitchen,
    bigImage: restaurantImages.bigMashya,
    restaurantName: "Kitchen Market",
    chefName: "Yossi Shitrit",
    signatureName: "Smoked Pizza",
    signatureImage: dishImages.pizza,
    signatureDesktopImage: dishImages.desktopPizza,
    signatureDescription:
      "Basil dough, cashew butter, demi-glace, bison & radish",
    icon: icons.vegan,
    price: 45,
    side: ["White Bread", "Sticky Rice"],
    changes: ["Without Onion", "Without Peanuts", "Less Spicy"],
  },
  {
    key: "6",
    restaurantImage: restaurantImages.mashya,
    desktopImage: restaurantImages.mashya,
    bigImage: restaurantImages.bigMashya,
    restaurantName: "Mashya",
    chefName: "Yossi Shitrit",
    signatureName: "Smoked Pizza",
    signatureImage: restaurantImages.mashya,
    signatureDesktopImage: restaurantImages.mashya,
    signatureDescription:
      "Basil dough, cashew butter, demi-glace, bison & radish",
    icon: icons.vegan,
    price: 45,
    side: ["White Bread", "Sticky Rice"],
    changes: ["Without Onion", "Without Peanuts", "Less Spicy"],
  },
  {
    key: "7",
    restaurantImage: restaurantImages.claro,
    desktopImage: restaurantImages.desktopClaro,
    bigImage: restaurantImages.bigClaro ,
    restaurantName: "Claro",
    chefName: "Ran Shmueli",
    signatureName: "Red Farm",
    signatureImage: restaurantImages.claro,
    signatureDesktopImage: restaurantImages.desktopClaro,
    signatureDescription: "Tofu, Spekkoek Peanuts, Spicy Manis, Pear Yakitori",
    icon: icons.spicy,
    price: 98,
    side: ["White Bread", "Sticky Rice"],
    changes: ["Without Onion", "Without Peanuts", "Less Spicy"],
  },
  {
    key: "8",
    restaurantImage: restaurantImages.claro,
    desktopImage: restaurantImages.desktopClaro,
    bigImage: restaurantImages.bigClaro ,
    restaurantName: "Claro",
    chefName: "Ran Shmueli",
    signatureName: "Red Farm",
    signatureImage: restaurantImages.claro,
    signatureDesktopImage: restaurantImages.desktopClaro,
    signatureDescription: "Tofu, Spekkoek Peanuts, Spicy Manis, Pear Yakitori",
    icon: icons.spicy,
    price: 98,
    side: ["White Bread", "Sticky Rice"],
    changes: ["Without Onion", "Without Peanuts", "Less Spicy"],
  },
  {
    key: "9",
    restaurantImage: restaurantImages.claro,
    desktopImage: restaurantImages.desktopClaro,
    bigImage: restaurantImages.bigClaro ,
    restaurantName: "Claro",
    chefName: "Ran Shmueli",
    signatureName: "Ta Ma-La-Ko",
    signatureImage: restaurantImages.claro,
    signatureDesktopImage: restaurantImages.desktopClaro,
    signatureDescription:
      "Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce",
    icon: icons.spicy,
    price: 98,
    side: ["White Bread", "Sticky Rice"],
    changes: ["Without Onion", "Without Peanuts", "Less Spicy"],
  },
];

export default dishes;