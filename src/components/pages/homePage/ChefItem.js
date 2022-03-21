const ChefItem = ({ chef }) => {
  return(
    <div>
      {chef.restaurantName.map((chef) => {
      <div className="chef-restaurant-item">
        <img
          src={chef.restaurantImage}
          alt="img"
          className="chef-restaurant-img"
        />{" "}
        <h3>{chef.restaurantName}</h3>
      </div>})}
    </div>
  )
  
};

export default ChefItem;
