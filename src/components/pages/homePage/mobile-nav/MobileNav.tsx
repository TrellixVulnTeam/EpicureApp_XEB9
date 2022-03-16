import React from 'react';
import NavButton from '../../../layout/button/NavButton';
import GreyCard from '../../../layout/card/GreyCard';

import './MobileNav.scss';
const MobileNav: React.FC= () => {
  return (
    <GreyCard>
    <div className='nav-btns'>
        <NavButton content={'chefs'} component={'/AllChefs'}></NavButton>
        <NavButton content={'restaurants'} component={'/AllRestaurants'}></NavButton>
    </div>
    </GreyCard>

  )
}

export default MobileNav;