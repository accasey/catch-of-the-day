import React from "react";

class StorePicker111 extends React.Component {
  render() {
    // A render method can only return 1 parent element, so no siblings..
    // Use React.Fragment or <>
    // You cannot return a comment and an element, so embed the comment
    return (
      <>
        <p>Hello</p>
        <form className="store-selector">
          {/* curly brackets means JavaScript in React */}
          <h2>Please enter a store</h2>
        </form>
      </>
    );
    // return React.createElement('p', { className: 'hey'}, 'Heyyyoooo');
    // painful when there are nested elements.
  }
}

class StorePicker extends React.Component {
  render() {
    return (
      <form className="store-selector">
        <h2>Please enter a store</h2>
        <h3></h3>
        <input type="text" required placeholder="Store Name" />
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker;
