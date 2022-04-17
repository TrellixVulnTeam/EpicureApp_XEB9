import BeigeCard from "../../layout/card/BeigeCard";
import { useSelector } from "react-redux";
import "./AllRestaurants.scss";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../store/store";
import { Fragment, useEffect, useState } from "react";
import { fetchRestaurants } from "../../../store/RestaurantDataSlice";

const RestaurantsGrid = ({ filter }: any) => {
  const [pageNumber, setPageNumber] = useState(1);

  const dispatch = useAppDispatch();
  const { restaurants } = useSelector((state: any) => state.restaurants);

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, []);

  const passFilter = (item: any) => {
    switch (filter) {
      case "all":
        return true;
      case "new":
        if (item.isNewRestaurant) {
          return true;
        } else return false;
      case "popular":
        if (item.isPopular) {
          return true;
        } else return false;
      case "open":
        const opening:number = item.openingHour.split(":")[0] * 1;
        const closing:number = item.closingHour.split(":")[0] * 1;
        const date= new Date();
        const now:number = date.getHours();
        if (now >= opening && now <= closing) {
          return true;
        } else return false;
      default:
        return true;
    }
  };

  const filteredArr: object[] = restaurants.filter((item: any) => passFilter(item));
  const numberOfPages:number = Math.ceil(filteredArr.length / 6);
  let pages = [];
  for (let page = 1; page <= numberOfPages; page++) {
    pages.push(
      <Link
        key={page}
        className="page"
        to={`/restaurants/${page}`}
        onClick={() => setPageNumber(page)}>
        {page}
      </Link>
    );
  }

  return (
    <Fragment>
      <div className="restaurants-grid">
        {filteredArr.length <= 6 &&
          filteredArr.map((item: any) => (
            <Link to={`/restaurant/${item.name}`} className="to-restaurant-btn">
              <BeigeCard
                key={item.name}
                title={item.name}
                detail={item.chef}
                img={item.mobileImage}
              ></BeigeCard>
            </Link>
          ))}
      </div>
      <Fragment>
        {filteredArr.length > 6 && (
          <Fragment>
            <div className="restaurants-grid">
              {filteredArr
                .slice(pageNumber * 6 - 6, pageNumber * 6)
                .map((item: any) => (
                  <Link
                    to={`/restaurant/${item.name}`}
                    className="to-restaurant-btn"
                  >
                    <BeigeCard
                      key={item.name}
                      title={item.name}
                      detail={item.chef}
                      img={item.mobileImage}
                    ></BeigeCard>
                  </Link>
                ))}
            </div>
            <div className="pagination">{pages}</div>
          </Fragment>
        )}
      </Fragment>
    </Fragment>
  );
};
export default RestaurantsGrid;
