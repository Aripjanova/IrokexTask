import React, {Component} from 'react';
import checkUp from '../../assets/images/Mask.png'
import '../../assets/styles/menu.css'
import main_icon from '../../assets/images/3.png'
class Menu extends Component{
    constructor(props) {
        super(props);
        this.state={
            company_menu:false,
            admin_menu:false
        }
       // this.state={
       //      visible:false
       //  }
        this.menuDisplay=this.menuDisplay.bind(this)
        this.adminMenu=this.adminMenu.bind(this)
    }
    menuDisplay(){
        this.setState({
            company_menu:!this.state.company_menu
        })
        console.log(this.state.company_menu)
    }
    adminMenu(){
        this.setState({
            admin_menu:!this.state.admin_menu
        })
        console.log(this.state.admin_menu)
    }
    render() {
        const company_menu = this.state.company_menu? {display:"block"}:{display:"none"};
        const admin_menu = this.state.admin_menu? {display:"block"}:{display:"none"};

        return(
            <div className="menu-content">
                <ul className="menu">
                   <li  className="menu-title "  onClick={this.menuDisplay}>
                       <span className="text-format">Company Name
                       <img className="icon-img-left" src={checkUp} alt="check-up"/>
                       </span>
                       <ul style={company_menu}>
                           <li>
                               <a>
                                   <img className="icon-img" src={main_icon}></img>
                                   Главная
                               </a>
                           </li>
                           <li>
                               <a>
                                   <img className="icon-img" src={main_icon}></img>
                                   Запросы
                               </a>
                           </li>
                           <li>
                               <a>
                                   <img className="icon-img" src={main_icon}></img>
                                   Календарь
                               </a>
                           </li>
                           <li>
                               <a>
                                   <img className="icon-img" src={main_icon}></img>
                                   База знаний
                               </a>
                           </li>
                           <li>
                               <a>
                                   <img className="icon-img" src={main_icon}></img>
                                   Новости
                               </a>
                           </li>
                           <li>
                               <a>
                                   <img className="icon-img" src={main_icon}></img>
                                   Задачи
                               </a>
                           </li>
                           <li>
                               <a>
                                   <img className="icon-img" src={main_icon}></img>
                                   Чаты
                               </a>
                           </li>

                       </ul>
                   </li>
                    <li  className="menu-title "  onClick={this.adminMenu}>
                       <span className="text-format">Администратор
                       <img className="icon-img-left" src={checkUp} alt="check-up"/>
                       </span>
                        <ul style={admin_menu} >
                            <li>
                                <a>
                                    <img className="icon-img" src={main_icon}></img>
                                    Статистика компаний
                                </a>
                            </li>
                            <li>
                                <a>
                                    <img className="icon-img" src={main_icon}></img>
                                    Структура компаний
                                </a>
                            </li>
                            <li>
                                <a>
                                    <img className="icon-img" src={main_icon}></img>
                                    Element Text
                                </a>
                            </li>
                            <li>
                                <a>
                                    <img className="icon-img" src={main_icon}></img>
                                   Сотрудники
                                </a>
                            </li>
                            <li>
                                <a>
                                    <img className="icon-img" src={main_icon}></img>
                                  База знаний
                                </a>
                            </li>
                            <li>
                                <a>
                                    <img className="icon-img" src={main_icon}></img>
                                    Новости
                                </a>
                            </li>
                            <li>
                                <a>
                                    <img className="icon-img" src={main_icon}></img>
                                    Настройки
                                </a>
                            </li>
                            <li>
                                <a>
                                    <img className="icon-img" src={main_icon}></img>
                                    Служба поддержки
                                </a>
                            </li>
                        </ul>
                    </li>

                </ul>

            </div>
        )
    }
}
export default Menu;