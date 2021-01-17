import React, {Component} from 'react'
import logo from '../../assets/images/ Logo.jpg'
import '../../assets/styles/header.css'
import bell from '../../assets/images/bell.png'
import avatar from '../../assets/images/21.png'
import mask from '../../assets/images/Mask.png'
class Header extends Component{
    render() {
        return(
            <div className="header-content">
                <div className="logo">
                 <img src={logo} alt="logo"/>
                </div>
              <div className="user-box-content">
                  <div className="driven">
                  </div>
                  <div >
                      <div className="message-box text14 text-color-grey text-bold">
                        <img className="bell" src={bell} alt="bel"/>
                      Сообщений нет
                      </div>
                      {/*<div className="message-box-driven">*/}
                      {/*</div>*/}
                  </div>
                  <div className="driven">
                  </div>
                  <div className="user-box">
                        <div className="user">
                            <span className="text-color-black text-bold text14">
                                Александров Александр
                            </span>
                            <span className="text14 text-color-grey">
                               Frontend Разработчик
                            </span>
                        </div>
                      <span className="avatar">
                        <img src={avatar} alt="header avatar"/>
                      </span>
                      <img src={mask} alt="check up"/>

                  </div>
              </div>
            </div>
        )
    }
}
export default Header;