import "./pages/homePage/HomePage.scss";
import claro from "../assets/claro.png";
import lumina from "../assets/mizlala-gret-mullet-fillet.png";
import tiger from "../assets/screen-shot-2019-01-06-at-10-57-26.png";
import mashya from "../assets/mashya.png";
import padKiMao from "../assets/rectangle_2.png";
import garbanzo from "../assets/rectangle_3.png";
import pizza from "../assets/screen-shot-2019-01-06-at-10-57-26.png";
import vegiterian from "../assets/vegiterian-icon.png";
import spicy from "../assets/group-2.png";
import vegan from "../assets/vegan-icon.png";
import veganDesktop from "../assets/veganDesktop.png";
import spicyDekstop from "../assets/spicyDesktop.png";
import vegiterianDesktop from "../assets/vegetarianDesktop.png";
import fish from "../assets/screen-shot-2019-01-06-at-10-55-45.png";
import yossi from "../assets/rectangle.png";
import yanir from "../assets/maxresdefault.jpeg";
import meir from "../assets/mair.jpeg";
import ran from "../assets/ran.jpeg";
import claroDesktop from "../assets/clarodesktop.png";
import luminaDesktop from "../assets/mizlala-gret-mullet-fillet-desktop.png";
import garbanzoDesktop from "../assets/garbanzoDesktop.png";
import pizzaDesktop from "../assets/pizzaDesktop.png";
import padkimaoDesktop from "../assets/padkimaoDesktop.png";
import tigerDesktop from "../assets/tiger-lili.png";
import bigClaro from "../assets/bigClaro.png";
import bigTigerlili from "../assets/bigTigerlili.png";
import bigLumina from "../assets/bigLumina.png";
import bigOnza from "../assets/bigOnza.png";
import bigMashya from "../assets/bigMashya.png";

import { Fragment } from "react";

export const icons = {
  spicy: spicy,
  spicyDekstop: spicyDekstop,
  vegan: vegan,
  veganDesktop: veganDesktop,
  vegiterian: vegiterian,
  vegiterianDesktop: vegiterianDesktop,
};

