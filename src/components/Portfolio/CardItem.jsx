import React from "react";
import {
    CardsItem, CardsItemPicWrap,
    CardsItemImg, CardsItemInfo, CardsItemText, CardLink
} from "./CardsElements";

function CardItem(props) {
    return (<>

        <CardsItem>
            <CardLink to={props.path}>
                <CardsItemPicWrap data-category={props.label}>
                    <CardsItemImg src={props.src} alt="portfolio_img" />
                </CardsItemPicWrap>
                <CardsItemInfo>
                    <CardsItemText>{props.text}</CardsItemText>
                </CardsItemInfo>
            </CardLink>
        </CardsItem>
    </>

    )
}

export default CardItem;
