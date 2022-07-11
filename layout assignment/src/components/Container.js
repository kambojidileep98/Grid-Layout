import React from 'react';
import Card from './Card';
import './Container.css';
function Container() {
  return (
    <>
        <article className='Container'>
                <section className='Card-1' >
                    <Card
                        Cardtitle= 'Card 1' 
                        p1='Height of the card will be auto adjusted based on the content provided in it or the vertical space covered by card 2 and card 3. Height of the card will be auto adjusted based on the content provided in it or the vertical space covered by card 2 and card 3. Height of the card will be auto adjusted based on the content provided in it or the vertical space covered by card 2 and card 3. Height of the card will be auto adjusted based on the content provided in it or the vertical space covered by card 2 and card 3.Height of the card will be auto adjusted based on the content provided in it or the vertical space covered by card 2 and card 3.covered by card 2 and card 3.Height of the card will be auto adjusted based on the content provided in itcovered by card 2 and card 3.Height of the card will be auto adjusted based on the content provided in itcovered by card 2 and card 3.Height of the card will be auto adjusted based on the content provided in itcovered by card 2 and card 3.Height of the card will be auto adjusted based on the content provided in itcovered by card 2 and card 3.Height of the card will be auto adjusted based on the content provided in itcovered by card 2 and card 3.Height of the card will be auto adjusted based on the content provide
                        Height of the card will be auto adjusted based on the content provided in it or the vertical space covered by card 2 and card 3.
                        Height of the card will be auto adjusted based on the content provided in it or the vertical space covered by card 2 and card 3.
                        Height of the card will be auto adjusted based on the content provided in it or the vertical space covered by card 2 and card 3.
                        Height of the card will be auto adjusted based on the content provided in it or the vertical space covered by card 2 and card 3.
                        Height of the card will be auto adjusted based on the content provided in it or the vertical space covered by card 2 and card 3. covered by card 
                        auto adjusted based on the content provided in it or the vertical space covered by card 2 and card 3.
                        Height of the card will be auto adjusted based on the content provided in it or the vertical space covered by card 2 and card 3.
                        covered by card 2 and card 3.auto adjusted based on the content provided in it or the vertical space covered by card 2 and card 3.
                        Height of the card will be auto adjusted based on the content provided in it or the vertical space covered by card 2 and card 3.
                        covered by card 2 and card 3.'
                        p2='Purchase button will always stay at the bottom of the card.'
                        buttonTitle='Purchase'
                        cardStyle='card_1'
                    />
                </section>
                <section className='card2-3-container' >
                    <Card
                        Cardtitle= 'Card 1' 
                        p1='Height of the card will be auto adjusted based on  or the vertical space covered by card 2 and '
                        p2='Purchase button will always stay at the bottom of the card.'
                        buttonTitle='Purchase'
                        cardStyle='card_2'
                    />
                    <Card
                        Cardtitle= 'Card 1' 
                        p1='Height of the card will be auto adjusted based on the content provided in it or the vertical s'
                        p2='Purchase button will always stay at the bottom of the card.'
                        buttonTitle='Purchase'
                        cardStyle='card_3'
                    />
                </section>
        </article>
        <article className='container-2'>
        <Card
            Cardtitle= 'Bottom Card' 
            p1='Height of the card will be auto adjusted based on the content provided in it or the verticals Height of the card will be auto adjusted based on content provided in it or the verticals Height of the card will be auto adjusted based on the content provided in it or the vertical s Height of the card will be auto adjusted based on the content provided in it or the vertical sHeight of the card will be auto adjusted based on the content provided in it or the vertical s'
            
            p2='Purchase button will always stay at the bottom of the card.'
            buttonTitle='Purchase'
            cardStyle='card_4'
        />
        <Card
            Cardtitle= 'Bottom Card' 
            p1='Height of the card will be auto adjusted based on the content provided in it or the vertical s'
            p2='Purchase button will always stay at the bottom of the card.'
            buttonTitle='Purchase'
            cardStyle='card_5'
        />
        <Card
            Cardtitle= 'Bottom Card' 
            p1='Height of the card will be auto adjusted based on the content provided in it or the vertical s'
            p2='Purchase button will always stay at the bottom of the card.'
            buttonTitle='Purchase'
            cardStyle='card_6'
        />
        <Card
            Cardtitle= 'Bottom Card' 
            p1='Height of the card will be auto adjusted based on the content provided in it or the vertical s'
            p2='Purchase button will always stay at the bottom of the card.'
            buttonTitle='Purchase'
            cardStyle='card_7'
        />
        </article>
    </>
  )
}

export default Container