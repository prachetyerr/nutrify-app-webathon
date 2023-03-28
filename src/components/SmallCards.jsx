import React, { Component } from 'react';
import Card from './CardUI';
import SmallCardDetails from './SmallCardDetails';

class SmallCards extends Component{
    render(){
        return(
            <div className="conatiner-fluid d-flex justify-content-center ">
                
               <div className="row">
                    {SmallCardDetails.map( oneCard => 
                        <div className="col-md-6 individual_card" >
                            <Card   key={oneCard.id}
                                    image={oneCard.image}
                                    title={oneCard.title}
                                    text={oneCard.text}
                                    url={oneCard.url}
                                    button={oneCard.button}
                                    cardid={oneCard.id} />
                        </div>)
                    }
               </div>
               
            </div>
        );
    }
}

export default SmallCards;
