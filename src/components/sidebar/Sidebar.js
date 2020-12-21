import React from 'react'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import './Sidebar.css';
import IconButton from "@material-ui/core/IconButton";
import WidgetsIcon from '@material-ui/icons/Widgets';
import Singleitem from './sidebartab/Singleitem'
import EqualizerRoundedIcon from '@material-ui/icons/EqualizerRounded';
import PieChartRoundedIcon from '@material-ui/icons/PieChartRounded';
import DateRangeRoundedIcon from '@material-ui/icons/DateRangeRounded';
import Avatar from '@material-ui/core/Avatar'
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded';
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__heading">
                <div className="sidebar__heading__main">
                <img src="./images/logo.png" alt="finacular"/>
                <h4>Finacular</h4>
                </div>
                
                <IconButton>
                <ArrowBackIosRoundedIcon className="sidebar__heading__icon"/>
                </IconButton>
            </div>
            <div className="sidebar__items">
                <Singleitem Icon={WidgetsIcon} text="Dashboard" active/>
                <Singleitem Icon={PieChartRoundedIcon} text="Assets"/>
                <Singleitem Icon={EqualizerRoundedIcon} text="Tracker"/>
                <Singleitem Icon={DateRangeRoundedIcon} text="Planning & Advisory"/>
            </div>
            <div className="sidebar__profile">
                    <Avatar src="./images/shan.jpg" className="sidebar__profile__avatar"/>
                    <h3>Shantanu M</h3>
                    <IconButton>
                    <KeyboardArrowDownRoundedIcon className="sidebar__profile__icon"/></IconButton>

            </div>
            
        </div>
    )
}

export default Sidebar
