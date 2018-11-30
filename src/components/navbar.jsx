import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Drinks Selected{" "}
          <span className="badge badge-pill badge-secondary">
            {this.props.totalCounters}
          </span>
        </a>
        <h1>TAP ROOM</h1>
        <a class="navbar-brand" href="#">
          Total Drinks Purchased{" "}
          <span className="badge badge-pill badge-secondary">
            {this.props.onIncrement}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
// function NavBar(){
//   var styles = {
//     borderBottom: '3px solid #dcdcdc',

//   };

//   var stylesRight = {
//     float: 'right',
//     position: 'absolute',
//     right: '20px',
//     top: '10px',
//   };

//   return (
//     <div style={styles}>
//       <NavBarButton/>
//       <div style={stylesRight}><NavBarSearch/></div>
//     </div>
//   );
// }

// export default NavBar;
