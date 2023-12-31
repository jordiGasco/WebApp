'use strict';

import logger from '../utils/logger.js';
import { v4 as uuidv4 } from 'uuid';
import basketStore from '../models/basket-store.js';
import accounts from './accounts.js';
import cloudinary from 'cloudinary';

const basket = {
index(request, response) {
const basketId = request.params.id;
logger.debug('Basket id = ' + basketId);
const viewData = {
title: 'Basket',
basket: basketStore.getBasket(basketId),
};
  
  
logger.info('about to render', viewData.basket);
response.render('basket', viewData);
},
  
  
deleteProduct(request, response) {
const basketId = request.params.id;
const productId = request.params.productid;
logger.debug('Deleting Product ${productId} from Basket ${basketId}');
basketStore.removeProduct(basketId, productId);
response.redirect('/basket/' + basketId);
  
  
},
addProduct(request, response) {
const basketId = request.params.id;
const basket = basketStore.getBasket(basketId);
const newProduct = {
  id: uuidv4(),
     
      name: request.body.name,
      location: request.body.location,
      email: request.body.email,
      phone: request.body.phone,
  

};
basketStore.addProduct(basketId, newProduct);
response.redirect('/basket/' + basketId);
},





  
  
updateProduct(request, response) {
  
const basketId = request.params.id;
const productId = request.params.productid;
logger.debug("updating product " + productId);
const updatedProduct = {
id: productId,
name: request.body.name,
      location: request.body.location,
      email: request.body.email,
      phone: request.body.phone,
};
basketStore.editProduct(basketId, productId, updatedProduct);
response.redirect('/basket/' + basketId);
}
};

export default basket;