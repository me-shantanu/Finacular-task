import React from 'react'
import './Home.css'
import SettingsIcon from '@material-ui/icons/Settings';
import IconButton from "@material-ui/core/IconButton";
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import Graph from './charts/Graph'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Avatar } from '@material-ui/core';
function Home() {
    return (
        <div className="home">
            <div className="home__header">
            
                    <IconButton className="home__header__hover"> <SettingsIcon className="home__header__icon"/></IconButton>
                    <IconButton className="home__header__hover">
                    <NotificationsRoundedIcon className="home__header__icon"/></IconButton>
                
            </div>
            <hr className="home__border"/>
            <div className="home__projection__graph">
                <div className="home__projection__header">
                    <h3>Annual Projection</h3>
                    <div className="home__projection__graph__nav">
                        <h6>10y</h6>
                        <h5 className="home__projection__graph__nav__mid">20y</h5>
                        <h6>30y</h6>

                    </div>
                </div>
                <Graph/>
                <h6>No of Years</h6>
            </div>
            <div className="home__projection__carts">
                <div className="home__projection__cart1">
                    <div className="home__projetion__cart__heading1">
                        <h4>Asset Balance</h4>
                        <IconButton>
                        <MoreHorizIcon/></IconButton>
                    </div>
                    <h3>Enter amount:</h3>
                    <div className="home__projection__cart__main1">
                        <div className="home__projection__cart__main1__left">
                            <h1>₹ 1,25,000</h1>
                            <p>Last Updated <span>3 Dec</span></p>
                        </div>
                        <Avatar className="home__projection__cart__main1__right" src="./images/cart1.png"/>
                    </div>
                </div>
                {/* sec */}
                <div className="home__projection__cart2">
                    <div className="home__projetion__cart__heading2">
                        <h4>Growth Rate</h4>
                        <IconButton>
                        <MoreHorizIcon/></IconButton>
                    </div>
                    <h3>Enter Growth Rate</h3>
                    <div className="home__projection__cart__main2">
                        <div className="home__projection__cart__main2__left">
                            <h1>9.3%</h1>
                            <p>Inflation <span>  6%</span></p>
                        </div>
                        <Avatar className="home__projection__cart__main2__right" src="./images/cart2.png"/>
                    </div>
                </div>
                {/* third */}
                <div className="home__projection__cart1">
                    <div className="home__projetion__cart__heading1">
                        <h4>Major Investments</h4>
                        <IconButton>
                        <MoreHorizIcon/></IconButton>
                    </div>
                    <h3>Returns genrated per month</h3>
                    <div className="home__projection__cart__main1">
                        <div className="home__projection__cart__main3__left">
                            <h1>₹ 1,25,000</h1>
                        </div>
                        <Avatar className="home__projection__cart__main1__right" src="./images/cart1.png"/>
                    </div>
                </div>
                {/* four */}
                <div className="home__projection__cart1">
                    <div className="home__projetion__cart__heading1">
                        <h4>Financial Independence</h4>
                        <IconButton>
                        <MoreHorizIcon/></IconButton>
                    </div>
                    <h3>Age</h3>
                    <div className="home__projection__cart__main1">
                        <div className="home__projection__cart__main3__left">
                            <h1>45 years</h1>
                            <p>optimized <span>Yes</span>No</p>
                        </div>
                        <Avatar className="home__projection__cart__main1__right" src="./images/cart4.png"/>
                    </div>
                </div>
                {/* five */}
                <div className="home__projection__cart5">
                    <div className="home__projetion__cart__heading5">
                        <h4>Average Expenses</h4>
                        <IconButton>
                        <MoreHorizIcon/></IconButton>
                    </div>
                    <h3>Amount</h3>
                    <div className="home__projection__cart__main5">
                        <div className="home__projection__cart__main5__left">
                            <h1>₹ 25,000</h1>
                            <p>3 months average <span>₹ 40,000 </span></p>
                        </div>
                        <Avatar className="home__projection__cart__main5__right" src="./images/font5.png"/>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Home
