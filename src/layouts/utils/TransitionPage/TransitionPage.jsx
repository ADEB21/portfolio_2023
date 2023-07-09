import React from 'react'
import barba from "@barba/core";
import gsap from "gsap";
import TransitionPageStyle from "./transitionPage.module.scss"
import TertiaviaData from '../../../../assets/data/tertiavia';

const fromLambdaToHero = {
  name: 'lambda-to-hero',
  sync: true,
  to: {
   custom: (data) => {
    return ['/', '/parcours', ...TertiaviaData.parcours.map(el => '/parcours/'+el.slug)].includes(data.current.url.path);
   }
  }, 
  leave(data) {
    console.log("Transition Lambda To Hero", data);
    const done = this.async();
    setTimeout(()=>{
      done();
    }, 500)
  }, 
  enter(data) {
  }
}

const fromLambdaToLambda = {
  name: 'lambda-to-lambda',
  sync: true,
  leave(data) {
    console.log("Transition Lambda To Lambda");
    const done = this.async();
    setTimeout(()=>{
      done();
    }, 500)
  }, 
  enter(data) {
  }
}

const TransitionPage = () => {

  const  delay = (n) => {
    return new Promise((done) => {
      setTimeout(() => {
        done();
      }, n);
    });
  }

  React.useEffect(()=>{
    barba.init({
      sync: true,
      transitions: [
        fromLambdaToLambda,
        fromLambdaToHero
      ],
    });


    console.log("Routes", TertiaviaData.parcours.map(el => el.slug));
  }, []);

  return (
    <div className={`${TransitionPageStyle.transition_page} transition-page`}></div>
  )
}

export default TransitionPage