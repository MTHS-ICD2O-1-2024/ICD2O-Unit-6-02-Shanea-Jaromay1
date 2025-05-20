// Copyright (c) 2025 Shanea Jaromay All rights reserved
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
  let cookieCount = localStorage.getItem('cookieClickCount')

 //process
  if (cookieCount != null) {
    cookieCount = Number(cookieCount) + 1
  } else {
    cookieCount = 1
  }

localStorage.setItem('cookieClickCount', cookieClickCount)

 // output
  document.getElementById('answer').innerHTML = 'Cookies: ' + cookieCount
}
