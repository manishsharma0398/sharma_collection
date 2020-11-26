import React from "react";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/CollectionItem";
import { selectCollection } from "../../redux/shop/shop-selector";
import "./Collection.scss";

const Collection = ({ collection }) => {
  // console.log("logging in collection page", match);
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((collectionItem) => {
          return (
            <CollectionItem key={collectionItem.id} item={collectionItem} />
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
