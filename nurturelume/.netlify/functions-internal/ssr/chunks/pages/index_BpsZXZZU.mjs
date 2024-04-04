import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent, h as addAttribute, u as unescapeHTML, j as Fragment, k as renderSlot, l as renderHead, n as renderTransition } from '../astro_DEdtHqlQ.mjs';
/* empty css                                 */
import { createClient } from '@sanity/client';
import 'kleur/colors';
import { $ as $$Image } from './generic_4OfCImGP.mjs';
import 'clsx';
/* empty css                                            */
import { defineType, defineField } from 'sanity';
import { jsxs, Fragment as Fragment$1, jsx } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import { SESv2Client, CreateContactCommand, SendEmailCommand, GetContactCommand, UpdateContactCommand } from '@aws-sdk/client-sesv2';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-providers';
import { ToastContainer, toast } from 'react-toastify';
/* empty css                                            */
import imageUrlBuilder from '@sanity/image-url';

const sanityClient = createClient(
            {"apiVersion":"2024-03-28","projectId":"zgzkbg6y","dataset":"production","useCdn":false,"studioBasePath":"/admin-blog-studio"}
          );

globalThis.sanityClient = sanityClient;

const logo = new Proxy({"src":"/_astro/Logo.BGtyFaHa.png","width":48,"height":48,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/wgrif/Gryffen Studio/gryffen-studio-templates/nurturelume/src/assets/images/Logo.png";
							}
							
							return target[name];
						}
					});

const $$Astro$8 = createAstro("https://nurturelume.com");
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Navbar;
  return renderTemplate`${maybeRenderHead()}<nav id="nav" class="fixed top-0 z-40 h-[10%] w-full items-center bg-white px-4 py-3.5 shadow-md md:px-10 lg:px-16 xl:px-24"> <div class="flex h-full w-full items-center justify-between"> <div class="flex h-full items-center"> <a href="/" class="flex z-10 items-center justify-center font-visby-medium text-xl md:text-2xl"> ${renderComponent($$result, "Image", $$Image, { "src": logo, "alt": "logo", "referrerpolicy": "no-referrer", "width": "35" })} <span class="text-[#D17F7F]">Nurture</span><span class="text-[#A8B8C8]">Lume
</span></a> </div> <div id="menu-toggle" class="grid z-10 h-4 w-4 cursor-pointer place-content-center"> <div class="h-0.5 w-4 transform rounded-full bg-black transition-all duration-150 before:absolute before:h-0.5 before:w-4 before:-translate-y-1.5 before:transform before:rounded-full before:bg-black before:transition-all before:duration-150 before:content-[''] after:absolute after:h-0.5 after:w-4 after:translate-y-1.5 after:transform after:rounded-full after:bg-black after:transition-all after:duration-150 after:content-['']"></div> </div> <div id="menu" class="w-full h-full fixed z-0 top-0 bottom-0 right-0 left-0 transform translate-x-full invisible transition-all duration-200 ease-in rounded-md bg-white bg-opacity-100 p-4"> <div class="flex h-full w-full flex-col items-center justify-center space-y-6"> <ul class="text-3xl space-y-6 font-visby-medium text-center text-black"> <li class="transform duration-150 hover:-translate-y-1"> <a href="/families" class="relative text-black after:bg-brand-purple after:absolute after:h-0.5 after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-150 cursor-pointer">Families</a> </li> <li class="transform duration-150 hover:-translate-y-1"> <a href="/babysitters-and-nannies" class="relative text-black after:bg-brand-red after:absolute after:h-0.5 after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-150 cursor-pointer">Babysitters & Nannies</a> </li> <li class="transform duration-150 hover:-translate-y-1"> <a href="/daycare-centers" class="relative text-black after:bg-brand-green-1 after:absolute after:h-0.5 after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-150 cursor-pointer">Daycare Centers</a> </li> <li class="transform duration-150 hover:-translate-y-1"> <a href="/blog" class="relative text-black after:bg-brand-purple after:absolute after:h-0.5 after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-150 cursor-pointer">Blog</a> </li> </ul> <span class="w-96 border-b-[1.5px] border-solid border-black"></span> <a class="text-3xl space-y-6 font-visby-medium text-center text-black transform duration-150 hover:-translate-y-1 relative after:bg-brand-orange after:absolute after:h-0.5 after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-150 cursor-pointer" href="mailto:wgriffey15@gmail.com">Contact Us</a> </div> </div> </div> </nav> `;
}, "C:/Users/wgrif/Gryffen Studio/gryffen-studio-templates/nurturelume/src/components/Navbar.astro", void 0);

