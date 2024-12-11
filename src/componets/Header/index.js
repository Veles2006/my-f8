import './Header.css'
import HeaderLeftPage from '../HeaderLeftPage';
import HeaderCenterPage from '../HeaderCenterPage';
import HeaderRightPage from '../HeaderRightPage';

function Header() {
    return (
        <div className="wrapper">
            <div className="header grid wide">
                {HeaderLeftPage()}
                {HeaderCenterPage()}
                {HeaderRightPage()}
            </div>
        </div>
    );
}

export default Header