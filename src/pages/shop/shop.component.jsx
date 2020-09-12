import React from 'react';
import CollectionsOverviewComponent from '../../components/collections-overview/collections-overview.component';
import { Route } from 'react-router-dom';
import collectionPage from '../collection/collection.component';


const ShopPage = (match) => (
  <div className='shop-page'>
    <Route path={`${match.path}`} component={CollectionsOverviewComponent}/>
    <Route path={`${match.path}/:collectionId`} component={collectionPage}/>
  </div>
);


export default ShopPage;
