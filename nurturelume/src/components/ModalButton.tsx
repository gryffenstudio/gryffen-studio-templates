import { useEffect, useRef, useState } from 'react';
import {
    type Content,
    CreateContactCommand,
    type CreateContactRequest,
    GetContactCommand,
    type GetContactRequest,
    SendEmailCommand,
    type SendEmailRequest,
    SESv2Client,
    UpdateContactCommand,
} from '@aws-sdk/client-sesv2';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-providers';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import type { UpdateContactRequest } from '@aws-sdk/client-sesv2/dist-types/models/models_1';

interface ModalButtonProps {
    buttonKey: string;
}

function ModalButton(props: ModalButtonProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const familiesCheckbox = useRef<HTMLInputElement>(null);
    const babysittersCheckbox = useRef<HTMLInputElement>(null);
    const daycareCheckbox = useRef<HTMLInputElement>(null);
    // const sesClient = new SESv2Client({
    //     region: 'us-east-1',
    //     credentials: fromCognitoIdentityPool({
    //         clientConfig: { region: 'us-east-1' },
    //         identityPoolId: 'us-east-1:dcad697f-49a8-4330-b123-21af8333ff60',
    //     }),
    // });
    // let isExistingContact: boolean = false;
    //
    // async function sendWelcomeEmails() {
    //     let sendEmailRequest: SendEmailRequest = {
    //         FromEmailAddress: 'wgriffey15@gmail.com',
    //         ReplyToAddresses: ['wgriffey15@gmail.com'],
    //         Destination: {
    //             ToAddresses: [email],
    //         },
    //         Content: {
    //             Simple: {
    //                 Subject: {
    //                     Data: '',
    //                 },
    //                 Body: {
    //                     Html: {
    //                         Data: '',
    //                     },
    //                 },
    //             },
    //         },
    //         ListManagementOptions: {
    //             ContactListName: '',
    //             TopicName: '',
    //         },
    //     };
    //
    //     let subject: Content;
    //     let bodyHtml: Content;
    //
    //     if (familiesCheckbox.current?.checked) {
    //         subject = {
    //             Data: 'Congratulations! You and your family have begun your childcare journey with NurtureLume.',
    //         };
    //
    //         bodyHtml = {
    //             Data: `<div dir="ltr"><div id="m_-2854115493052542175gmail-:2ym"><div id="m_-2854115493052542175gmail-:2yi" aria-label="Message Body" role="textbox" aria-multiline="true" aria-controls=":30w" aria-expanded="false" style="direction:ltr;min-height:376px"><p style="border:0px solid rgb(227,227,227);box-sizing:border-box;margin:1.25em 0px"><font size="4" color="#ea9999" style="" face="arial, sans-serif"><b style="">Welcome to the Families Insider List at NurtureLume!</b></font></p><p style="border:0px solid rgb(227,227,227);box-sizing:border-box;margin:1.25em 0px;font-size:16px"><font color="#000000" face="arial, sans-serif">We&#39;re thrilled to have you on board as we embark on this journey together to revolutionize childcare discovery.</font></p><p style="border:0px solid rgb(227,227,227);box-sizing:border-box;margin:1.25em 0px;font-size:16px"><font color="#000000" face="arial, sans-serif">As part of our insider list, you&#39;ll receive monthly updates on our progress with the NurtureLume web and mobile application, exclusive details on our launch date, and special pre-launch offers designed just for you.</font></p><p style="border:0px solid rgb(227,227,227);box-sizing:border-box;margin:1.25em 0px;font-size:16px"><font color="#000000" face="arial, sans-serif">But it doesn&#39;t stop there! We&#39;re committed to building a tool that truly meets your needs. That&#39;s why we&#39;ll be reaching out to select subscribers like you to gather feedback on the features that matter most to your experience. After all, your insights are invaluable in shaping NurtureLume into the ultimate childcare companion.</font></p><p style="border:0px solid rgb(227,227,227);box-sizing:border-box;margin:1.25em 0px;font-size:16px"><font color="#000000" face="arial, sans-serif">Our mission is simple: to provide families across America with the perfect tool to connect and communicate with their childcare providers effortlessly. And with your help, we&#39;re one step closer to achieving that goal.</font></p><p style="border:0px solid rgb(227,227,227);box-sizing:border-box;margin:1.25em 0px;font-size:16px"><font color="#000000" face="arial, sans-serif">Stay tuned for more exciting updates, and feel free to reach out if you have any questions or suggestions along the way. You can contact the team via email and social media platforms such as Facebook, LinkedIn, Instagram, and X.</font></p><p style="border:0px solid rgb(227,227,227);box-sizing:border-box;margin:1.25em 0px;font-size:16px"><font color="#000000" face="arial, sans-serif">Best Regards,</font></p></div></div><font color="#888888" face="arial, sans-serif"><span class="gmail_signature_prefix">--</span><br><div dir="ltr" class="gmail_signature"><div dir="ltr"><div><b>William Griffey</b><br></div><div><b>Co-Founder</b></div><div><b><a href="http://nurturelume.com/" target="_blank">nurturelume.com</a></b></div><div><img src="https://ci3.googleusercontent.com/mail-sig/AIorK4w6KNQwhffSDAa9IshBak3SONiwr-nGeOR7iSKAzKqUA1cpSxpA5Na7i9HbAKBlhbx7DWUZbaM" class="gmail-CToWUd" style="color: rgb(224, 102, 102);"></div></div></div></font></div>`,
    //         };
    //
    //         sendEmailRequest.Content = {
    //             Simple: {
    //                 Subject: subject,
    //                 Body: {
    //                     Html: bodyHtml,
    //                 },
    //             },
    //         };
    //
    //         sendEmailRequest.ListManagementOptions = {
    //             ContactListName: 'NurtureLumePreLaunch',
    //             TopicName: 'Families',
    //         };
    //
    //         try {
    //             await sesClient.send(new SendEmailCommand(sendEmailRequest));
    //         } catch (e) {}
    //     }
    //
    //     if (babysittersCheckbox.current?.checked) {
    //         subject = {
    //             Data: 'Congratulations! You have begun your childcare journey with NurtureLume.',
    //         };
    //
    //         bodyHtml = {
    //             Data: `<div dir="ltr"><div id="m_-2854115493052542175gmail-:2ym"><div id="m_-2854115493052542175gmail-:2yi" aria-label="Message Body" role="textbox" aria-multiline="true" aria-controls=":30w" aria-expanded="false" style="direction:ltr;min-height:376px"><p style="border:0px solid rgb(227,227,227);box-sizing:border-box;margin:1.25em 0px"><font size="4" color="#ea9999" style="" face="arial, sans-serif"><b style="">Welcome to the Babysitters and Nanny Insider List at NurtureLume!</b></font></p><p style="border:0px solid rgb(227,227,227);box-sizing:border-box;margin:1.25em 0px;font-size:16px"><font face="arial, sans-serif" style="background-color:rgb(255,255,255)" color="#000000">We&#39;re excited to have you join us on this journey to redefine childcare discovery.</font></p><p style="border:0px solid rgb(227,227,227);box-sizing:border-box;margin:1.25em 0px;font-size:16px"><font face="arial, sans-serif" color="#000000" style="background-color:rgb(255,255,255)">As a member of our insider list, you&#39;ll receive monthly updates on the progress of the NurtureLume web and mobile application, exclusive details about our launch date, and special pre-launch offers tailored just for you.</font></p><p style="border:0px solid rgb(227,227,227);box-sizing:border-box;margin:1.25em 0px;font-size:16px"><font face="arial, sans-serif" color="#000000" style="background-color:rgb(255,255,255)">But there&#39;s more! Your expertise and insights are invaluable in shaping NurtureLume into the ultimate childcare companion. We&#39;ll be reaching out to select subscribers like you to gather feedback on the features that matter most in your childcare journey. Together, we can ensure that NurtureLume meets the needs of both caregivers and families alike.</font></p><p style="border:0px solid rgb(227,227,227);box-sizing:border-box;margin:1.25em 0px;font-size:16px"><font face="arial, sans-serif" color="#000000" style="background-color:rgb(255,255,255)">Our mission is clear: to provide babysitters and nannies across America with the perfect tool to connect with families seamlessly and manage their business. With your input, we&#39;re one step closer to achieving that goal.</font></p><p style="border:0px solid rgb(227,227,227);box-sizing:border-box;margin:1.25em 0px;font-size:16px"><font face="arial, sans-serif" color="#000000" style="background-color:rgb(255,255,255)">We&#39;re thrilled to have you on board and can&#39;t wait to build a thriving community dedicated to improving childcare for caregivers and families nationwide!</font></p><p style="border:0px solid rgb(227,227,227);box-sizing:border-box;margin:1.25em 0px;font-size:16px"><font face="arial, sans-serif"><font style="background-color:rgb(255,255,255)" color="#000000">Stay tuned for more updates, and feel free to reach out if you have any questions or suggestions along the way. </font><span style="color:rgb(0,0,0)">Y</span><span style="color:rgb(0,0,0)">ou can c</span><span style="color:rgb(0,0,0)">ontact the team via email and social media platforms such as Facebook, LinkedIn, Instagram, and X.</span></font></p><p style="border:0px solid rgb(227,227,227);box-sizing:border-box;margin:1.25em 0px;font-family:Söhne,ui-sans-serif,system-ui,-apple-system,&quot;Segoe UI&quot;,Roboto,Ubuntu,Cantarell,&quot;Noto Sans&quot;,sans-serif,&quot;Helvetica Neue&quot;,Arial,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;,&quot;Noto Color Emoji&quot;;font-size:16px"><font color="#000000">Best Regards,</font></p></div></div><font color="#888888"><span class="gmail_signature_prefix">--</span><br><div dir="ltr" class="gmail_signature"><div dir="ltr"><div><b>William Griffey</b><br></div><div><b>Co-Founder</b></div><div><b><a href="http://nurturelume.com/" target="_blank">nurturelume.com</a></b></div><div><img src="https://ci3.googleusercontent.com/mail-sig/AIorK4w6KNQwhffSDAa9IshBak3SONiwr-nGeOR7iSKAzKqUA1cpSxpA5Na7i9HbAKBlhbx7DWUZbaM" class="gmail-CToWUd" style="color: rgb(224, 102, 102);"></div></div></div></font></div>`,
    //         };
    //
    //         sendEmailRequest.Content = {
    //             Simple: {
    //                 Subject: subject,
    //                 Body: {
    //                     Html: bodyHtml,
    //                 },
    //             },
    //         };
    //
    //         sendEmailRequest.ListManagementOptions = {
    //             ContactListName: 'NurtureLumePreLaunch',
    //             TopicName: 'BabysittersAndNannies',
    //         };
    //
    //         try {
    //             await sesClient.send(new SendEmailCommand(sendEmailRequest));
    //         } catch (e) {}
    //     }
    //
    //     if (daycareCheckbox.current?.checked) {
    //         subject = {
    //             Data: 'Congratulations! You and your daycare center have begun your childcare journey with NurtureLume.',
    //         };
    //
    //         bodyHtml = {
    //             Data: `<div dir="ltr"><div id="m_-7144401153182322468m_6273957424725224935m_-2854115493052542175gmail-:2ym"><div id="m_-7144401153182322468m_6273957424725224935m_-2854115493052542175gmail-:2yi" aria-label="Message Body" role="textbox" aria-multiline="true" aria-controls=":30w" aria-expanded="false" style="direction:ltr;min-height:376px"><p style="border:0px solid rgb(227,227,227);box-sizing:border-box;margin:1.25em 0px"><font size="4" face="arial, sans-serif" color="#ea9999"><b>Welcome to the Daycare Center Insider List at NurtureLume!</b></font></p><p style="border:0px solid rgb(227,227,227);box-sizing:border-box;margin:1.25em 0px;font-size:16px"><font face="arial, sans-serif" color="#000000">We&#39;re thrilled to have you on board as we embark on this journey together to revolutionize childcare discovery.</font></p><p style="border:0px solid rgb(227,227,227);box-sizing:border-box;margin:1.25em 0px;font-size:16px"><font face="arial, sans-serif" color="#000000">As a member of our insider list, you&#39;ll receive monthly updates on the progress of the NurtureLume web and mobile application, exclusive details about our launch date, and special pre-launch offers tailored specifically for daycare centers like yours.</font></p><p style="border:0px solid rgb(227,227,227);box-sizing:border-box;margin:1.25em 0px;font-size:16px"><font face="arial, sans-serif" color="#000000">But it doesn&#39;t stop there! Your valuable insights are crucial in shaping NurtureLume into the ultimate childcare companion. We&#39;ll be reaching out to select subscribers, including your center, to gather feedback on the features that matter most in your childcare operations. Together, we can ensure that NurtureLume meets the unique needs of daycare centers and the families they serve.</font></p><p style="border:0px solid rgb(227,227,227);box-sizing:border-box;margin:1.25em 0px;font-size:16px"><font face="arial, sans-serif" color="#000000">Our mission is clear: to provide daycare centers across America with the perfect tool to streamline operations and connect with families seamlessly. With your collaboration, we&#39;re one step closer to achieving this goal.</font></p><p style="border:0px solid rgb(227,227,227);box-sizing:border-box;margin:1.25em 0px;font-size:16px"><font face="arial, sans-serif" color="#000000">We&#39;re excited to have you onboard and look forward to building a thriving community dedicated to improving childcare discovery for daycare centers and families nationwide!</font></p><p style="border:0px solid rgb(227,227,227);box-sizing:border-box;margin:1.25em 0px;font-size:16px"><span style="color:rgb(0,0,0);font-family:arial,sans-serif">Stay tuned for more exciting updates, and feel free to reach out if you have any questions or suggestions along the way. You can contact the team via email and social media platforms such as Facebook, LinkedIn, Instagram, and X.</span></p><p style="border:0px solid rgb(227,227,227);box-sizing:border-box;margin:1.25em 0px;font-size:16px"><font face="arial, sans-serif" color="#000000">Best Regards,</font></p></div></div><font face="arial, sans-serif" color="#000000"><span class="gmail_signature_prefix">--</span><br><div dir="ltr" class="gmail_signature"><div dir="ltr"><div>William Griffey<br></div><div>Co-Founder</div><div><a href="http://nurturelume.com/" target="_blank">nurturelume.com</a></div><div><img src="https://ci3.googleusercontent.com/mail-sig/AIorK4w6KNQwhffSDAa9IshBak3SONiwr-nGeOR7iSKAzKqUA1cpSxpA5Na7i9HbAKBlhbx7DWUZbaM" class="gmail-CToWUd"></div></div></div></font></div>`,
    //         };
    //
    //         sendEmailRequest.Content = {
    //             Simple: {
    //                 Subject: subject,
    //                 Body: {
    //                     Html: bodyHtml,
    //                 },
    //             },
    //         };
    //         sendEmailRequest.ListManagementOptions = {
    //             ContactListName: 'NurtureLumePreLaunch',
    //             TopicName: 'DaycareCenters',
    //         };
    //
    //         try {
    //             await sesClient.send(new SendEmailCommand(sendEmailRequest));
    //         } catch (e) {}
    //     }
    // }
    //
    // async function buildContactRequest(): Promise<UpdateContactRequest | CreateContactRequest> {
    //     let getContactRequest: GetContactRequest = {
    //         ContactListName: 'NurtureLumePreLaunch',
    //         EmailAddress: email,
    //     };
    //
    //     let updateContactRequest: UpdateContactRequest = {
    //         ContactListName: 'NurtureLumePreLaunch',
    //         EmailAddress: email,
    //         UnsubscribeAll: false,
    //         TopicPreferences: [],
    //     };
    //
    //     let createContactRequest: CreateContactRequest = {
    //         ContactListName: 'NurtureLumePreLaunch',
    //         EmailAddress: email,
    //         UnsubscribeAll: false,
    //         TopicPreferences: [],
    //     };
    //
    //     try {
    //         await sesClient.send(new GetContactCommand(getContactRequest));
    //         isExistingContact = true;
    //     } catch (NotFoundException) {}
    //
    //     if (familiesCheckbox.current?.checked && !isExistingContact) {
    //         createContactRequest.TopicPreferences?.push({
    //             TopicName: 'Families',
    //             SubscriptionStatus: 'OPT_IN',
    //         });
    //     } else if (familiesCheckbox.current?.checked && isExistingContact) {
    //         updateContactRequest.TopicPreferences?.push({
    //             TopicName: 'Families',
    //             SubscriptionStatus: 'OPT_IN',
    //         });
    //     }
    //
    //     if (babysittersCheckbox.current?.checked && !isExistingContact) {
    //         createContactRequest.TopicPreferences?.push({
    //             TopicName: 'BabysittersAndNannies',
    //             SubscriptionStatus: 'OPT_IN',
    //         });
    //     } else if (babysittersCheckbox.current?.checked && isExistingContact) {
    //         updateContactRequest.TopicPreferences?.push({
    //             TopicName: 'BabysittersAndNannies',
    //             SubscriptionStatus: 'OPT_IN',
    //         });
    //     }
    //
    //     if (daycareCheckbox.current?.checked && !isExistingContact) {
    //         createContactRequest.TopicPreferences?.push({
    //             TopicName: 'DaycareCenters',
    //             SubscriptionStatus: 'OPT_IN',
    //         });
    //     } else if (daycareCheckbox.current?.checked && !isExistingContact) {
    //         updateContactRequest.TopicPreferences?.push({
    //             TopicName: 'DaycareCenters',
    //             SubscriptionStatus: 'OPT_IN',
    //         });
    //     }
    //
    //     if (isExistingContact) {
    //         return updateContactRequest;
    //     } else {
    //         return createContactRequest;
    //     }
    // }
    //
    // async function handleSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    //     event.preventDefault();
    //     let contactRequest: CreateContactRequest | UpdateContactRequest;
    //
    //     contactRequest = await buildContactRequest();
    //
    //     if (
    //         !familiesCheckbox.current?.checked &&
    //         !babysittersCheckbox.current?.checked &&
    //         !daycareCheckbox.current?.checked
    //     ) {
    //         toast('Please select one of the pre-launch list options!', {
    //             position: 'top-center',
    //             type: 'warning',
    //         });
    //         return;
    //     }
    //
    //     if (isExistingContact) {
    //         try {
    //             await sesClient.send(new UpdateContactCommand(contactRequest));
    //             await sendWelcomeEmails();
    //             toast('Successfully joined pre-launch list!', {
    //                 position: 'top-center',
    //                 type: 'success',
    //             });
    //             setIsOpen(false);
    //         } catch {
    //             toast('Unable to join at this time', {
    //                 type: 'error',
    //             });
    //         }
    //     } else {
    //         try {
    //             await sesClient.send(new CreateContactCommand(contactRequest));
    //             await sendWelcomeEmails();
    //             toast('Successfully joined pre-launch list!', {
    //                 position: 'top-center',
    //                 type: 'success',
    //             });
    //             setIsOpen(false);
    //             return;
    //         } catch (err) {
    //             toast('Unable to join at this time', {
    //                 type: 'error',
    //             });
    //         }
    //     }
    // }

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
            <ToastContainer autoClose={2000} position='top-center' />
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
                    <form className='mt-4 w-[85%]' name='contactForm' method='post'>
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
