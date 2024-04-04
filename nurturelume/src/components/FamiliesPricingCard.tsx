import { type ReactElement } from 'react';

interface FamiliesPricingCardProps {
    plan: string;
    billing: string;
}
function FamiliesPricingCard(props: FamiliesPricingCardProps) {
    const freeFeatures: string[] = [
        'Find your caregiver',
        'Post a public job for providers',
        'Request daycare enrollment',
        'Reviews & ratings for providers',
        'Daily activity log',
        'Receive Photos & Videos',
        'Instant messaging with caregivers',
        'Create & customize your profile',
        'Setup child profile',
        'View metrics',
    ];

    const premiumFeatures: string[] = [
        'Message future childcare providers directly',
        'Post a private job for providers',
        'Request background check',
    ];

    return (
        <>
            {props.plan === 'free' ? (
                <div className='h-full w-full space-y-4 px-12 py-10 text-center'>
                    <h2 className='font-visby-heavy text-3xl '>Free</h2>
                    <span className='block font-visby-medium text-[96px] before:-mr-2 before:align-text-top before:text-4xl before:content-["$"]'>
                        0<span className='font-visby-medium text-4xl'>/mo.</span>
                    </span>
                    <ul className='items-left flex flex-col space-y-4'>
                        {freeFeatures.map((feature: string): ReactElement => {
                            return (
                                <li className='flex items-center space-x-4'>
                                    <span className='mt-1 flex h-fit w-fit items-center justify-center rounded-full bg-brand-green-2 bg-opacity-25'>
                                        <span className='icon-[material-symbols--check-small-rounded] h-[2rem] w-[2rem] rounded-full text-brand-green-2'></span>
                                    </span>
                                    <p className='text-start font-visby-heavy text-[16px] text-brand-gray-2'>
                                        {feature}
                                    </p>
                                </li>
                            );
                        })}
                        {premiumFeatures.map((feature: string): ReactElement => {
                            return (
                                <li className='flex items-center space-x-4'>
                                    <p className='ml-12 text-start font-visby-heavy text-[16px] text-[#BABABA]'>
                                        {feature}
                                    </p>
                                </li>
                            );
                        })}
                    </ul>
                    <div>
                        <button className='mt-10 rounded-full bg-brand-green-1 px-16 py-3 font-visby-medium text-xl text-white hover:bg-opacity-80'>
                            Select
                        </button>
                    </div>
                </div>
            ) : (
                <div className='h-full w-full space-y-4 px-12 py-10 text-center'>
                    <h2 className='font-visby-heavy text-3xl'>Premium</h2>
                    {props.billing === 'monthly' ? (
                        <span className='block font-visby-medium text-[96px] before:align-text-top before:text-4xl before:content-["$"]'>
                            10 <span className='-ml-6 font-visby-medium text-4xl'>/mo.</span>
                        </span>
                    ) : (
                        <span className='block font-visby-medium text-[96px] before:-mr-2 before:align-text-top before:text-4xl before:content-["$"]'>
                            8 <span className='-ml-6 font-visby-medium text-4xl'>/mo.</span>
                        </span>
                    )}
                    <ul className='items-left flex flex-col space-y-4'>
                        {[...freeFeatures, ...premiumFeatures].map(
                            (feature: string): ReactElement => {
                                return (
                                    <li className='flex items-center space-x-4'>
                                        <span className='mt-1 flex h-fit w-fit items-center justify-center rounded-full bg-brand-green-2 bg-opacity-25'>
                                            <span className='icon-[material-symbols--check-small-rounded] h-[2rem] w-[2rem] rounded-full text-brand-green-2'></span>
                                        </span>
                                        <p className='text-start font-visby-heavy text-[16px] text-brand-gray-2'>
                                            {feature}
                                        </p>
                                    </li>
                                );
                            },
                        )}
                    </ul>
                    <div>
                        <button className='mt-6 rounded-full bg-brand-green-1 px-16 py-3 font-visby-medium text-xl text-white hover:bg-opacity-80'>
                            Select
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default FamiliesPricingCard;
