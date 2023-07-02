import React from 'react';
import hotelOne from '../../assets/images/hotelOne.jpeg'
import hotelTwo from '../../assets/images/HotelTwo.jpeg'
// import hotelThree from '../../assets/images/hotelThree.jpg'

const AboutUs = (props) => {
    return(
        <div className={'h-[100vw] px-[40px] mt-[30px]'}>
            <h1 className={'text-paragraph font-primary text-center '}>Добро пожаловать в мир роскоши и комфорта</h1>
            <div className={'flex flex-col gap-[15px]'}>
                <div className={'w-full h-[300px] shadow-md flex gap-[10px] p-2'}>
                    <img className={'object-cover w-1/2 rounded'} src={hotelOne} />
                    <p className={' font-primary text-default tablet:text-paragraph overflow-y-scroll'}>Островок и точка - ваш надежный проводник в удивительный мир идеального отдыха.<br />Наша миссия - сделать ваше путешествие незабываемым, предоставляя широкий выбор самых роскошных и уютных отелей по всему миру</p>
                </div>
                <div className={'w-full h-[300px] shadow-md flex gap-[10px] p-2'}>
                    <p className={' font-primary text-default tablet:text-paragraph overflow-y-scroll'}>Забудьте о стрессе и заботах, ведь мы возьмем на себя все трудности планирования. Наша команда экспертов подберет для вас идеальное жилье, отвечающее всем вашим требованиям и предпочтениям. Будь то роскошный пятизвездочный отель с прекрасным видом на океан, уютный бутик-отель в историческом центре города или эксклюзивная вилла на частном острове - мы поможем вам найти то, что подходит именно вам.<br /></p>
                    <img className={'object-cover w-1/2 rounded'} src={hotelTwo} />
                </div>
                <div className={'w-full h-[300px] shadow-md flex gap-[10px] p-2'}>
                    <img className={'object-cover w-1/2 rounded'} src={hotelOne} />
                    <p className={' font-primary text-default tablet:text-paragraph overflow-y-scroll'}>Наш сервис предлагает не только широкий выбор различных типов размещения, но и лучшие цены на рынке. Мы тщательно отслеживаем актуальные предложения и специальные акции, чтобы вы могли насладиться максимальными выгодами при бронировании. Кроме того, мы предоставляем эксклюзивные бонусы и дополнительные услуги для наших постоянных клиентов, чтобы каждое ваше путешествие стало неповторимым и особенным.</p>
                </div>
                <div className={'w-full relative h-[300px] shadow-md flex gap-[10px]'}>
                    <img className={'object-cover w-full rounded '} src={hotelOne} />
                    <div className={'absolute top-[0px] left-[0px] bg-black w-full h-full opacity-20 rounded'}></div>
                    <p className={' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-primary text-white text-title  overflow-y-scroll text-center'}>Не откладывайте свои мечты на потом - доверьтесь нам и отправляйтесь в увлекательное путешествие!</p>
                </div>
            </div>
            {/*<p className={'text-paragraph font-primary'}>
            {/*    Не откладывайте свои мечты на потом - доверьтесь нам и отправляйтесь в увлекательное путешествие, полное роскоши и удовольствия. Островок и точка - ваш верный спутник в мире идеального отдыха!</p>*/}
        </div>
    )
}

export default AboutUs;