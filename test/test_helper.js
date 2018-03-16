import React from 'react';
import jsdom from 'jsdom';
import jquery from 'jquery'; 
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { Provider } from 'react-redux';
import { createStore } from 'redux'; 
import reducers from '../src/reducers/'; 



// wherever we use JSX, we have to import React as well
// set up testing environment to run like a browser in the command line

// When we write javascript, the global scope is hte window scope
// global is what we use in node instead of window

global.document = jsdom.jsdom('<!doctype html></html> <body></body></html>');
global.window = global.document.defaultView; 

const $ = jquery(global.window); 


// set up jquery to work appropriately at the command line
// JS DOM is a simulation of the DOM runs in node
// JS DOM is what allows our dependencies to think that htey are running inside the browser when they are in fact running inside the terminal


// build renderComponent helper that should a render a given react class
// the sole purpose of this function is going to take an instance of a react component, render it, get its HTML, wrap with a jqueery element and returns a jquery wrapped element 

function renderComponent(ComponentClass) {


  const componentInstance = TestUtils.renderIntoDocument(
    <Provider  store={createStore(reducers)}>
      <ComponentClass />
    </Provider>
  )

  return $(ReactDOM.findDOMNode(componentInstance)); // produces HTML how we get HTML from a domnode 
}


// Build helper for simulating events 


// Set up chai-jquery 

export {
  expect, 
  renderComponent,
}