const $$Astro$7 = createAstro("https://nurturelume.com");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="bottom-0 mt-auto flex h-[20%] flex-col justify-center bg-gray-400"> <p class="text-center">&copy 2024 NurtureLume</p> <div class="flex items-center justify-center space-x-4"> <a class="text-black hover:text-blue-500" href="/privacy">Privacy</a> <a class="text-black hover:text-blue-500" href="/contact-us">Contact Us</a> </div> </footer>`;
}, "C:/Users/wgrif/Gryffen Studio/gryffen-studio-templates/nurturelume/src/components/Footer.astro", void 0);

const title = "All-in-One Childcare Software Solution for Connecting Parents with Childcare Providers | NurtureLume";
const description = "NurtureLume offers a centralized platform to support parents in finding perfect-fit childcare and equip providers with an easy-to-use childcare management system.";
const image = {
	src: "https://nurturelume.com/images/Logo.png",
	alt: "NurtureLume Logo"
};
const url = "https://nurturelume.com";
const id = "https://nurturelume.com/#website";
const siteData = {
	title: title,
	description: description,
	image: image,
	url: url,
	id: id
};

function jsonLDGenerator(props) {
  return `<script type="application/ld+json">
      {"@context": "https://schema.org/",
      "@graph": [{
        "@type": "WebPage",
        "@id": "${props.url || siteData.id}",
        "name": "${props.name || siteData.title}",
        "url": "${props.url || siteData.url}",
        "description": "${props.description || siteData.description}",
        "inLanguage": "en-US"
      },
      {
        "@type": "WebSite",
        "@id": "${siteData.id}",
        "name": "${siteData.title}",
        "url": "${siteData.url}",
        "description": "${siteData.description}",
        "inLanguage": "en-US"
      },
      {
      "@type": "Organization",
      "@id": "https://nurturelume.com/#organization",
      "name": "NurtureLume",
      "url": "${siteData.url}",
      "inLanguage": "en-US",
      "image": {
        "@id": "${siteData.image.src}"
      },
      "logo": "${siteData.image.src}",
      "sameAs": [
        "https://www.facebook.com/nurturelume",
        "https://twitter.com/nurturelume",
        "https://www.instagram.com/nurturelume",
        "https://www.linkedin.com/company/nurturelume"
      ]
    }]}
    <\/script>`;
}

const $$Astro$6 = createAstro("https://nurturelume.com");
const $$SEO = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$SEO;
  const { title, description, url = Astro2.url, image, robots } = Astro2.props;
  const jsonLD = jsonLDGenerator({
    url: Astro2.props.url,
    name: Astro2.props.title,
    description: Astro2.props.description
  });
  return renderTemplate`<!-- SEO --><link rel="canonical"${addAttribute(url, "href")}><!-- Open Graph --><meta property="og:site_name" content="NurtureLume"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(url, "content")}><meta property="og:image"${addAttribute(image?.src || siteData.image.src, "content")}><meta property="og:image:url"${addAttribute(image?.src || siteData.image.src, "content")}><meta property="og:image:secure_url"${addAttribute(image?.src || siteData.image.src, "content")}><meta property="og:image:type" content="image/png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="600"><meta property="og:image:alt"${addAttribute(image?.alt || siteData.image.alt, "content")}><!-- Twitter --><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site" content="@nurturelume"><meta name="twitter:image"${addAttribute(image?.src || siteData.image.src, "content")}><meta name="twitter:image:alt"${addAttribute(image?.alt || siteData.image.alt, "content")}><meta property="twitter:domain" content="nurturelume.com"><meta property="twitter:url"${addAttribute(url, "content")}>${robots ?? renderTemplate`<meta name="robots" content="noindex, nofollow">`}<!-- JSON LD -->${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(jsonLD)}` })}`;
}, "C:/Users/wgrif/Gryffen Studio/gryffen-studio-templates/nurturelume/src/components/SEO.astro", void 0);

