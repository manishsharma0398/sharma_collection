import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop-selector";
import PreviewCollection from "../preview-collection/PreviewCollection";

import "./CollectionOverview.scss";

const CollectionOverview = ({ shopCollections }) => {
  return (
    <div className="collections-overview">
      {shopCollections.map(({ id, ...otherProperties }) => (
        <PreviewCollection key={id} {...otherProperties} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  shopCollections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
