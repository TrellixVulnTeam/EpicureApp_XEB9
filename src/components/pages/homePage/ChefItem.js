const ChefItem = ({ chef }) => {
  const arr = [];
  chef.map((chefDetails) => {
    if (chefDetails.chefName === "Yossi Shitrit") {
      for (let i = 0; i < chefDetails.restaurantName.length; i++) {
        arr.push({
          name: chefDetails.restaurantName[i],
          img: chefDetails.restaurantImage[i],
        });
      }
    }
  });
  console.log(arr)
  return (
    <div>
      {arr.map((restaurant) => {
        <div className="chef-restaurant-item">
          <img
            src={restaurant.name}
            alt="img"
            className="chef-restaurant-img"
          />{" "}
          <h3>{restaurant.img}</h3>
        </div>
      })}
    </div>
  );
};

export default ChefItem;