const $$Astro$5 = createAstro("https://nurturelume.com");
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/wgrif/Gryffen Studio/gryffen-studio-templates/nurturelume/node_modules/astro/components/ViewTransitions.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$4 = createAstro("https://nurturelume.com");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, robots } = Astro2.props;
  return renderTemplate(_a || (_a = __template([`<html lang="en"> <head><!-- Google Tag Manager --><script type="text/partytown">
            (function (w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
                var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s),
                    dl = l != 'dataLayer' ? '&l=' + l : '';
                j.async = true;
                j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', 'GTM-MRH2HDPV');
        <\/script><!-- End Google Tag Manager --><!-- Google tag (gtag.js) --><script type="text/partytown" async src="https://www.googletagmanager.com/gtag/js?id=G-KFV6Y7M5HS"><\/script><script type="text/partytown">
            window.dataLayer = window.dataLayer || [];
            function gtag() {
                dataLayer.push(arguments);
            }
            gtag('js', new Date());
        <\/script><meta charset="UTF-8"><meta name="description"`, '><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/png" href="/images/Logo.png"><meta name="generator"', ">", "<title>", "</title>", "", '</head> <body class="h-dvh overflow-x-hidden"> ', " ", " ", ' <!-- Google Tag Manager (noscript) --> <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MRH2HDPV" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> <!-- End Google Tag Manager (noscript) --> </body></html>'])), addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), renderComponent($$result, "SEO", $$SEO, { "title": title, "description": description, "url": Astro2.url, "robots": robots }), title, renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead(), renderComponent($$result, "Navbar", $$Navbar, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/wgrif/Gryffen Studio/gryffen-studio-templates/nurturelume/src/layouts/Layout.astro", void 0);

function ModalButton(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const familiesCheckbox = useRef(null);
  const babysittersCheckbox = useRef(null);
  const daycareCheckbox = useRef(null);
  const sesClient = new SESv2Client({
    region: "us-east-1",
    credentials: fromCognitoIdentityPool({
      clientConfig: { region: "us-east-1" },
      identityPoolId: "us-east-1:dcad697f-49a8-4330-b123-21af8333ff60"
    })
  });
  let isExistingContact = false;
  async function sendWelcomeEmails() {
    let sendEmailRequest = {
      FromEmailAddress: "wgriffey15@gmail.com",
      ReplyToAddresses: ["wgriffey15@gmail.com"],
      Destination: {
        ToAddresses: [email]
      },
      Content: {
        Simple: {
          Subject: {
            Data: ""
          },
          Body: {
            Html: {
              Data: ""
            }
          }
        }
      },
      ListManagementOptions: {
        ContactListName: "",
        TopicName: ""
      }
    };
    let subject;
    let bodyHtml;
    if (familiesCheckbox.current?.checked) {
      subject = {
        Data: "Congratulations! You and your family have begun your childcare journey with NurtureLume."
      };
      bodyHtml = {
        Data: `<div dir="ltr"><div id="m_-2854115493052542175gmail-:2ym"><div id="m_-2854115493052542175gmail-:2yi" aria-label="Message Body" role="textbox" aria-multiline="true" aria-controls=":30w" aria-expanded="false" style="direction:ltr;min-height:376px"><p style="border:0px solid rgb(227,227,227);box-sizing:border-box;margin:1.25em 0px"><font size="4" color="#ea9999" style="" face="arial, sans-serif"><b style="">Welcome to the Families Insider List at NurtureLume!</b></font></p><p style="border:0px solid rgb(227,227,227);box-sizing:border-box;margin:1.25em 0px;font-size:16px"><font color="#000000" face="arial, sans-serif">We&#39;re thrilled to have you on board as we embark on this journey together to revolutionize childcare discovery.</font></p><p style="border:0px solid rgb(227,227,227);box-sizing:border-box;margin:1.25em 0px;font-size:16px"><font color="#000000" face="arial, sans-serif">As part of our insider list, you&#39;ll receive monthly updates on our progress with the NurtureLume web and mobile application, exclusive details on our launch date, and special pre-launch offers designed just for you.</font></p><p style="border:0px solid rgb(227,227,227);box-sizing:border-box;margin:1.25em 0px;font-size:16px"><font color="#000000" face="arial, sans-serif">But it doesn&#39;t stop there! We&#39;re committed to building a tool that truly meets your needs. That&#39;s why we&#39;ll be reaching out to select subscribers like you to gather feedback on the features that matter most to your experience. After all, your insights are invaluable in shaping NurtureLume into the ultimate childcare companion.</font></p><p style="border:0px solid rgb(227,227,227);box-sizing:border-box;margin:1.25em 0px;font-size:16px"><font color="#000000" face="arial, sans-serif">Our mission is simple: to provide families across America with the perfect tool to connect and communicate with their childcare providers effortlessly. And with your help, we&#39;re one step closer to achieving that goal.</font></p><p style="border:0px solid rgb(227,227,227);box-sizing:border-box;margin:1.25em 0px;font-size:16px"><font color="#000000" face="arial, sans-serif">Stay tuned for more exciting updates, and feel free to reach out if you have any questions or suggestions along the way. You can contact the team via email and social media platforms such as Facebook, LinkedIn, Instagram, and X.</font></p><p style="border:0px solid rgb(227,227,227);box-sizing:border-box;margin:1.25em 0px;font-size:16px"><font color="#000000" face="arial, sans-serif">Best Regards,</font></p></div></div><font color="#888888" face="arial, sans-serif"><span class="gmail_signature_prefix">--</span><br><div dir="ltr" class="gmail_signature"><div dir="ltr"><div><b>William Griffey</b><br></div><div><b>Co-Founder</b></div><div><b><a href="http://nurturelume.com/" target="_blank">nurturelume.com</a></b></div><div><img src="https://ci3.googleusercontent.com/mail-sig/AIorK4w6KNQwhffSDAa9IshBak3SONiwr-nGeOR7iSKAzKqUA1cpSxpA5Na7i9HbAKBlhbx7DWUZbaM" class="gmail-CToWUd" style="color: rgb(224, 102, 102);"></div></div></div></font></div>`
      };
      sendEmailRequest.Content = {
        Simple: {
          Subject: subject,
          Body: {
            Html: bodyHtml
          }
        }
      };
      sendEmailRequest.ListManagementOptions = {
        ContactListName: "NurtureLumePreLaunch",
        TopicName: "Families"
      };
      try {
        await sesClient.send(new SendEmailCommand(sendEmailRequest));
      } catch (e) {
      }
    }
    if (babysittersCheckbox.current?.checked) {
      subject = {
        Data: "Congratulations! You have begun your childcare journey with NurtureLume."
      };
      bodyHtml = {
        Data: `<div dir="ltr"><div id="m_-2854115493052542175gmail-:2ym"><div id="m_-2854115493052542175gmail-:2yi" aria-label="Message Body" role="textbox" aria-multiline="true" aria-controls=":30w" aria-expanded="false" style="direction:ltr;min-height:376px"><p style="border:0px solid rgb(227,227,227);box-sizing:border-box;margin:1.25em 0px"><font size="4" color="#ea9999" style="" face="arial, sans-serif"><b style="">Welcome to the Babysitters and Nanny Insider List at NurtureLume!</b></font></p><p style="border:0px solid rgb(227,227,227);box-sizing:border-box;margin:1.25em 0px;font-size:16px"><font face="arial, sans-serif" style="background-color:rgb(255,255,255)" color="#000000">We&#39;re excited to have you join us on this journey to redefine childcare discovery.</font></p><p style="border:0px solid rgb(227,227,227);box-sizing:border-box;margin:1.25em 0px;font-size:16px"><font face="arial, sans-serif" color="#000000" style="background-color:rgb(255,255,255)">As a member of our insider list, you&#39;ll receive monthly updates on the progress of the NurtureLume web and mobile application, exclusive details about our launch date, and special pre-launch offers tailored just for you.</font></p><p style="border:0px solid rgb(227,227,227);box-sizing:border-box;margin:1.25em 0px;font-size:16px"><font face="arial, sans-serif" color="#000000" style="background-color:rgb(255,255,255)">But there&#39;s more! Your expertise and insights are invaluable in shaping NurtureLume into the ultimate childcare companion. We&#39;ll be reaching out to select subscribers like you to gather feedback on the features that matter most in your childcare journey. Together, we can ensure that NurtureLume meets the needs of both caregivers and families alike.</font></p><p style="border:0px solid rgb(227,227,227);box-sizing:border-box;margin:1.25em 0px;font-size:16px"><font face="arial, sans-serif" color="#000000" style="background-color:rgb(255,255,255)">Our mission is clear: to provide babysitters and nannies across America with the perfect tool to connect with families seamlessly and manage their business. With your input, we&#39;re one step closer to achieving that goal.</font></p><p style="border:0px solid rgb(227,227,227);box-sizing:border-box;margin:1.25em 0px;font-size:16px"><font face="arial, sans-serif" color="#000000" style="background-color:rgb(255,255,255)">We&#39;re thrilled to have you on board and can&#39;t wait to build a thriving community dedicated to improving childcare for caregivers and families nationwide!</font></p><p style="border:0px solid rgb(227,227,227);box-sizing:border-box;margin:1.25em 0px;font-size:16px"><font face="arial, sans-serif"><font style="background-color:rgb(255,255,255)" color="#000000">Stay tuned for more updates, and feel free to reach out if you have any questions or suggestions along the way. </font><span style="color:rgb(0,0,0)">Y</span><span style="color:rgb(0,0,0)">ou can c</span><span style="color:rgb(0,0,0)">ontact the team via email and social media platforms such as Facebook, LinkedIn, Instagram, and X.</span></font></p><p style="border:0px solid rgb(227,227,227);box-sizing:border-box;margin:1.25em 0px;font-family:Söhne,ui-sans-serif,system-ui,-apple-system,&quot;Segoe UI&quot;,Roboto,Ubuntu,Cantarell,&quot;Noto Sans&quot;,sans-serif,&quot;Helvetica Neue&quot;,Arial,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;,&quot;Noto Color Emoji&quot;;font-size:16px"><font color="#000000">Best Regards,</font></p></div></div><font color="#888888"><span class="gmail_signature_prefix">--</span><br><div dir="ltr" class="gmail_signature"><div dir="ltr"><div><b>William Griffey</b><br></div><div><b>Co-Founder</b></div><div><b><a href="http://nurturelume.com/" target="_blank">nurturelume.com</a></b></div><div><img src="https://ci3.googleusercontent.com/mail-sig/AIorK4w6KNQwhffSDAa9IshBak3SONiwr-nGeOR7iSKAzKqUA1cpSxpA5Na7i9HbAKBlhbx7DWUZbaM" class="gmail-CToWUd" style="color: rgb(224, 102, 102);"></div></div></div></font></div>`
      };
      sendEmailRequest.Content = {
        Simple: {
          Subject: subject,
          Body: {
            Html: bodyHtml
          }
        }
      };
      sendEmailRequest.ListManagementOptions = {
        ContactListName: "NurtureLumePreLaunch",
        TopicName: "BabysittersAndNannies"
      };
      try {
        await sesClient.send(new SendEmailCommand(sendEmailRequest));
      } catch (e) {
      }
    }
    if (daycareCheckbox.current?.checked) {
      subject = {
        Data: "Congratulations! You and your daycare center have begun your childcare journey with NurtureLume."
      };
      bodyHtml = {
        Data: `<div dir="ltr"><div id="m_-7144401153182322468m_6273957424725224935m_-2854115493052542175gmail-:2ym"><div id="m_-7144401153182322468m_6273957424725224935m_-2854115493052542175gmail-:2yi" aria-label="Message Body" role="textbox" aria-multiline="true" aria-controls=":30w" aria-expanded="false" style="direction:ltr;min-height:376px"><p style="border:0px solid rgb(227,227,227);box-sizing:border-box;margin:1.25em 0px"><font size="4" face="arial, sans-serif" color="#ea9999"><b>Welcome to the Daycare Center Insider List at NurtureLume!</b></font></p><p style="border:0px solid rgb(227,227,227);box-sizing:border-box;margin:1.25em 0px;font-size:16px"><font face="arial, sans-serif" color="#000000">We&#39;re thrilled to have you on board as we embark on this journey together to revolutionize childcare discovery.</font></p><p style="border:0px solid rgb(227,227,227);box-sizing:border-box;margin:1.25em 0px;font-size:16px"><font face="arial, sans-serif" color="#000000">As a member of our insider list, you&#39;ll receive monthly updates on the progress of the NurtureLume web and mobile application, exclusive details about our launch date, and special pre-launch offers tailored specifically for daycare centers like yours.</font></p><p style="border:0px solid rgb(227,227,227);box-sizing:border-box;margin:1.25em 0px;font-size:16px"><font face="arial, sans-serif" color="#000000">But it doesn&#39;t stop there! Your valuable insights are crucial in shaping NurtureLume into the ultimate childcare companion. We&#39;ll be reaching out to select subscribers, including your center, to gather feedback on the features that matter most in your childcare operations. Together, we can ensure that NurtureLume meets the unique needs of daycare centers and the families they serve.</font></p><p style="border:0px solid rgb(227,227,227);box-sizing:border-box;margin:1.25em 0px;font-size:16px"><font face="arial, sans-serif" color="#000000">Our mission is clear: to provide daycare centers across America with the perfect tool to streamline operations and connect with families seamlessly. With your collaboration, we&#39;re one step closer to achieving this goal.</font></p><p style="border:0px solid rgb(227,227,227);box-sizing:border-box;margin:1.25em 0px;font-size:16px"><font face="arial, sans-serif" color="#000000">We&#39;re excited to have you onboard and look forward to building a thriving community dedicated to improving childcare discovery for daycare centers and families nationwide!</font></p><p style="border:0px solid rgb(227,227,227);box-sizing:border-box;margin:1.25em 0px;font-size:16px"><span style="color:rgb(0,0,0);font-family:arial,sans-serif">Stay tuned for more exciting updates, and feel free to reach out if you have any questions or suggestions along the way. You can contact the team via email and social media platforms such as Facebook, LinkedIn, Instagram, and X.</span></p><p style="border:0px solid rgb(227,227,227);box-sizing:border-box;margin:1.25em 0px;font-size:16px"><font face="arial, sans-serif" color="#000000">Best Regards,</font></p></div></div><font face="arial, sans-serif" color="#000000"><span class="gmail_signature_prefix">--</span><br><div dir="ltr" class="gmail_signature"><div dir="ltr"><div>William Griffey<br></div><div>Co-Founder</div><div><a href="http://nurturelume.com/" target="_blank">nurturelume.com</a></div><div><img src="https://ci3.googleusercontent.com/mail-sig/AIorK4w6KNQwhffSDAa9IshBak3SONiwr-nGeOR7iSKAzKqUA1cpSxpA5Na7i9HbAKBlhbx7DWUZbaM" class="gmail-CToWUd"></div></div></div></font></div>`
      };
      sendEmailRequest.Content = {
        Simple: {
          Subject: subject,
          Body: {
            Html: bodyHtml
          }
        }
      };
      sendEmailRequest.ListManagementOptions = {
        ContactListName: "NurtureLumePreLaunch",
        TopicName: "DaycareCenters"
      };
      try {
        await sesClient.send(new SendEmailCommand(sendEmailRequest));
      } catch (e) {
      }
    }
  }
  async function buildContactRequest() {
    let getContactRequest = {
      ContactListName: "NurtureLumePreLaunch",
      EmailAddress: email
    };
    let updateContactRequest = {
      ContactListName: "NurtureLumePreLaunch",
      EmailAddress: email,
      UnsubscribeAll: false,
      TopicPreferences: []
    };
    let createContactRequest = {
      ContactListName: "NurtureLumePreLaunch",
      EmailAddress: email,
      UnsubscribeAll: false,
      TopicPreferences: []
    };
    try {
      await sesClient.send(new GetContactCommand(getContactRequest));
      isExistingContact = true;
    } catch (NotFoundException) {
    }
    if (familiesCheckbox.current?.checked && !isExistingContact) {
      createContactRequest.TopicPreferences?.push({
        TopicName: "Families",
        SubscriptionStatus: "OPT_IN"
      });
    } else if (familiesCheckbox.current?.checked && isExistingContact) {
      updateContactRequest.TopicPreferences?.push({
        TopicName: "Families",
        SubscriptionStatus: "OPT_IN"
      });
    }
    if (babysittersCheckbox.current?.checked && !isExistingContact) {
      createContactRequest.TopicPreferences?.push({
        TopicName: "BabysittersAndNannies",
        SubscriptionStatus: "OPT_IN"
      });
    } else if (babysittersCheckbox.current?.checked && isExistingContact) {
      updateContactRequest.TopicPreferences?.push({
        TopicName: "BabysittersAndNannies",
        SubscriptionStatus: "OPT_IN"
      });
    }
    if (daycareCheckbox.current?.checked && !isExistingContact) {
      createContactRequest.TopicPreferences?.push({
        TopicName: "DaycareCenters",
        SubscriptionStatus: "OPT_IN"
      });
    } else if (daycareCheckbox.current?.checked && !isExistingContact) {
      updateContactRequest.TopicPreferences?.push({
        TopicName: "DaycareCenters",
        SubscriptionStatus: "OPT_IN"
      });
    }
    if (isExistingContact) {
      return updateContactRequest;
    } else {
      return createContactRequest;
    }
  }
  async function handleSubmit(event) {
    event.preventDefault();
    let contactRequest;
    contactRequest = await buildContactRequest();
    if (!familiesCheckbox.current?.checked && !babysittersCheckbox.current?.checked && !daycareCheckbox.current?.checked) {
      toast("Please select one of the pre-launch list options!", {
        position: "top-center",
        type: "warning"
      });
      return;
    }
    if (isExistingContact) {
      try {
        await sesClient.send(new UpdateContactCommand(contactRequest));
        await sendWelcomeEmails();
        toast("Successfully joined pre-launch list!", {
          position: "top-center",
          type: "success"
        });
        setIsOpen(false);
      } catch {
        toast("Unable to join at this time", {
          type: "error"
        });
      }
    } else {
      try {
        await sesClient.send(new CreateContactCommand(contactRequest));
        await sendWelcomeEmails();
        toast("Successfully joined pre-launch list!", {
          position: "top-center",
          type: "success"
        });
        setIsOpen(false);
        return;
      } catch (err) {
        toast("Unable to join at this time", {
          type: "error"
        });
      }
    }
  }
  useEffect(() => {
    let timer;
    if (localStorage.getItem("first_visit") === "true" && window.location.pathname === "/" && props.buttonKey === "1") {
      timer = setTimeout(() => {
        setIsOpen(true);
      }, 5e3);
    }
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx(ToastContainer, { autoClose: 2e3, position: "top-center" }),
    /* @__PURE__ */ jsx("button", { className: "btn-join", onClick: () => setIsOpen(true), children: "Join the pre-launch list" }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `bg-blur fixed inset-0 z-10 flex h-screen w-screen items-center justify-center bg-black ${isOpen ? "visible" : "invisible"} ${isOpen ? "bg-opacity-60" : "bg-opacity-0"} transition-opacity duration-300`,
        children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: `flex h-[36rem] w-[22rem] flex-col items-center overflow-y-auto rounded-lg bg-white px-6 py-6 ${isOpen ? "opacity-100" : "opacity-0"} transition-all duration-300 md:h-[32rem] md:w-[35rem]`,
            children: [
              /* @__PURE__ */ jsx("button", { className: "place-self-end", onClick: () => setIsOpen(false), children: /* @__PURE__ */ jsx("span", { className: "mr-2 font-visby-medium text-xl text-black", children: "X" }) }),
              /* @__PURE__ */ jsxs("form", { className: "mt-4 w-[85%]", onSubmit: handleSubmit, children: [
                /* @__PURE__ */ jsxs("h3", { className: "text-center font-visby-medium md:text-xl", children: [
                  "Hi there! Tap in and join the pre-launch list to stay up to date with upcoming announcements, features, and more!",
                  " "
                ] }),
                /* @__PURE__ */ jsx("h4", { className: "mt-10 font-visby-medium text-[16px]", children: "Check one or more boxes of which applies to you." }),
                /* @__PURE__ */ jsxs("div", { className: "mb-4 mt-4 flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      className: "accent-brand-green-1",
                      type: "checkbox",
                      ref: familiesCheckbox,
                      id: "families"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "label",
                    {
                      className: "text-brand-gray font-visby-regular text-[16px]",
                      htmlFor: "families",
                      children: "Families"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mb-4 mt-4 flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      className: "accent-brand-green-1",
                      type: "checkbox",
                      ref: babysittersCheckbox,
                      id: "babysitters"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "label",
                    {
                      className: "text-brand-gray font-visby-regular text-[16px]",
                      htmlFor: "babysitters",
                      children: "Babysitters & Nannies"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mb-4 mt-4 flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      className: "accent-brand-green-1",
                      type: "checkbox",
                      ref: daycareCheckbox,
                      id: "daycare"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "label",
                    {
                      className: "text-brand-gray font-visby-regular text-[16px]",
                      htmlFor: "daycare",
                      children: "Daycare Centers & In-Home Daycare"
                    }
                  ),
                  /* @__PURE__ */ jsx("br", {})
                ] }),
                /* @__PURE__ */ jsx(
                  "label",
                  {
                    className: "text-brand-gray mb-1 block font-visby-regular  text-xs",
                    htmlFor: "email",
                    children: "Email Address"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    onChange: (e) => setEmail(e.target.value),
                    className: "border-brand-gray block h-12 w-full rounded-lg border  p-2.5 text-sm text-black focus:border-brand-red focus:outline-none focus:ring-0",
                    type: "email",
                    id: "email",
                    autoComplete: "email",
                    placeholder: "Enter Email Address",
                    required: true
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "submit",
                    id: "subscribe-button",
                    className: "mt-4 w-full rounded-full bg-brand-red py-2 font-visby-medium text-xl text-white hover:bg-opacity-80",
                    children: "Join"
                  }
                )
              ] })
            ]
          }
        )
      }
    )
  ] });
}

