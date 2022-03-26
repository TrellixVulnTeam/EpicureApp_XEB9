import React from "react";
import BeigeCard from "../../layout/card/BeigeCard";
import { connect } from "react-redux";
import { addData } from "../../../store/action";
import './AllChefs.scss';
import { Link } from "react-router-dom";

const ChefsGrid: React.FC<{ addData: any; data: any }> = () => {
  return (
    <div className="restaurants-grid">
      {/* {addData.payload.map((item) => {
        return (
          <Link to={`/ChefPage/${item.chefName}`} className="to-chef-btn"><BeigeCard
            key={item.key}
            title={item.chefName}
            detail={""}
            img={item.chefImage}
          ></BeigeCard></Link>
        );
      })} */}
    </div>
  );
};
const mapStateToProps = (state: { data: any }) => ({ data: state.data });

const mapDispatchToProps = (
  dispatch: (arg0: { type: string; payload: any }) => any
) => {
  return {
    addData: () => dispatch(addData),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ChefsGrid);
