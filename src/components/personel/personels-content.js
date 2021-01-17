import React, {Component} from "react";
import '../../assets/styles/maniPersonelContent.css'
import search_icon from '../../assets/images/search.png'
import filter_icon from '../../assets/images/filter_icon.png'
import checkUp from '../../assets/images/Mask.png'
class PersonnelContent extends Component{
    render() {
        return(
            <div className="personnel-content">
                <div className="personnel-content-header">
                    <div className="search">
                        <div className="form-group has-search">
                            <img src={search_icon} className="fa fa-search form-control-feedback" alt="search icon"/>
                            <input type="text" className="form-control" placeholder="Начните ввод для поиска сотрудника"></input>
                        </div>
                    </div>
                    <div className="personnel-filter-box">
                        <img src={filter_icon} alt="filter_icon" className="filter_icon"/>
                        {/*<span>*/}
                            Фильтры (12)
                        {/*</span>*/}
                        <img src={checkUp} className="checkUp" alt="checkUp" />
                    </div>
                    <div className="personnel-format-box">
                        Сформировать отчёт
                    </div>
                    <div className="personnel-add-box">
                        Добавить сотрудников
                    </div>
                </div>
            </div>
        )
    }
}
export default PersonnelContent;