const heroImage = new Proxy({"src":"/_astro/Hero-Image.C0fu6Rs9.png","width":1845,"height":1556,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/wgrif/Gryffen Studio/gryffen-studio-templates/nurturelume/src/assets/images/Hero-Image.png";
							}
							
							return target[name];
						}
					});

const $$Astro$3 = createAstro("https://nurturelume.com");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Hero;
  let { header, subHeader, imageSrc } = Astro2.props;
  if (!imageSrc) {
    imageSrc = heroImage;
  }
  return renderTemplate`${maybeRenderHead()}<section id="hero-section"${addAttribute(`mb-10 flex flex-col md:flex-row md:h-[75%] px-4 pt-36 md:pt-10 md:px-10 lg:px-16 xl:px-24`, "class")}${addAttribute(renderTransition($$result, "nfpqcd2h", "slide", ""), "data-astro-transition-scope")}> <div class="flex h-full flex-col items-center justify-center space-y-12 bg-transparent md:w-1/2 md:items-start"> <h1 class="text-center font-visby-heavy text-5xl md:text-start xl:text-[64px]"> ${header} </h1> ${renderSlot($$result, $$slots["default"])} <div class="mt-48"> <div> ${renderComponent($$result, "ModalButton", ModalButton, { "buttonKey": "1", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/wgrif/Gryffen Studio/gryffen-studio-templates/nurturelume/src/components/ModalButton", "client:component-export": "default" })} </div> </div> </div> <div class="mt-10 justify-center md:mt-24 md:flex md:w-1/2"> ${renderComponent($$result, "Image", $$Image, { "src": imageSrc, "alt": "Hero Image", "loading": "eager", "height": "500", "width": "650" })} </div> </section>`;
}, "C:/Users/wgrif/Gryffen Studio/gryffen-studio-templates/nurturelume/src/components/Hero.astro", "self");

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}