const dummy = [
  {
    key: "1",
    restaurantImage: claro,
    desktopImage: claroDesktop,
    bigImage: bigClaro,
    restaurantName: "Claro",
    chefName: "Ran Shmueli",
    chefDescription: "Chef Ran Shmueli, one of Israel’s most respected veteran chefs, is an entrepreneur, innovator and creative visionary in Israeli cuisine. Additional culinary ventures by Shmueli include Ma’arava, a venue for large events at Kibbutz Ga’ash, and Shmueli Catering which, for the past 28 years, has specialized in high-end productions and the development of gastronomic concepts.",
    chefImage: ran,
    signatureName: "Pad Ki Mao",
    signatureImage: padKiMao,
    signatureDesktopImage: padkimaoDesktop,
    signatureDescription:
      "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
    icon: icons.spicy,
    price: 88,
    side: ['White Bread', 'Sticky Rice'], 
    changes: ['Without Onion', 'Without Peanuts', 'Less Spicy'],
  },
  {
    key: "2",
    restaurantImage: lumina,    
    desktopImage: luminaDesktop,
    bigImage: bigLumina,
    restaurantName: "Lumina",
    chefName: "Meir Adoni",
    chefDescription: "World renowned Chef Meir Adoni, known for his upscale restaurants around the world, has closed his two kosher restaurants in Tel Aviv: Blue Sky & Lumina.",
    chefImage: meir,
    signatureName: "Garbanzo Frito",
    signatureImage: garbanzo,
    signatureDesktopImage: garbanzoDesktop,
    signatureDescription:
      "Polenta fingers, veal cheek,magic chili cured lemon cream, yellow laksa",
    icon: icons.vegiterian,
    price: 25,
    side: ['White Bread', 'Sticky Rice'], 
    changes: ['Without Onion', 'Without Peanuts', 'Less Spicy'],
  },
  {
    key: "3",
    restaurantImage: tiger,
    desktopImage: tigerDesktop,
    bigImage: bigTigerlili,
    restaurantName: "Tiger Lilly",
    chefName: "Yanir Green",
    chefDescription: "The chef, Yanir Green – who is also one of the founders of the two sister restaurants in Sarona and Ramat Hahayal – is Israeli.",
    chefImage: yanir,
    signatureName: "Smoked Pizza",
    signatureImage: pizza,
    signatureDesktopImage: pizzaDesktop,
    signatureDescription:
      "Basil dough, cashew butter, demi-glace, bison & radish",
    icon: icons.vegan,
    price: 45,
    side: ['White Bread', 'Sticky Rice'], 
    changes: ['Without Onion', 'Without Peanuts', 'Less Spicy'],
  },
  {
    key: "4",
    restaurantImage: fish,
    desktopImage: fish,
    bigImage: bigOnza,
    restaurantName: "Onza",
    chefName: "Yossi Shitrit",
    chefDescription:
      "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including  running the kitchen in his first restaurant, the fondly-remembered  Violet, located in Moshav Udim.  Shitrit's creativity and culinary acumen  born of long experience are expressed in the every detail of each and every dish.",
    chefImage: yossi,
    signatureName: "fish",
    signatureImage: fish,
    signatureDesktopImage: garbanzoDesktop,
    signatureDescription:
      "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
    icon: icons.spicy,
    price: 45,
    side: ['White Bread', 'Sticky Rice'], 
    changes: ['Without Onion', 'Without Peanuts', 'Less Spicy'],
  },
  {
    key: "5",
    restaurantImage: pizza,
    desktopImage: pizza,
    bigImage: bigMashya,
    restaurantName: "Kitchen Market",
    chefName: "Yossi Shitrit",
    chefDescription:
      "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including  running the kitchen in his first restaurant, the fondly-remembered  Violet, located in Moshav Udim.  Shitrit's creativity and culinary acumen  born of long experience are expressed in the every detail of each and every dish.",
    chefImage: yossi,
    signatureName: "Smoked Pizza",
    signatureImage: pizza,
    signatureDesktopImage: pizzaDesktop,
    signatureDescription:
      "Basil dough, cashew butter, demi-glace, bison & radish",
    icon: icons.vegan,
    price: 45,
    side: ['White Bread', 'Sticky Rice'], 
    changes: ['Without Onion', 'Without Peanuts', 'Less Spicy'],
  },
  {
    key: "6",
    restaurantImage: mashya,
    desktopImage: mashya,
    bigImage: bigMashya,
    restaurantName: "Mashya",
    chefName: "Yossi Shitrit",
    chefDescription:
      "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including  running the kitchen in his first restaurant, the fondly-remembered  Violet, located in Moshav Udim.  Shitrit's creativity and culinary acumen  born of long experience are expressed in the every detail of each and every dish.",
    chefImage: yossi,
    signatureName: "Smoked Pizza",
    signatureImage: mashya,
    signatureDesktopImage: mashya,
    signatureDescription:
      "Basil dough, cashew butter, demi-glace, bison & radish",
    icon: icons.vegan,
    price: 45,
    side: ['White Bread', 'Sticky Rice'], 
    changes: ['Without Onion', 'Without Peanuts', 'Less Spicy'],
  },
  {
    key: "7",
    restaurantImage: claro,
    desktopImage: claroDesktop,
    bigImage: bigClaro,
    restaurantName: "Claro",
    chefName: "Ran Shmueli",
    chefDescription: "Chef Ran Shmueli, one of Israel’s most respected veteran chefs, is an entrepreneur, innovator and creative visionary in Israeli cuisine. Additional culinary ventures by Shmueli include Ma’arava, a venue for large events at Kibbutz Ga’ash, and Shmueli Catering which, for the past 28 years, has specialized in high-end productions and the development of gastronomic concepts.",
    chefImage: ran,
    signatureName: "Red Farm",
    signatureImage: claro,
    signatureDesktopImage: claroDesktop,
    signatureDescription:
      "Tofu, Spekkoek Peanuts, Spicy Manis, Pear Yakitori",
    icon: icons.spicy,
    price: 98,
    side: ['White Bread', 'Sticky Rice'], 
    changes: ['Without Onion', 'Without Peanuts', 'Less Spicy'],
  },
  {
    key: "8",
    restaurantImage: claro,
    desktopImage: claroDesktop,
    bigImage: bigClaro,
    restaurantName: "Claro",
    chefName: "Ran Shmueli",
    chefDescription: "Chef Ran Shmueli, one of Israel’s most respected veteran chefs, is an entrepreneur, innovator and creative visionary in Israeli cuisine. Additional culinary ventures by Shmueli include Ma’arava, a venue for large events at Kibbutz Ga’ash, and Shmueli Catering which, for the past 28 years, has specialized in high-end productions and the development of gastronomic concepts.",
    chefImage: ran,
    signatureName: "Red Farm",
    signatureImage: claro,
    signatureDesktopImage: claroDesktop,
    signatureDescription:
      "Tofu, Spekkoek Peanuts, Spicy Manis, Pear Yakitori",
    icon: icons.spicy,
    price: 98,
    side: ['White Bread', 'Sticky Rice'], 
    changes: ['Without Onion', 'Without Peanuts', 'Less Spicy'],
  },
  {
    key: "9",
    restaurantImage: claro,
    desktopImage: claroDesktop,
    bigImage: bigClaro,
    restaurantName: "Claro",
    chefName: "Ran Shmueli",
    chefDescription: "Chef Ran Shmueli, one of Israel’s most respected veteran chefs, is an entrepreneur, innovator and creative visionary in Israeli cuisine. Additional culinary ventures by Shmueli include Ma’arava, a venue for large events at Kibbutz Ga’ash, and Shmueli Catering which, for the past 28 years, has specialized in high-end productions and the development of gastronomic concepts.",
    chefImage: ran,
    signatureName: "Ta Ma-La-Ko",
    signatureImage: claro,
    signatureDesktopImage: claroDesktop,
    signatureDescription:
      "Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce",
    icon: icons.spicy,
    price: 98,
    side: ['White Bread', 'Sticky Rice'], 
    changes: ['Without Onion', 'Without Peanuts', 'Less Spicy'],
  },
];

export const DummyData = () => {
  return <Fragment>{dummy}</Fragment>;
};

export default dummy;
