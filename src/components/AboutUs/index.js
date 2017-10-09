import React from 'react';
import PageHeader from '../PageHeader';
import bgImage from '../../resources/images/about-us-parallax-background.jpg';
import {
    WrapperItem,
    ImageItem,
    WrapperItemDescription,
    Title,
    DescriptionItems,
} from './StyedComponents';
import advantages from '../../resources/images/aboutUsIcons/advantages.svg';
import choice from '../../resources/images/aboutUsIcons/choice.svg';
import delivery from '../../resources/images/aboutUsIcons/delivery.png';
import euro from '../../resources/images/aboutUsIcons/euro.svg';
import specialOffer from '../../resources/images/aboutUsIcons/special-offer.png';
import {Grid} from 'react-bootstrap';

class AboutUs extends React.Component {
    render() {
        return (
            <div>
                <PageHeader
                    text='О Нас'
                    bgImage={bgImage}
                >
                    <div>Компания «Brand&Stock», с представительством в Неаполе, Италия, предлагает вашему вниманию
                        брендовую одежду и аксессуары<br/> от ведущих итальянских производителей (H&M, Bench, Asics,
                        Armani,
                        Ferre и др.), которую вы сможете приобрести оптом по самым выгодным ценам.<br/><br/>
                        <b>Готовы ответить на все ваши вопросы круглосуточно в любое удобное для вас время!</b>
                    </div>
                </PageHeader>
                <Grid style={{padding: '50px 0'}}>
                    <WrapperItem>
                        <ImageItem
                            alt="Brand and Stock Advantages"
                            src={advantages}
                        />
                        <WrapperItemDescription>
                            <Title>Наши преимущества</Title>
                            <DescriptionItems>
                                Мы предлагаем только лучшие цены, поскольку находимся в тренде модного мира
                                Италии;
                            </DescriptionItems>
                            <DescriptionItems>
                                Работаем без посредников и агентов;
                            </DescriptionItems>
                            <DescriptionItems>
                                Опт только от 1000 единиц, но цены и количество договорные;
                            </DescriptionItems>
                            <DescriptionItems>
                                Услуги по поиску любого бренда, согласно запросу;
                            </DescriptionItems>
                            <DescriptionItems>
                                Услуги по заключению прямых договоров с фабриками;
                            </DescriptionItems>
                            <DescriptionItems>
                                Оплата любым способом;
                            </DescriptionItems>
                            <DescriptionItems>
                                Скидки в зависимости от объема;
                            </DescriptionItems>
                            <DescriptionItems>
                                Все услуги для вас бесплатны.
                            </DescriptionItems>
                        </WrapperItemDescription>
                    </WrapperItem>
                    <WrapperItem>
                        <ImageItem
                            alt="Brand and Stock Delivery Icon"
                            src={delivery}
                            style={{}}
                        />
                        <WrapperItemDescription>
                            <div style={{margin: 'auto 0'}}>
                                <Title>Доставка</Title>
                                <DescriptionItems>
                                    Наша компания самостоятельно (свои фуры, сборный груз) организует весь процесс
                                    доставки
                                    до Вашего магазина в течение 7 дней, включая таможенную очистку груза и выдачу
                                    документов. При этом мы предоставляем все юридические гарантии на свою работу.
                                </DescriptionItems>
                            </div>
                        </WrapperItemDescription>
                    </WrapperItem>
                    <WrapperItem>
                        <ImageItem
                            alt="Brand and Stock Choice"
                            src={choice}
                        />
                        <WrapperItemDescription>
                            <div style={{margin: 'auto 0'}}>
                                <Title>Как выбрать</Title>
                                <DescriptionItems>
                                    Дистанционно – выбор товара по фото из зала продаж по видео-связи.
                                </DescriptionItems>
                                <DescriptionItems>
                                    Лично посетить Италию. Проживание, перелет за наш счет.
                                </DescriptionItems>
                            </div>
                        </WrapperItemDescription>
                    </WrapperItem>
                    <WrapperItem>
                        <ImageItem
                            alt="Brand and Stock SPecial offers"
                            src={specialOffer}
                        />
                        <WrapperItemDescription>
                            <Title>Актуальные предложения</Title>
                            <DescriptionItems>
                                Брендовый сток – 800 ед. по 17 €.
                            </DescriptionItems>
                            <DescriptionItems>
                                Детский сток – до 7 €.
                            </DescriptionItems>
                            <DescriptionItems>
                                Аксессуары – до 6 €;
                            </DescriptionItems>
                            <DescriptionItems>
                                Женский сток – до 10 €.
                            </DescriptionItems>
                            <DescriptionItems>
                                Брендовый секонд хенд – 3 € за кг.
                            </DescriptionItems>
                        </WrapperItemDescription>
                    </WrapperItem>
                    <WrapperItem>
                        <ImageItem
                            alt="Brand and Stock euro icon"
                            src={euro}
                        />
                        <WrapperItemDescription>
                            <div style={{margin: 'auto 0'}}>
                                <Title>Оплата</Title>
                                <DescriptionItems>
                                    Любым удобным способом (наличный расчёт, расчетный счёт, безналичный расчёт)
                                </DescriptionItems>
                            </div>
                        </WrapperItemDescription>
                    </WrapperItem>
                </Grid>
            </div>
        )
    }
}

export default AboutUs;
