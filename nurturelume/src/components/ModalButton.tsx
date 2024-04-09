import { useEffect, useRef, useState } from 'react';

interface ModalButtonProps {
    buttonKey: string;
}

function ModalButton(props: ModalButtonProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const familiesCheckbox = useRef<HTMLInputElement>(null);
    const babysittersCheckbox = useRef<HTMLInputElement>(null);
    const daycareCheckbox = useRef<HTMLInputElement>(null);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (
            localStorage.getItem('first_visit') === 'true' &&
            window.location.pathname === '/' &&
            props.buttonKey === '1'
        ) {
            timer = setTimeout(() => {
                setIsOpen(true);
            }, 5000);
        }

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <>
            <button className='btn-join' onClick={() => setIsOpen(true)}>
                Join the pre-launch list
            </button>
            <div
                className={`bg-blur fixed inset-0 z-10 flex h-screen w-screen items-center justify-center bg-black ${isOpen ? 'visible' : 'invisible'} ${isOpen ? 'bg-opacity-60' : 'bg-opacity-0'} transition-opacity duration-300`}
            >
                <div
                    className={`flex h-[36rem] w-[22rem] flex-col items-center overflow-y-auto rounded-lg bg-white px-6 py-6 ${isOpen ? 'opacity-100' : 'opacity-0'} transition-all duration-300 md:h-[32rem] md:w-[35rem]`}
                >
                    <button className='place-self-end' onClick={() => setIsOpen(false)}>
                        <span className='mr-2 font-visby-medium text-xl text-black'>X</span>
                    </button>
                    <form className='mt-4 w-[85%]' name='contactForm' id="contactForm" data-netlify="true" method='post'>
                        <input type='hidden' name='form-name' value='contactForm' />
                        <h3 className='text-center font-visby-medium md:text-xl'>
                            Hi there! Tap in and join the pre-launch list to stay up to date with
                            upcoming announcements, features, and more!{' '}
                        </h3>
                        <h4 className='mt-10 font-visby-medium text-[16px]'>
                            Check one or more boxes of which applies to you.
                        </h4>
                        <div className='mb-4 mt-4 flex items-center space-x-2'>
                            <input
                                className='accent-brand-green-1'
                                type='checkbox'
                                ref={familiesCheckbox}
                                id='families'
                                name='families'
                            />
                            <label
                                className='text-brand-gray font-visby-regular text-[16px]'
                                htmlFor='families'
                            >
                                Families
                            </label>
                        </div>
                        <div className='mb-4 mt-4 flex items-center space-x-2'>
                            <input
                                className='accent-brand-green-1'
                                type='checkbox'
                                ref={babysittersCheckbox}
                                id='babysitters'
                                name='babysitters'
                            />
                            <label
                                className='text-brand-gray font-visby-regular text-[16px]'
                                htmlFor='babysitters'
                            >
                                Babysitters & Nannies
                            </label>
                        </div>
                        <div className='mb-4 mt-4 flex items-center space-x-2'>
                            <input
                                className='accent-brand-green-1'
                                type='checkbox'
                                ref={daycareCheckbox}
                                id='daycare'
                                name='daycare'
                            />
                            <label
                                className='text-brand-gray font-visby-regular text-[16px]'
                                htmlFor='daycare'
                            >
                                Daycare Centers & In-Home Daycare
                            </label>
                            <br />
                        </div>
                        <label
                            className='text-brand-gray mb-1 block font-visby-regular  text-xs'
                            htmlFor='email'
                        >
                            Email Address
                        </label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            className='border-brand-gray block h-12 w-full rounded-lg border  p-2.5 text-sm text-black focus:border-brand-red focus:outline-none focus:ring-0'
                            type='email'
                            id='email'
                            name='email'
                            autoComplete={'email'}
                            placeholder='Enter Email Address'
                            required
                        />
                        <button
                            type='submit'
                            id='subscribe-button'
                            className='mt-4 w-full rounded-full bg-brand-red py-2 font-visby-medium text-xl text-white hover:bg-opacity-80'
                        >
                            Join
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ModalButton;
