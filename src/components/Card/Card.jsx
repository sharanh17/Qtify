import React from "react";
import styles from './Card.module.css'

import {Tooltip,Chip} from '@mui/material'
import { Link } from "react-router-dom";



function Card({data,type}){
    // const {image,follows,title,slug}=data;
    const getCard =(type)=>{
        switch(type){
            case 'album':{
                const {image,follows,title,slug,songs}=data;
                return(
                    <Tooltip title={`${songs.length} songs`} placement='top' arrow>
                        <Link to={`/album/${slug}`} >
                            <div className={styles.wrapper}>
                                <div className={styles.card}>
                            <img src={image} alt='album' loading='lazy'/>
                            <div className={styles.banner}>
                                   className=''
                                <Chip 
                                />
                            </div>
                                </div>
                               label={`${follows} Follows`}
                                size="small"
                              <div className={ styles.titleWrapper}>
                                  <p>{title}</p>
                                </div>
                            </div>
                        </Link>
            
                    </Tooltip>
                )

            }
            case 'songs':{
                const {image,likes,title}=data;
                return(
                
                    <div className={styles.wrapper}>
                        <div className={styles.card}>
                    <img src={image} alt='song' loading='lazy'/>
                    <div className={styles.banner}>
                        <div className={styles.pills}>
                            <p>{likes}Likes</p>
                        </div>
                    </div>
                        </div>
                        <div className={ styles.titleWrapper}>
                          <p>{title}</p>
                        </div>
                    </div>
    
                )
       
    
            }
               default :
               return <></>
        }
    };
    return getCard(type)
   
}

export default Card;

