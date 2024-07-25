
import { MenuList } from "../helpers/MenuList";

function Menu() {
  

  return (
    <div className='menu'>
      <h1 className='menuTitle'>Menu</h1>
      <div className='menuList'>
        {MenuList.map((menuItem, key) => (
          <div className='menuItem' key={key}>
            <div><img src={menuItem.image} alt={menuItem.name}/></div>
            <h3>{menuItem.name}</h3>
            <p>{menuItem.ingredients}</p>
            <p>{menuItem.price} TL</p>
        
          </div>
        ))}   
      </div>
    </div>
  );
}

export default Menu;
