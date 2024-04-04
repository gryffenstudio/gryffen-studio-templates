interface DaycarePricingCardProps {
    billing: string;
}
function DaycarePricingCard(props: DaycarePricingCardProps) {
    return (
        <div className='h-full w-full space-y-4 px-12 py-10 text-center'>
            <h2 className='font-visby-heavy text-3xl'>Capacity-Based Pricing</h2>
            {props.billing === 'monthly' ? (
                <span className='block font-visby-medium text-[96px] before:-mr-1 before:align-text-top before:text-4xl before:content-["$"]'>
                    20 <span className='-ml-6 font-visby-medium text-4xl'>/mo.</span>
                </span>
            ) : (
                <span className='block font-visby-medium text-[96px]  before:align-text-top before:text-4xl before:content-["$"]'>
                    18 <span className='-ml-6 font-visby-medium text-4xl'>/mo.</span>
                </span>
            )}
            <ul className='items-left flex flex-col space-y-4'>
                <li className='flex items-center space-x-4'>
                    <span className='mt-1 flex h-fit w-fit items-center justify-center rounded-full bg-brand-green-2 bg-opacity-25'>
                        <span className='icon-[material-symbols--check-small-rounded] h-[2rem] w-[2rem] rounded-full text-brand-green-2'></span>
                    </span>
                    <p className='text-start font-visby-heavy text-[16px] text-brand-gray-2'>
                        Find your caregiver
                    </p>
                </li>
                <li className='flex items-center space-x-4'>
                    <span className='mt-1 flex h-fit w-fit items-center justify-center rounded-full bg-brand-green-2 bg-opacity-25'>
                        <span className='icon-[material-symbols--check-small-rounded] h-[2rem] w-[2rem] rounded-full text-brand-green-2'></span>
                    </span>
                    <p className='text-start font-visby-heavy text-[16px] text-brand-gray-2 '>
                        Post a public job for providers
                    </p>
                </li>
                <li className='flex items-center space-x-4'>
                    <span className='mt-1 flex h-fit w-fit items-center justify-center rounded-full bg-brand-green-2 bg-opacity-25'>
                        <span className='icon-[material-symbols--check-small-rounded] h-[2rem] w-[2rem] rounded-full text-brand-green-2'></span>
                    </span>
                    <p className='text-start font-visby-heavy text-[16px] text-brand-gray-2'>
                        Request daycare enrollment
                    </p>
                </li>
                <li className='flex items-center space-x-4'>
                    <span className='mt-1 flex h-fit w-fit items-center justify-center rounded-full bg-brand-green-2 bg-opacity-25'>
                        <span className='icon-[material-symbols--check-small-rounded] h-[2rem] w-[2rem] rounded-full text-brand-green-2'></span>
                    </span>
                    <p className='text-start font-visby-heavy text-[16px] text-brand-gray-2'>
                        Reviews & ratings for providers
                    </p>
                </li>
                <li className='flex items-center space-x-4'>
                    <span className='mt-1 flex h-fit w-fit items-center justify-center rounded-full bg-brand-green-2 bg-opacity-25'>
                        <span className='icon-[material-symbols--check-small-rounded] h-[2rem] w-[2rem] rounded-full text-brand-green-2'></span>
                    </span>
                    <p className='text-start font-visby-heavy text-[16px] text-brand-gray-2'>
                        Daily activity log
                    </p>
                </li>
                <li className='flex items-center space-x-4'>
                    <span className='mt-1 flex h-fit w-fit items-center justify-center rounded-full bg-brand-green-2 bg-opacity-25'>
                        <span className='icon-[material-symbols--check-small-rounded] h-[2rem] w-[2rem] rounded-full text-brand-green-2'></span>
                    </span>
                    <p className='text-start font-visby-heavy text-[16px] text-brand-gray-2'>
                        Receive Photos & Videos
                    </p>
                </li>
                <li className='flex items-center space-x-4'>
                    <span className='mt-1 flex h-fit w-fit items-center justify-center rounded-full bg-brand-green-2 bg-opacity-25'>
                        <span className='icon-[material-symbols--check-small-rounded] h-[2rem] w-[2rem] rounded-full text-brand-green-2'></span>
                    </span>
                    <p className='text-start font-visby-heavy text-[16px] text-brand-gray-2'>
                        Instant messaging with caregivers
                    </p>
                </li>
                <li className='flex items-center space-x-4'>
                    <span className='mt-1 flex h-fit w-fit items-center justify-center rounded-full bg-brand-green-2 bg-opacity-25'>
                        <span className='icon-[material-symbols--check-small-rounded] h-[2rem] w-[2rem] rounded-full text-brand-green-2'></span>
                    </span>
                    <p className='text-start font-visby-heavy text-[16px] text-brand-gray-2'>
                        Create & customize your profile
                    </p>
                </li>
                <li className='flex items-center space-x-4'>
                    <span className='mt-1 flex h-fit w-fit items-center justify-center rounded-full bg-brand-green-2 bg-opacity-25'>
                        <span className='icon-[material-symbols--check-small-rounded] h-[2rem] w-[2rem] rounded-full text-brand-green-2'></span>
                    </span>
                    <p className='text-start font-visby-heavy text-[16px] text-brand-gray-2'>
                        Setup child profile
                    </p>
                </li>
                <li className='flex items-center space-x-4'>
                    <span className='mt-1 flex h-fit w-fit items-center justify-center rounded-full bg-brand-green-2 bg-opacity-25'>
                        <span className='icon-[material-symbols--check-small-rounded] h-[2rem] w-[2rem] rounded-full text-brand-green-2'></span>
                    </span>
                    <p className='text-start font-visby-heavy text-[16px] text-brand-gray-2'>
                        View metrics
                    </p>
                </li>
                <li className='flex items-center space-x-4'>
                    <span className='mt-1 flex h-fit w-fit items-center justify-center rounded-full bg-brand-green-2 bg-opacity-25'>
                        <span className='icon-[material-symbols--check-small-rounded] h-[2rem] w-[2rem] rounded-full text-brand-green-2'></span>
                    </span>
                    <p className='text-start font-visby-heavy text-[16px] text-brand-gray-2'>
                        Message future childcare providers directly
                    </p>
                </li>
                <li className='flex items-center space-x-4'>
                    <span className='mt-1 flex h-fit w-fit items-center justify-center rounded-full bg-brand-green-2 bg-opacity-25'>
                        <span className='icon-[material-symbols--check-small-rounded] h-[2rem] w-[2rem] rounded-full text-brand-green-2'></span>
                    </span>
                    <p className='text-start font-visby-heavy text-[16px] text-brand-gray-2'>
                        Post a private job for providers
                    </p>
                </li>
                <li className='flex items-center space-x-4'>
                    <span className='mt-1 flex h-fit w-fit items-center justify-center rounded-full bg-brand-green-2 bg-opacity-25'>
                        <span className='icon-[material-symbols--check-small-rounded] h-[2rem] w-[2rem] rounded-full text-brand-green-2'></span>
                    </span>
                    <p className='text-start font-visby-heavy text-[16px] text-brand-gray-2'>
                        Request background check
                    </p>
                </li>
            </ul>
            <div>
                <button className='mt-6 rounded-full bg-brand-green-1 px-16 py-3 font-visby-medium text-xl text-white hover:bg-opacity-80'>
                    Select
                </button>
            </div>
        </div>
    );
}

export default DaycarePricingCard;
