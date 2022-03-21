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

const chefsImages= {
  yossi: "https://i.ibb.co/KXj8k3Z/rectangle.png",
  ran: "https://i.ibb.co/QnkcsMp/ran.jpg", 
  yanir: "https://i.ibb.co/J7bGzS2/maxresdefault.jpg", 
  meir: "https://i.ibb.co/D5nyxLX/mair.jpg"
}

const chefs = [
  {
    key: "1",    
    chefName: "Ran Shmueli",
    chefDescription: "Chef Ran Shmueli, one of Israel’s most respected veteran chefs, is an entrepreneur, innovator and creative visionary in Israeli cuisine. Additional culinary ventures by Shmueli include Ma’arava, a venue for large events at Kibbutz Ga’ash, and Shmueli Catering which, for the past 28 years, has specialized in high-end productions and the development of gastronomic concepts.",
    chefImage: chefsImages.ran,    
    restaurantName: ["Claro"],
    restaurantImage: [restaurantImages.claro],
    desktopImage: [restaurantImages.desktopClaro],
    bigImage: [restaurantImages.bigClaro],
  },
  {
    key: "2",    
    chefName: "Meir Adoni",
    chefDescription: "World renowned Chef Meir Adoni, known for his upscale restaurants around the world, has closed his two kosher restaurants in Tel Aviv: Blue Sky & Lumina.",
    chefImage: chefsImages.meir,    
    restaurantName: ["Lumina"],
    restaurantImage: [restaurantImages.lumina],    
    desktopImage: [restaurantImages.desktopLumina],
    bigImage: [restaurantImages.bigLumina],

  },
  {
    key: "3", 
    chefName: "Yanir Green",
    chefDescription: "The chef, Yanir Green – who is also one of the founders of the two sister restaurants in Sarona and Ramat Hahayal – is Israeli.",
    chefImage: chefsImages.yanir,    
    restaurantName: ["Tiger Lilly"],
    restaurantImage: [restaurantImages.tiger],
    desktopImage: [restaurantImages.desktopTiger],
    bigImage: [restaurantImages.bigTiger],
   
  },
  {
    key: "4",
    chefName: "Yossi Shitrit",
    chefDescription:
      "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including  running the kitchen in his first restaurant, the fondly-remembered  Violet, located in Moshav Udim.  Shitrit's creativity and culinary acumen  born of long experience are expressed in the every detail of each and every dish.",
    chefImage: chefsImages.yossi,    
    restaurantName: ["Onza", "Kitchen Market", "Mashya"],    
    restaurantImage: [restaurantImages.fish, restaurantImages.pizza, restaurantImages.mashya],    
    desktopImage: [restaurantImages.fish, restaurantImages.pizza, restaurantImages.mashya], 
    bigImage:  [restaurantImages.bigOnza, restaurantImages.bigMashya, restaurantImages.bigMashya], 
  },
];


export default chefs;