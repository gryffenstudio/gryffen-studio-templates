import { type ReactElement, useEffect, useState } from 'react';
import FamiliesPricingCard from './FamiliesPricingCard.tsx';
import BabysittersPricingCard from './BabysittersPricingCard.tsx';
import DaycarePricingCard from './DaycarePricingCard.tsx';

interface PricingComponentProps {
    userType: string;
}

function PricingComponent(props: PricingComponentProps) {
    const [isYearly, setIsYearly] = useState<boolean>(true);
    let card1: ReactElement | null = null;
    let card2: ReactElement | null = null;

    function handlePricingToggle() {
        setIsYearly((prev) => !prev);
    }

    useEffect(() => {
        console.log(props.userType);
    }, []);

    switch (props.userType) {
        case 'family':
            card1 = <FamiliesPricingCard plan='free' billing={isYearly ? 'yearly' : 'monthly'} />;
            card2 = (
                <FamiliesPricingCard plan='premium' billing={isYearly ? 'yearly' : 'monthly'} />
            );
            break;
        case 'babysitter':
            card1 = (
                <BabysittersPricingCard plan='free' billing={isYearly ? 'yearly' : 'monthly'} />
            );
            card2 = (
                <BabysittersPricingCard plan='premium' billing={isYearly ? 'yearly' : 'monthly'} />
            );
            break;
        case 'daycare':
            card1 = <DaycarePricingCard billing={isYearly ? 'yearly' : 'monthly'} />;
            card2 = null;
            break;
        default:
            card1 = <div>hello</div>;
            card2 = <div>hello</div>;
            break;
    }

    return (
        <div className='mt-6 flex h-fit w-full flex-col items-center'>
            <input
                type='checkbox'
                onChange={handlePricingToggle}
                id='pricing-toggle'
                checked={isYearly}
                className='peer/toggle hidden h-0 w-0'
            />
            <label
                htmlFor='pricing-toggle'
                className='relative mt-2 flex h-16 w-80 cursor-pointer items-center justify-between rounded-full bg-[#E3E3E3] p-4 transition-[0.3s] after:absolute after:left-[8px] after:top-[8px] after:h-12 after:w-40 after:rounded-full after:bg-white after:shadow-md after:transition-[0.3s] peer-checked/toggle:after:left-[8px] peer-checked/toggle:after:translate-x-[90%] peer-checked/toggle:after:bg-white'
            >
                <span
                    className={`z-10 ml-11 font-visby-heavy text-sm transition-colors duration-300 ${isYearly ? 'text-[#A1A1A1]' : 'text-black'}`}
                >
                    Monthly
                </span>
                <span
                    className={`z-10 mr-12 font-visby-heavy text-sm ${isYearly ? 'text-black' : 'text-[#A1A1A1]'}`}
                >
                    Yearly
                </span>
            </label>
            <div className='mt-10 flex h-full w-full flex-col items-center justify-center space-y-4 lg:flex-row lg:items-end lg:space-x-4 lg:space-y-0'>
                {card1 && (
                    <div className='flex w-[22rem] rounded-3xl shadow-md shadow-gray-400'>
                        {card1}
                    </div>
                )}
                {card2 && (
                    <div className='flex w-[22rem] rounded-3xl bg-brand-blue pt-5'>
                        <div className='z-10  flex rounded-3xl bg-white shadow-md shadow-gray-400'>
                            {card2}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default PricingComponent;
