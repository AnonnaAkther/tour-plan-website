import React from 'react';

const LatestProduct = ({special}) => {
     const {PlaceName, img, Specialize} = special;
    return (
        <div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={img} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{PlaceName}</h5>
        <p class="card-text">{Specialize}</p>
      </div>
    </div>
  </div>
</div>
    );
};

export default LatestProduct;