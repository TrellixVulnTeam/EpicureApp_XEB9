const mongoose = require("mongoose");
const chef = require("./models/chef");
const dish = require("./models/dish");
const restaurant = require("./models/restaurant");

const dbInit = async () => {
  const chefCount = await chef.countDocuments();
  const dishCount = await dish.countDocuments();
  const restaurantCount = await restaurant.countDocuments();

  const restaurantImages = {
    claro: "https://i.ibb.co/k6n0kBN/claro.png",
    desktopClaro: "https://i.ibb.co/k6n0kBN/claro.png",
    bigClaro: "https://i.ibb.co/JBjqPBF/bigClaro.png",
    lumina: "https://i.ibb.co/NxM6h6G/mizlala-gret-mullet-fillet.png",
    desktopLumina:
      "https://i.ibb.co/grpCC4G/mizlala-gret-mullet-fillet-desktop.png",
    bigLumina: "https://i.ibb.co/fv1cd9j/big-Lumina.png",
    tiger: "https://i.ibb.co/VNB2476/screen-shot-2019-01-06-at-10-57-26.png",
    desktopTiger: "https://i.ibb.co/pzsnMrz/tiger-lili.png",
    bigTiger: "https://i.ibb.co/7YjHw5F/big-Tigerlili.png",
    onza: "https://i.ibb.co/nMFVjvX/screen-shot-2019-01-06-at-10-55-45.png",
    bigOnza: "https://i.ibb.co/LJJtrps/bigOnza.png",
    kitchen: "https://i.ibb.co/VNB2476/screen-shot-2019-01-06-at-10-57-26.png",
    mashya: "https://i.ibb.co/prWLzj9/mashya.png",
    bigMashya: "https://i.ibb.co/PDgHQzX/big-Mashya.png",
  };
  const dishImages = {
    garbanzo: "https://i.ibb.co/JFZ6xC2/rectangle-3.png",
    desktopGarbanzo: "https://i.ibb.co/NNvmk03/garbanzo-Desktop.png",
    padKimao: "https://i.ibb.co/NxM6h6G/mizlala-gret-mullet-fillet.png",
    desktopPadKimao: "https://i.ibb.co/71PTfqj/padkimao-Desktop.png",
    pizza: "https://i.ibb.co/VNB2476/screen-shot-2019-01-06-at-10-57-26.png",
    desktopPizza: "https://i.ibb.co/S7fz224/pizza-Desktop.png",
    fish: "https://i.ibb.co/YWpxh3Q/screen-shot-2019-01-06-at-10-55-45-2x.png",
  };
  const icons = {
    spicy: "https://i.ibb.co/5FPS0NV/group-2.png",
    spicyDekstop: "https://i.ibb.co/ns4DL2R/spicy-Desktop.png",
    vegan: "https://i.ibb.co/LnVYWPv/vegan-icon.png",
    veganDesktop: "https://i.ibb.co/LnVYWPv/vegan-icon.png",
    vegiterian: "https://i.ibb.co/vwGsDJ8/vegiterian-icon.png",
    vegiterianDesktop: "https://i.ibb.co/7JJQMKQ/vegetarian-Desktop.png",
  };
  if (chefCount === 0) {
    chef.insertMany(
      [
        {
          chefName: "Ran Shmueli",
          chefDescription:
            "Chef Ran Shmueli, one of Israel’s most respected veteran chefs, is an entrepreneur, innovator and creative visionary in Israeli cuisine. Additional culinary ventures by Shmueli include Ma’arava, a venue for large events at Kibbutz Ga’ash, and Shmueli Catering which, for the past 28 years, has specialized in high-end productions and the development of gastronomic concepts.",
          chefImage: chefsImages.ran,
        },
        {
          chefName: "Meir Adoni",
          chefDescription:
            "World renowned Chef Meir Adoni, known for his upscale restaurants around the world, has closed his two kosher restaurants in Tel Aviv: Blue Sky & Lumina.",
          chefImage: chefsImages.meir,
        },
        {
          chefName: "Yanir Green",
          chefDescription:
            "The chef, Yanir Green – who is also one of the founders of the two sister restaurants in Sarona and Ramat Hahayal – is Israeli.",
          chefImage: chefsImages.yanir,
        },
        {
          chefName: "Yossi Shitrit",
          chefDescription:
            "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including  running the kitchen in his first restaurant, the fondly-remembered  Violet, located in Moshav Udim.  Shitrit's creativity and culinary acumen  born of long experience are expressed in the every detail of each and every dish.",
          chefImage: chefsImages.yossi,
        },
      ],
      () => console.log("chefs initialized successfuly")
    );
  }
  if (dishCount === 0) {
    dish.insertMany(
      [
        {
          restaurant: "Claro",
          name: "Pad Ki Mao",
          mobileImage: dishImages.padKimao,
          desktopImage: dishImages.desktopPadKimao,
          description:
            "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
          icon: icons.spicy,
          price: 88,
          side: ["White Bread", "Sticky Rice"],
          changes: ["Without Onion", "Without Peanuts", "Less Spicy"],
        },
        {
          restaurant: "Lumina",
          name: "Garbanzo Frito",
          mobileImage: dishImages.garbanzo,
          desktopImage: dishImages.desktopGarbanzo,
          description:
            "Polenta fingers, veal cheek,magic chili cured lemon cream, yellow laksa",
          icon: icons.vegiterian,
          price: 25,
          side: ["White Bread", "Sticky Rice"],
          changes: ["Without Onion", "Without Peanuts", "Less Spicy"],
        },
        {
          restaurant: "Tiger Lilly",
          name: "Smoked Pizza",
          mobileImage: dishImages.pizza,
          desktopImage: dishImages.desktopPizza,
          description: "Basil dough, cashew butter, demi-glace, bison & radish",
          icon: icons.vegan,
          price: 45,
          side: ["White Bread", "Sticky Rice"],
          changes: ["Without Onion", "Without Peanuts", "Less Spicy"],
        },
        {
          restaurant: "Onza",
          name: "fish",
          mobileImage: dishImages.fish,
          desktopImage: dishImages.garbanzoDesktop,
          description:
            "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
          icon: icons.spicy,
          price: 45,
          side: ["White Bread", "Sticky Rice"],
          changes: ["Without Onion", "Without Peanuts", "Less Spicy"],
        },
        {
          restaurant: "Kitchen Market",
          name: "Smoked Pizza",
          mobileImage: dishImages.pizza,
          desktopImage: dishImages.desktopPizza,
          description: "Basil dough, cashew butter, demi-glace, bison & radish",
          icon: icons.vegan,
          price: 45,
          side: ["White Bread", "Sticky Rice"],
          changes: ["Without Onion", "Without Peanuts", "Less Spicy"],
        },
        {
          restaurant: "Mashya",
          name: "Smoked Pizza",
          mobileImage: restaurantImages.mashya,
          desktopImage: restaurantImages.mashya,
          description: "Basil dough, cashew butter, demi-glace, bison & radish",
          icon: icons.vegan,
          price: 45,
          side: ["White Bread", "Sticky Rice"],
          changes: ["Without Onion", "Without Peanuts", "Less Spicy"],
        },
        {
          restaurant: "Claro",
          name: "Red Farm",
          mobileImage: restaurantImages.claro,
          desktopImage: restaurantImages.desktopClaro,
          description: "Tofu, Spekkoek Peanuts, Spicy Manis, Pear Yakitori",
          icon: icons.spicy,
          price: 98,
          side: ["White Bread", "Sticky Rice"],
          changes: ["Without Onion", "Without Peanuts", "Less Spicy"],
        },
        {
          restaurant: "Claro",
          name: "Red Farm",
          mobileImage: restaurantImages.claro,
          desktopImage: restaurantImages.desktopClaro,
          description: "Tofu, Spekkoek Peanuts, Spicy Manis, Pear Yakitori",
          icon: icons.spicy,
          price: 98,
          side: ["White Bread", "Sticky Rice"],
          changes: ["Without Onion", "Without Peanuts", "Less Spicy"],
        },
        {
          restaurant: "Claro",
          name: "Ta Ma-La-Ko",
          mobileImage: restaurantImages.claro,
          desktopImage: restaurantImages.desktopClaro,
          description:
            "Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce",
          icon: icons.spicy,
          price: 98,
          side: ["White Bread", "Sticky Rice"],
          changes: ["Without Onion", "Without Peanuts", "Less Spicy"],
        },
      ],
      () => console.log("dishes initialized successfuly")
    );
  }
  if (restaurantCount === 0) {
    restaurant.insertMany(
      [
        {
          name: "Claro",
          chef: "Ran Shmueli",
          mobileImage: restaurantImages.claro,
          desktopImage: restaurantImages.desktopClaro,
          bigImage: restaurantImages.bigClaro,
        },
        {
          name: "Lumina",
          chef: "Meir Adoni",
          mobileImage: restaurantImages.lumina,
          desktopImage: restaurantImages.desktopLumina,
          bigImage: restaurantImages.bigLumina,
        },
        {
          name: "Tiger Lilly",
          chef: "Yanir Green",
          mobileImage: restaurantImages.tiger,
          desktopImage: restaurantImages.desktopTiger,
          bigImage: restaurantImages.bigTiger,
        },
        {
          name: "Onza",
          chef: "Yossi Shitrit",
          mobileImage: restaurantImages.onza,
          desktopImage: restaurantImages.onza,
          bigImage: restaurantImages.bigOnza,
        },
        {
          name: "Kitchen Market",
          chef: "Yossi Shitrit",
          mobileImage: restaurantImages.kitchen,
          desktopImage: restaurantImages.kitchen,
          bigImage: restaurantImages.bigMashya,
        },
        {
          name: "Mashya",
          chef: "Yossi Shitrit",
          mobileImage: restaurantImages.mashya,
          desktopImage: restaurantImages.mashya,
          bigImage: restaurantImages.bigMashya,
        },
      ],
      () => console.log("restaurants initialized successfuly")
    );
  }
};

const connection = mongoose.connect(process.env.DB_HOST, () => {
  console.log("db connected successfuly.");
  dbInit();
});

module.exports = connection;