const client$1 = createClient({
  projectId: "zgzkbg6y",
  dataset: "production",
  useCdn: false,
  apiVersion: "2024-03-29"
});
const imageBuilder = imageUrlBuilder(client$1);
function urlFor(source) {
  return imageBuilder.image(source);
}

defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string"
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96
      }
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: []
        }
      ]
    })
  ],
  preview: {
    select: {
      title: "name",
      media: "image"
    }
  }
});

const client = createClient({
  projectId: "zgzkbg6y",
  dataset: "production",
  useCdn: false,
  apiVersion: "2024-03-29"
});
async function getPosts() {
  return await client.fetch(
    `*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`
  );
}
async function getPost(slug) {
  return await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
                    title,
                    description,
                    slug,
                    author->{
                        _id,
                        name,
                    },
                    categories,
                    mainImage,
                    _createdAt,
                    body
        }
    `,
    {
      slug
    }
  );
}

const $$Astro$2 = createAstro("https://nurturelume.com");
const $$BlogCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BlogCard;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="flex w-[90%] flex-col items-center duration-200 hover:scale-105 space-y-6 justify-center border-2 shadow-md shadow-brand-blue rounded-m md:w-[70%] lg:w-full"> <a class="font-visby-medium w-full h-full text-black"${addAttribute(`/blog/${post.slug.current}`, "href")}> <p class="font-visby-medium p-4 text-xl text-brand-purple place-self-start"> ${formatDate(post._createdAt)} </p> ${post.mainImage ? renderTemplate`<div class="flex bg-orange-500 bg-opacity-10 p-4 items-center justify-center"> ${renderComponent($$result, "Image", $$Image, { "src": urlFor(post.mainImage)?.url() ?? heroImage, "alt": "Cover Image", "height": "300", "width": "400" })} </div>` : renderTemplate`<div class="bg-orange-500 bg-opacity-10 w-full"></div>`} <div class="p-4 flex flex-col w-full space-y-4 lg:flex-row lg:space-y-0 lg:justify-between"> <h2 class="font-visby-heavy text-4xl lg:w-1/2 text-start">${post.title}</h2> <p class="font-visby-medium text-xl lg:w-1/2">${post.description}</p> </div> </a> </article>`;
}, "C:/Users/wgrif/Gryffen Studio/gryffen-studio-templates/nurturelume/src/components/BlogCard.astro", void 0);

