// Copyright (c) 2025 Ain Jeong All rights reserved
//
// Created by: Shanea Jaromay
// Created on: May 2025

// This file contains the JS functions for index.html

"use-strict"

/**
* This function calculate, doing multiplication
*/
// eslint-disable-next-line no-unused-vars
function cookieClicker () {
  //input 
  let numberOfCoockies = 0
  let coockieCount = localStorage.getItem('cookieClick')

  //process
  if (cookieClick) {
    coockieCount = Number(coockieCount) + 1
  } else {
    coockieCount = 1
  }

  // output

  document.getElementById('answer').innerHTML = 'Coockies: ' + coockieCount
}
