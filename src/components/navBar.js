import React, { useState } from 'react';
import { Link } from 'gatsby';
import { FaCircle } from 'react-icons/fa';

const NavBar = (props) => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const menuItems = [{ title: 'Home', page: '' },
    { title: 'Portfolio', page: 'portfolio' },
    { title: 'Products', isMenu: true, menuOptions: ['Kitchen', 'Wardrobe', 'Pooja Units'] },
    { title: 'About', page: 'about' },
    { title: 'Contact', page: 'contact' }];
  return (
    <div className="hero-head">
      <nav className="navbar is-spaced is-fixed-top">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img src="https://bulma.io/images/bulma-logo.png" alt="logo" width="112" height="28" />
            </a>
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navBarMenu" onClick={() => setShowBurgerMenu(true)}>
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>

          <div id="navBarMenu" className={`navbar-menu ${showBurgerMenu ? 'is-active' : ''}`}>
            <div className="navbar-end" style={{ marginRight: 50 }}>
              {
                menuItems.map((item, index) => (item.isMenu ? (
                  <>
                    <div className="navbar-item has-dropdown is-hoverable">
                      <span className="navbar-link is-arrowless is-size-6 has-text-weight-bold is-uppercase" style={{ padding: '0px 10px' }}>{item.title}</span>
                      <div className="navbar-dropdown">
                        {
                        item.menuOptions?.map((_menu, _idx) => (
                          <>
                            <Link className="navbar-item" activeClassName="is-active" to="/menu">
                              <span className="is-size-6" style={{ padding: '0px 10px' }}>{_menu}</span>
                            </Link>
                            { _idx !== _menu.length - 1 && <hr className="navbar-divider" />}
                          </>
                        )
                        )
                      }
                      </div>
                    </div>
                    { index !== menuItems.length - 1 && !showBurgerMenu
                    && (
                    <span className="icon" style={{ fontSize: '0.4rem', paddingTop: 5 }}>
                      <FaCircle />
                    </span>
                    )}
                  </>
                ) : (
                  <>
                    <Link className="navbar-item" activeClassName="is-active" to={`/${item.page}`}>
                      <span className="is-size-6 has-text-weight-bold is-uppercase" style={{ padding: '0px 10px' }}>{item.title}</span>
                    </Link>
                    { index !== menuItems.length - 1 && !showBurgerMenu
                    && (
                    <span className="icon" style={{ fontSize: '0.4rem', paddingTop: 5 }}>
                      <FaCircle />
                    </span>
                    )}
                  </>
                )))
              }
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
