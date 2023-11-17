import request from "@/utils/requestUtil";

import fake_content from "@/fake-api/fake_content.js";

import fake_productCateList from "@/fake-api/fake_productCateList.js";

// fake_recommendProductList
import fake_recommendProductList from "@/fake-api/fake_recommendProductList.js";

export function fetchContent() {
  // NOTE: error here
  
  return request({
  	method: 'GET',
  	url: '/home/content'
  })

  // return new Promise((res, rej) => {
  //   return res(fake_content);
  // });
}

export function fetchRecommendProductList(params) {
  return request({
    method: "GET",
    url: "/home/recommendProductList",
    params: params,
  });

  // return new Promise((res, rej) =>{
  //   return res(fake_recommendProductList);
  // })
}

export function fetchProductCateList(parentId) {
  return request({
  	method: 'GET',
  	url: '/home/productCateList/'+parentId,
  })

  // return new Promise((res, rej) => {
  //   return res(fake_productCateList);
  // });
}

export function fetchNewProductList(params) {
  return request({
    method: "GET",
    url: "/home/newProductList",
    params: params,
  });
}

export function fetchHotProductList(params) {
  return request({
    method: "GET",
    url: "/home/hotProductList",
    params: params,
  });
}