const $$Astro$1 = createAstro("https://nurturelume.com");
const $$Pagination = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { prevUrl, nextUrl, pageLength, firstUrl, currentPage } = Astro2.props;
  const normalizedCurrentPage = Math.max(1, Math.min(currentPage, pageLength));
  const minPage = Math.max(1, normalizedCurrentPage - 1);
  const maxPage = Math.min(pageLength, normalizedCurrentPage + 1);
  return renderTemplate`${maybeRenderHead()}<div class="space-x-10 hidden md:flex"> ${firstUrl} ${prevUrl && renderTemplate`<a class="flex bg-brand-red text-white rounded-full w-96 h-10 items-center justify-center hover:opacity-75"${addAttribute(prevUrl, "href")}> ${prevUrl} </a>`}  <a${addAttribute(`${firstUrl}`, "href")}${addAttribute(`flex ${currentPage === 1 ? "bg-white border-2 border-brand-red text-brand-red hover:bg-brand-red pointer-events-none hover:text-white" : "bg-brand-red text-white hover:opacity-75"} rounded-md w-10 h-10 items-center justify-center`, "class")}> ${1} </a>  ${currentPage === 1 && pageLength > 3 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${Array.from({ length: Math.min(pageLength, 3) - 1 }, (_, i) => i + 2).map((num) => renderTemplate`<a${addAttribute(`${firstUrl}?page=${num}`, "href")}${addAttribute(`flex w-96 bg-brand-red text-white rounded-md w-10 h-10 items-center justify-center hover:opacity-75`, "class")}> ${`${firstUrl}?page=${num}`} </a>`)}` })}`}  ${currentPage > 3 && pageLength > 4 && renderTemplate`<span class="flex w-10 h-10 items-center justify-center">...</span>`}  ${Array.from({ length: maxPage - minPage + 1 }, (_, i) => i + minPage).map(
    (num) => num !== 1 && num !== pageLength && (currentPage !== 1 && currentPage !== pageLength || pageLength <= 3) && // Exclude the first and last pages from the loop
    renderTemplate`<a${addAttribute(`${firstUrl}?page=${num}`, "href")}${addAttribute(`flex ${currentPage === num ? "bg-white border-2 border-brand-red text-brand-red hover:bg-brand-red pointer-events-none hover:text-white" : "bg-brand-red text-white hover:opacity-75"} rounded-md w-10 h-10 items-center justify-center`, "class")}> ${num} </a>`
  )}  ${pageLength - currentPage >= 3 && pageLength > 4 && renderTemplate`<span class="flex w-10 h-10 items-center justify-center"> ...</span>`}  ${currentPage === pageLength && maxPage === pageLength && pageLength > 3 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${Array.from(
    { length: Math.min(pageLength - 1, 2) },
    (_, i) => i + pageLength - 2
  ).map(
    (num) => num !== 1 && num !== pageLength && // Exclude the first and last pages from the loop
    renderTemplate`<a${addAttribute(`${firstUrl}?page=${num}`, "href")}${addAttribute(`flex bg-brand-red text-white rounded-md w-10 h-10 items-center justify-center hover:opacity-75`, "class")}> ${num} </a>`
  )}` })}`}  ${pageLength !== 1 && // Only render if there's more than 1 page
  renderTemplate`<a${addAttribute(`${firstUrl}?page=${pageLength}`, "href")}${addAttribute(`flex ${currentPage === pageLength ? "bg-white border-2 border-brand-red text-brand-red hover:bg-brand-red pointer-events-none hover:text-white" : "bg-brand-red text-white hover:opacity-75"} rounded-md w-10 h-10 items-center justify-center`, "class")}> ${pageLength} </a>`} ${nextUrl && renderTemplate`<a class="flex bg-brand-red text-white rounded-full w-10 h-10 items-center justify-center hover:opacity-75"${addAttribute(nextUrl, "href")}> <span class="icon-[maki--arrow]"></span> </a>`} </div> <div class="space-x-10 flex md:hidden"> ${prevUrl && renderTemplate`<a class="flex bg-brand-red text-white rounded-full w-10 h-10 items-center justify-center hover:opacity-75"${addAttribute(prevUrl, "href")}> <span class="icon-[maki--arrow] rotate-180"></span> </a>`} ${nextUrl && renderTemplate`<a class="flex bg-brand-red text-white rounded-full w-10 h-10 items-center justify-center hover:opacity-75"${addAttribute(nextUrl, "href")}> <span class="icon-[maki--arrow]"></span> </a>`} </div>`;
}, "C:/Users/wgrif/Gryffen Studio/gryffen-studio-templates/nurturelume/src/components/Pagination.astro", void 0);

