
import React, { useState, useEffect } from 'react';
import { IoMdDocument } from "react-icons/io";
import { MdInventory } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import IssuesTable from './IssuesTable';



const cardcontent1 = [

    {
        title: 'Issues and Reports',
        icon: <IoMdDocument />,
        
    }

];

const cardcontent2 = [

    {
        title: 'Inventory',
        icon: <MdInventory />,
        
    }

];

const cardcontent3 = [

    {
        title: 'Suppliers',
        icon: <FaUserFriends />,
        
    }

];

const Card = () => {

    const [itemCount, setItemCount] = useState(0);
    

    return <div className="card-container">
        {cardcontent1.map((item)=> (
            <div className="card">
            <div className="card1">
                 <div className="card--title">
                    <h1 className="numlog">{itemCount}</h1>
                  {/* <IssuesTable onItemCount={setItemCount} /> */}
                    <h2>{item.title}</h2>
                </div>
                <div className="card--cover1">{item.icon}</div>
               
            </div>
            </div>  
        ))},

{cardcontent2.map((item)=> (
            <div className="card">
            <div className="card2">
                <div className="card--title">
                <h1 className="numlog">{item.log}</h1>
                    <h2>{item.title}</h2>
                </div>
                <div className="card--cover2">{item.icon}</div>
                
            </div>
            </div>
               
        ))},

{cardcontent3.map((item)=> (
            <div className="card">
            <div className="card3">
                 <div className="card--title">
                 <h1 className="numlog">{item.log}</h1>
                    <h2>{item.title}</h2>
                </div>
                <div className="card--cover3">{item.icon}</div>
            </div>
            </div>
               
        ))}
    </div>
 }

 

 export default Card;