const $$Astro = createAstro("https://nurturelume.com");
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = await getPosts();
  const currentPage = +Astro2.url.searchParams?.get("page") || 1;
  const postsPerPage = 1;
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const pathname = new URL(Astro2.request.url).pathname.split("/");
  const firstPath = pathname[1];
  const nextUrl = currentPage < totalPages ? firstPath + "?page=" + (currentPage + 1) : null;
  const prevUrl = currentPage > 1 ? firstPath + "?page=" + (currentPage - 1) : null;
  const postsForPage = posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);
  console.log(currentPage);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "NurtureLume Blog", "description": "Learn information about finding childcare and being a childcare provider on our NurtureLume Blog!", "robots": false }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "header": "Explore Our Childcare Knowledge Base", "subHeader": "Delivering a centralized platform to assist parents in their childcare discovery journey and equip providers with a simplified childcare management system." })} ${maybeRenderHead()}<main class="mb-10 flex w-full flex-col items-center justify-center space-y-16 px-4 md:px-10 lg:px-16 xl:px-24"> <section class="grid grid-cols-1 gap-y-10 w-full h-full justify-items-center lg:justify-items-stretch lg:grid-cols-2 lg:gap-x-10"> ${postsForPage.map((post) => {
    return renderTemplate`${renderComponent($$result2, "BlogCard", $$BlogCard, { "post": post })}`;
  })} </section> ${renderComponent($$result2, "Pagination", $$Pagination, { "prevUrl": prevUrl, "nextUrl": nextUrl, "currentPage": currentPage, "firstUrl": `/${firstPath}`, "pageLength": totalPages })} </main> ` })}`;
}, "C:/Users/wgrif/Gryffen Studio/gryffen-studio-templates/nurturelume/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/wgrif/Gryffen Studio/gryffen-studio-templates/nurturelume/src/pages/blog/index.astro";
const $$url = "/blog";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
        __proto__: null,
        default: $$Index,
        file: $$file,
        prerender,
        url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, ModalButton as M, $$Hero as a, getPost as b, formatDate as f, getPosts as g, index as i, urlFor as u };
