import { useState, useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Dropdown from '../../components/Dropdown';
import Swal from 'sweetalert2';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../store';
import { setPageTitle } from '../../store/themeConfigSlice';
import IconMail from '../../components/Icon/IconMail';
import IconStar from '../../components/Icon/IconStar';
import IconSend from '../../components/Icon/IconSend';
import IconInfoHexagon from '../../components/Icon/IconInfoHexagon';
import IconFile from '../../components/Icon/IconFile';
import IconTrashLines from '../../components/Icon/IconTrashLines';
import IconCaretDown from '../../components/Icon/IconCaretDown';
import IconArchive from '../../components/Icon/IconArchive';
import IconBookmark from '../../components/Icon/IconBookmark';
import IconVideo from '../../components/Icon/IconVideo';
import IconChartSquare from '../../components/Icon/IconChartSquare';
import IconUserPlus from '../../components/Icon/IconUserPlus';
import IconPlus from '../../components/Icon/IconPlus';
import IconRefresh from '../../components/Icon/IconRefresh';
import IconWheel from '../../components/Icon/IconWheel';
import IconHorizontalDots from '../../components/Icon/IconHorizontalDots';
import IconOpenBook from '../../components/Icon/IconOpenBook';
import IconBook from '../../components/Icon/IconBook';
import IconTrash from '../../components/Icon/IconTrash';
import IconRestore from '../../components/Icon/IconRestore';
import IconMenu from '../../components/Icon/IconMenu';
import IconSearch from '../../components/Icon/IconSearch';
import IconSettings from '../../components/Icon/IconSettings';
import IconHelpCircle from '../../components/Icon/IconHelpCircle';
import IconUser from '../../components/Icon/IconUser';
import IconMessage2 from '../../components/Icon/IconMessage2';
import IconUsers from '../../components/Icon/IconUsers';
import IconTag from '../../components/Icon/IconTag';
import IconPaperclip from '../../components/Icon/IconPaperclip';
import IconArrowLeft from '../../components/Icon/IconArrowLeft';
import IconPrinter from '../../components/Icon/IconPrinter';
import IconArrowBackward from '../../components/Icon/IconArrowBackward';
import IconArrowForward from '../../components/Icon/IconArrowForward';
import IconGallery from '../../components/Icon/IconGallery';
import IconFolder from '../../components/Icon/IconFolder';
import IconZipFile from '../../components/Icon/IconZipFile';
import IconDownload from '../../components/Icon/IconDownload';
import IconTxtFile from '../../components/Icon/IconTxtFile';

const Mailbox = () => {
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(setPageTitle('Mailbox'));
    // });
    // const [mailList, setMailList] = useState([
    //     {
    //         id: 1,
    //         path: 'profile-15.jpeg',
    //         firstName: 'Laurie',
    //         lastName: 'Fox',
    //         email: 'laurieFox@mail.com',
    //         date: new Date(),
    //         time: '2:00 PM',
    //         title: 'Promotion Page',
    //         displayDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
    //         type: 'inbox',
    //         isImportant: false,
    //         isStar: true,
    //         group: 'social',
    //         isUnread: false,
    //         attachments: [
    //             {
    //                 name: 'Confirm File.txt',
    //                 size: '450KB',
    //                 type: 'file',
    //             },
    //             {
    //                 name: 'Important Docs.xml',
    //                 size: '2.1MB',
    //                 type: 'file',
    //             },
    //         ],
    //         description: `
    //                           <p class="mail-content"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
    //                           <div class="gallery text-center">
    //                               <img alt="image-gallery" src="${'/assets/images/carousel3.jpeg'}" class="mb-4 mt-4" style="width: 250px; height: 180px;" />
    //                               <img alt="image-gallery" src="${'/assets/images/carousel2.jpeg'}" class="mb-4 mt-4" style="width: 250px; height: 180px;" />
    //                               <img alt="image-gallery" src="${'/assets/images/carousel1.jpeg'}" class="mb-4 mt-4" style="width: 250px; height: 180px;" />
    //                           </div>
    //                           <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
    //                           `,
    //     },
    //     {
    //         id: 2,
    //         path: 'profile-14.jpeg',
    //         firstName: 'Andy',
    //         lastName: 'King',
    //         email: 'kingAndy@mail.com',
    //         date: new Date(),
    //         time: '6:28 PM',
    //         title: 'Hosting Payment Reminder',
    //         displayDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
    //         type: 'inbox',
    //         isImportant: false,
    //         isStar: false,
    //         group: '',
    //         isUnread: false,
    //         description: `
    //                           <p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
    //                           <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
    //                           `,
    //     },
    //     {
    //         id: 3,
    //         path: '',
    //         firstName: 'Kristen',
    //         lastName: 'Beck',
    //         email: 'kirsten.beck@mail.com',
    //         date: new Date(),
    //         time: '11:09 AM',
    //         title: 'Verification Link',
    //         displayDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
    //         type: 'inbox',
    //         isImportant: false,
    //         isStar: false,
    //         group: 'social',
    //         isUnread: true,
    //         description: `
    //                           <p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
    //                           <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
    //                           `,
    //     },
    //     {
    //         id: 4,
    //         path: 'profile-16.jpeg',
    //         firstName: 'Christian',
    //         lastName: '',
    //         email: 'christian@mail.com',
    //         date: '11/30/2021',
    //         time: '2:00 PM',
    //         title: 'New Updates',
    //         displayDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
    //         type: 'inbox',
    //         isImportant: false,
    //         isStar: false,
    //         group: 'private',
    //         isUnread: false,
    //         attachments: [
    //             {
    //                 name: 'update.zip',
    //                 size: '1.38MB',
    //                 type: 'zip',
    //             },
    //         ],
    //         description: `
    //                           <p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
    //                           <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
    //                           `,
    //     },
    //     {
    //         id: 5,
    //         path: 'profile-17.jpeg',
    //         firstName: 'Roxanne',
    //         lastName: '',
    //         email: 'roxanne@mail.com',
    //         date: '11/15/2021',
    //         time: '2:00 PM',
    //         title: 'Schedular Alert',
    //         displayDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
    //         type: 'inbox',
    //         isImportant: false,
    //         isStar: false,
    //         group: 'personal',
    //         isUnread: true,
    //         description: `
    //                           <p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
    //                           <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
    //                           `,
    //     },
    //     {
    //         id: 6,
    //         path: 'profile-18.jpeg',
    //         firstName: 'Nia',
    //         lastName: 'Hillyer',
    //         email: 'niahillyer@mail.com',
    //         date: '08/16/2020',
    //         time: '2:22 AM',
    //         title: 'Motion UI Kit',
    //         displayDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
    //         type: 'inbox',
    //         isImportant: true,

    //         isStar: true,
    //         group: '',
    //         isUnread: false,
    //         description: `
    //                           <p class="mail-content"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
    //                           <div class="gallery text-center">
    //                               <img alt="image-gallery" src="${'/assets/images/carousel3.jpeg'}" class="mb-4 mt-4" style="width: 250px; height: 180px;">
    //                               <img alt="image-gallery" src="${'/assets/images/carousel2.jpeg'}" class="mb-4 mt-4" style="width: 250px; height: 180px;">
    //                               <img alt="image-gallery" src="${'/assets/images/carousel1.jpeg'}" class="mb-4 mt-4" style="width: 250px; height: 180px;">
    //                           </div>
    //                           <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
    //                           `,
    //     },
    //     {
    //         id: 7,
    //         path: 'profile-19.jpeg',
    //         firstName: 'Iris',
    //         lastName: 'Hubbard',
    //         email: 'irishubbard@mail.com',
    //         date: '08/16/2020',
    //         time: '1:40 PM',
    //         title: 'Green Illustration',
    //         displayDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
    //         type: 'inbox',
    //         isImportant: true,

    //         isStar: true,
    //         group: '',
    //         isUnread: false,
    //         description: `
    //                           <p class="mail-content"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
    //                           <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
    //                           `,
    //     },
    //     {
    //         id: 8,
    //         path: '',
    //         firstName: 'Ernest',
    //         lastName: 'Reeves',
    //         email: 'reevesErnest@mail.com',
    //         date: '06/02/2020',
    //         time: '8:25 PM',
    //         title: 'Youtube',
    //         displayDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
    //         type: 'archive',
    //         isImportant: true,

    //         isStar: true,
    //         group: 'work',
    //         isUnread: false,
    //         description: `
    //                           <p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
    //                           <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
    //                           `,
    //     },
    //     {
    //         id: 9,
    //         path: 'profile-20.jpeg',
    //         firstName: 'Info',
    //         lastName: 'Company',
    //         email: 'infocompany@mail.com',
    //         date: '02/10/2020',
    //         time: '7:00 PM',
    //         title: '50% Discount',
    //         displayDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
    //         type: 'inbox',
    //         isImportant: false,
    //         isStar: false,
    //         group: 'work',
    //         isUnread: false,
    //         description: `
    //                           <p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
    //                           <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
    //                           `,
    //     },

    //     {
    //         id: 10,
    //         path: '',
    //         firstName: 'NPM',
    //         lastName: 'Inc',
    //         email: 'npminc@mail.com',
    //         date: '12/15/2018',
    //         time: '8:37 AM',
    //         title: 'npm Inc',
    //         displayDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
    //         type: 'archive',
    //         isImportant: false,
    //         isStar: false,
    //         group: 'personal',
    //         isUnread: true,
    //         attachments: [
    //             {
    //                 name: 'package.zip',
    //                 size: '450KB',
    //                 type: 'zip',
    //             },
    //         ],
    //         description: `
    //                           <p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
    //                           <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
    //                           `,
    //     },
    //     {
    //         id: 11,
    //         path: 'profile-21.jpeg',
    //         firstName: 'Marlene',
    //         lastName: 'Wood',
    //         email: 'marlenewood@mail.com',
    //         date: '11/25/2018',
    //         time: '1:51 PM',
    //         title: 'eBill',
    //         displayDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
    //         type: 'inbox',
    //         isImportant: false,
    //         isStar: false,
    //         group: 'personal',
    //         isUnread: false,
    //         description: `
    //                           <p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
    //                           <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
    //                           `,
    //     },

    //     {
    //         id: 12,
    //         path: '',
    //         firstName: 'Keith',
    //         lastName: 'Foster',
    //         email: 'kf@mail.com',
    //         date: '12/15/2018',
    //         time: '9:30 PM',
    //         title: 'Web Design News',
    //         displayDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
    //         type: 'draft',
    //         isImportant: false,
    //         isStar: false,
    //         group: 'personal',
    //         isUnread: false,
    //         description: `
    //                           <p class="mail-content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.</p>
    //                           `,
    //     },
    //     {
    //         id: 13,
    //         path: '',
    //         firstName: 'Amy',
    //         lastName: 'Diaz',
    //         email: 'amyDiaz@mail.com',
    //         date: '12/15/2018',
    //         time: '2:00 PM',
    //         title: 'Ecommerce Analytics',
    //         displayDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
    //         type: 'draft',
    //         isImportant: false,
    //         isStar: false,
    //         group: 'private',
    //         isUnread: false,
    //         description: `
    //                           <p class="mail-content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.</p>
    //                           `,
    //     },

    //     {
    //         id: 14,
    //         path: '',
    //         firstName: 'Alan',
    //         lastName: '',
    //         email: 'alan@mail.com',
    //         date: '12/16/2019',
    //         time: '8:45 AM',
    //         title: 'Mozilla Update',
    //         displayDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
    //         type: 'sent_mail',
    //         isImportant: false,
    //         isStar: false,
    //         group: 'work',
    //         isUnread: false,
    //         attachments: [
    //             {
    //                 name: 'Confirm File',
    //                 size: '450KB',
    //                 type: 'file',
    //             },
    //             {
    //                 name: 'Important Docs',
    //                 size: '2.1MB',
    //                 type: 'folder',
    //             },
    //             {
    //                 name: 'Photo.png',
    //                 size: '50kb',
    //                 type: 'image',
    //             },
    //         ],
    //         description: `
    //                           <p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
    //                           <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
    //                           `,
    //     },
    //     {
    //         id: 15,
    //         path: '',
    //         firstName: 'Justin',
    //         lastName: 'Cross',
    //         email: 'justincross@mail.com',
    //         date: '09/14/219',
    //         time: '3:10 PM',
    //         title: 'App Project Checklist',
    //         displayDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
    //         type: 'sent_mail',
    //         isImportant: false,
    //         isStar: false,
    //         group: '',
    //         isUnread: false,
    //         attachments: [
    //             {
    //                 name: 'Important Docs',
    //                 size: '2.1MB',
    //                 type: 'folder',
    //             },
    //             {
    //                 name: 'Photo.png',
    //                 size: '50kb',
    //                 type: 'image',
    //             },
    //         ],
    //         description: `
    //                           <p class="mail-content"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
    //                           <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
    //                           `,
    //     },

    //     {
    //         id: 16,
    //         path: 'profile-21.jpeg',
    //         firstName: 'Alex',
    //         lastName: 'Gray',
    //         email: 'alexGray@mail.com',
    //         date: '08/16/2019',
    //         time: '10:18 AM',
    //         title: 'Weekly Newsletter',
    //         displayDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
    //         type: 'spam',
    //         isImportant: false,
    //         isStar: false,
    //         group: '',
    //         isUnread: false,
    //         attachments: [
    //             {
    //                 name: 'Confirm File',
    //                 size: '450KB',
    //                 type: 'file',
    //             },
    //             {
    //                 name: 'Important Docs',
    //                 size: '2.1MB',
    //                 type: 'folder',
    //             },
    //             {
    //                 name: 'Photo.png',
    //                 size: '50kb',
    //                 type: 'image',
    //             },
    //         ],
    //         description: `
    //                           <p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
    //                           <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
    //                           `,
    //     },
    //     {
    //         id: 17,
    //         path: 'profile-22.jpeg',
    //         firstName: 'Info',
    //         lastName: 'Company',
    //         email: 'infocompany@mail.com',
    //         date: '02/10/2018',
    //         time: '7:00 PM',
    //         title: '50% Discount',
    //         displayDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
    //         type: 'spam',
    //         isImportant: false,
    //         isStar: false,
    //         group: 'work',
    //         isUnread: false,
    //         description: `
    //                           <p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
    //                           <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
    //                           `,
    //     },
    //     {
    //         id: 18,
    //         path: 'profile-21.jpeg',
    //         firstName: 'Marlene',
    //         lastName: 'Wood',
    //         email: 'marlenewood@mail.com',
    //         date: '11/25/2017',
    //         time: '1:51 PM',
    //         title: 'eBill',
    //         displayDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
    //         type: 'spam',
    //         isImportant: false,
    //         isStar: false,
    //         group: 'personal',
    //         isUnread: false,
    //         description: `
    //                           <p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
    //                           <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
    //                           `,
    //     },

    //     {
    //         id: 19,
    //         path: 'profile-23.jpeg',
    //         firstName: 'Ryan MC',
    //         lastName: 'Killop',
    //         email: 'ryanMCkillop@mail.com',
    //         date: '08/17/2018',
    //         time: '11:45 PM',
    //         title: 'Make it Simple',
    //         displayDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
    //         type: 'trash',
    //         isImportant: false,
    //         isStar: false,
    //         group: '',
    //         isUnread: false,
    //         description: `
    //                           <p class="mail-content"> Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
    //                           <div class="gallery text-center">
    //                               <img alt="image-gallery" src="${'/assets/images/carousel2.jpeg'}" class="mb-4 mt-4" style="width: 250px; height: 180px;">
    //                               <img alt="image-gallery" src="${'/assets/images/carousel3.jpeg'}" class="mb-4 mt-4" style="width: 250px; height: 180px;">
    //                               <img alt="image-gallery" src="${'/assets/images/carousel1.jpeg'}" class="mb-4 mt-4" style="width: 250px; height: 180px;">
    //                           </div>
    //                           <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
    //                           `,
    //     },
    //     {
    //         id: 20,
    //         path: 'profile-23.jpeg',
    //         firstName: 'Liam',
    //         lastName: 'Sheldon',
    //         email: 'liamsheldon@mail.com',
    //         date: '08/17/2018 ',
    //         time: '11:45 PM',
    //         title: 'New Offers',
    //         displayDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
    //         type: 'trash',
    //         isImportant: false,
    //         isStar: false,
    //         group: '',
    //         isUnread: false,
    //         attachments: [
    //             {
    //                 name: 'Confirm File',
    //                 size: '450KB',
    //                 type: 'file',
    //             },
    //         ],
    //         description: `
    //                           <p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
    //                           <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
    //                           `,
    //     },
    //     {
    //         id: 21,
    //         path: 'profile-21.jpeg',
    //         firstName: 'Porter',
    //         lastName: 'Taylor',
    //         email: 'porter.harber@wiza.info',
    //         date: '06/01/2020',
    //         time: '02:40 PM',
    //         title: 'Id labore ex et quam laborum',
    //         displayDescription: 'Laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
    //         type: 'inbox',
    //         isImportant: false,
    //         isStar: false,
    //         group: '',
    //         isUnread: false,
    //         description: `<p class="mail-content">Laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium</p>
    //                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    //     },
    //     {
    //         id: 22,
    //         path: 'profile-22.jpeg',
    //         firstName: 'Brock',
    //         lastName: 'Mills',
    //         email: 'brock.gibson@farrell.biz',
    //         date: '09/08/2020',
    //         time: '04:20 AM',
    //         title: 'Quo vero reiciendis velit similique earum',
    //         displayDescription:
    //             'Est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
    //         type: 'inbox',
    //         isImportant: false,
    //         isStar: false,
    //         group: '',
    //         isUnread: false,
    //         description: `<p class="mail-content">Est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et</p>
    //                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    //     },
    //     {
    //         id: 23,
    //         path: 'profile-3.jpeg',
    //         firstName: 'Nyost',
    //         lastName: 'Terry',
    //         email: 'nyost@yahoo.com',
    //         date: '04/01/2019',
    //         time: '02:10 AM',
    //         title: 'Odio adipisci rerum aut animi',
    //         displayDescription:
    //             'Quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione',
    //         type: 'inbox',
    //         isImportant: true,
    //         isStar: false,
    //         group: 'personal',
    //         isUnread: false,
    //         description: `<p class="mail-content">Quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione</p>
    //                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    //     },
    //     {
    //         id: 24,
    //         path: 'profile-2.jpeg',
    //         firstName: 'Leonardo',
    //         lastName: 'Knox',
    //         email: 'leonardo61@yahoo.com',
    //         date: '08/08/2018',
    //         time: '07:50 PM',
    //         title: 'Alias odio sit',
    //         displayDescription: 'Non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati',
    //         type: 'inbox',
    //         isImportant: false,
    //         isStar: true,
    //         group: '',
    //         isUnread: false,
    //         description: `<p class="mail-content">Non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati</p>
    //                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    //     },
    //     {
    //         id: 25,
    //         path: 'profile-24.jpeg',
    //         firstName: 'Melisa',
    //         lastName: 'Mitchell',
    //         email: 'melisa.legros@mayer.com',
    //         date: '10/03/2018',
    //         time: '06:40 AM',
    //         title: 'Vero eaque aliquid doloribus et culpa',
    //         displayDescription: 'Harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et',
    //         type: 'inbox',
    //         isImportant: true,
    //         isStar: true,
    //         group: 'work',
    //         isUnread: false,
    //         description: `<p class="mail-content">Harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et</p>
    //                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    //     },
    //     {
    //         id: 26,
    //         path: 'profile-26.jpeg',
    //         firstName: 'Florida',
    //         lastName: 'Morgan',
    //         email: 'florida54@gmail.com',
    //         date: '05/12/2019',
    //         time: '09:20 PM',
    //         title: 'Et fugit eligendi deleniti quidem qui sint nihil autem',
    //         displayDescription:
    //             'Doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in',
    //         type: 'inbox',
    //         isImportant: false,
    //         isStar: false,
    //         group: '',
    //         isUnread: false,
    //         description: `<p class="mail-content">Doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in</p>
    //                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    //     },
    //     {
    //         id: 27,
    //         path: 'profile-27.jpeg',
    //         firstName: 'Madison',
    //         lastName: 'King',
    //         email: 'madison86@yahoo.com',
    //         date: '12/04/2018',
    //         time: '10:40 PM',
    //         title: 'Repellat consequatur praesentium vel minus molestias voluptatum',
    //         displayDescription:
    //             'Maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor',
    //         type: 'inbox',
    //         isImportant: false,
    //         isStar: false,
    //         group: 'private',
    //         isUnread: false,
    //         description: `<p class="mail-content">Maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor</p>
    //                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    //     },
    //     {
    //         id: 28,
    //         path: 'profile-30.jpeg',
    //         firstName: 'Paul',
    //         lastName: 'Lambert',
    //         email: 'paul.cruickshank@yahoo.com',
    //         date: '06/05/2018',
    //         time: '01:40 AM',
    //         title: 'Et omnis dolorem',
    //         displayDescription: 'Ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque',
    //         type: 'inbox',
    //         isImportant: true,
    //         isStar: false,
    //         group: '',
    //         isUnread: false,
    //         description: `<p class="mail-content">Ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque</p>
    //                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    //     },
    //     {
    //         id: 29,
    //         path: 'profile-31.jpeg',
    //         firstName: 'Brakus',
    //         lastName: 'Morrison',
    //         email: 'brakus.heidi@gmail.com',
    //         date: '03/09/2018',
    //         time: '06:10 PM',
    //         title: 'Provident id voluptas',
    //         displayDescription: 'Sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus',
    //         type: 'inbox',
    //         isImportant: false,
    //         isStar: true,
    //         group: 'social',
    //         isUnread: false,
    //         description: `<p class="mail-content">Sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus</p>
    //                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    //     },
    //     {
    //         id: 30,
    //         path: 'profile-32.jpeg',
    //         firstName: 'Predovic',
    //         lastName: 'Peake',
    //         email: 'predovic.arianna@kirlin.com',
    //         date: '05/06/2018',
    //         time: '09:00 AM',
    //         title: 'Eaque et deleniti atque tenetur ut quo ut',
    //         displayDescription: 'Voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facili',
    //         type: 'inbox',
    //         isImportant: false,
    //         isStar: false,
    //         group: 'personal',
    //         isUnread: false,
    //         description: `<p class="mail-content">Voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facili</p>
    //                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    //     },
    //     {
    //         id: 31,
    //         path: 'profile-32.jpeg',
    //         firstName: 'shaylee',
    //         lastName: 'Buford',
    //         email: 'Buford@shaylee.biz',
    //         date: '07/03/2018',
    //         time: '08:15 AM',
    //         title: 'Ex velit ut cum eius odio ad placeat',
    //         displayDescription: 'Quia incidunt ut\naliquid est ut rerum deleniti iure est\nipsum quia ea sint et\nvoluptatem quaerat eaque repudiandae eveniet aut',
    //         type: 'inbox',
    //         isImportant: false,
    //         isStar: false,
    //         group: '',
    //         isUnread: false,
    //         description: `<p class="mail-content"></p>
    //                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    //     },
    //     {
    //         id: 32,
    //         path: 'profile-32.jpeg',
    //         firstName: 'Maria',
    //         lastName: 'laurel',
    //         email: 'Maria@laurel.name',
    //         date: '08/03/2018',
    //         time: '09:30 AM',
    //         title: 'Dolorem architecto ut pariatur quae qui suscipit',
    //         displayDescription: 'Nihil ea itaque libero illo\nofficiis quo quo dicta inventore consequatur voluptas voluptatem\ncorporis sed necessitatibus velit tempore\nrerum velit et temporibus',
    //         type: 'inbox',
    //         isImportant: false,
    //         isStar: false,
    //         group: '',
    //         isUnread: false,
    //         description: `<p class="mail-content"></p>
    //                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    //     },
    //     {
    //         id: 33,
    //         path: 'profile-32.jpeg',
    //         firstName: 'Jaeden',
    //         lastName: 'Towne',
    //         email: 'Jaeden.Towne@arlene.tv',
    //         date: '11/07/2018',
    //         time: '10:15 AM',
    //         title: 'Voluptatum totam vel voluptate omnis',
    //         displayDescription: 'Fugit harum quae vero\nlibero unde tempore\nsoluta eaque culpa sequi quibusdam nulla id\net et necessitatibus',
    //         type: 'inbox',
    //         isImportant: false,
    //         isStar: false,
    //         group: '',
    //         isUnread: false,
    //         description: `<p class="mail-content"></p>
    //                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    //     },
    //     {
    //         id: 34,
    //         path: 'profile-32.jpeg',
    //         firstName: 'Schneider',
    //         lastName: 'Ethelyn',
    //         email: 'Ethelyn.Schneider@emelia.co.uk',
    //         date: '07/11/2018',
    //         time: '10:30 AM',
    //         title: 'Omnis nemo sunt ab autem',
    //         displayDescription: 'Omnis temporibus quasi ab omnis\nfacilis et omnis illum quae quasi aut\nminus iure ex rem ut reprehenderit\nin non fugit',
    //         type: 'inbox',
    //         isImportant: false,
    //         isStar: false,
    //         group: '',
    //         isUnread: false,
    //         description: `<p class="mail-content"></p>
    //                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    //     },
    //     {
    //         id: 35,
    //         path: 'profile-32.jpeg',
    //         firstName: 'Anna',
    //         lastName: 'Georgi',
    //         email: 'Georgianna@florence.io',
    //         date: '10/10/2017',
    //         time: '10:45 AM',
    //         title: 'Repellendus sapiente omnis praesentium aliquam ipsum id molestiae omnis',
    //         displayDescription: 'Dolor mollitia quidem facere et\nvel est ut\nut repudiandae est quidem dolorem sed atque\nrem quia aut adipisci sunt',
    //         type: 'inbox',
    //         isImportant: false,
    //         isStar: false,
    //         group: '',
    //         isUnread: false,
    //         description: `<p class="mail-content"></p>
    //                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    //     },
    // ]);

    // const defaultParams = {
    //     id: null,
    //     from: 'vristo@mail.com',
    //     to: '',
    //     cc: '',
    //     title: '',
    //     file: null,
    //     description: '',
    //     displayDescription: '',
    // };

    // const [isShowMailMenu, setIsShowMailMenu] = useState(false);
    // const [isEdit, setIsEdit] = useState(false);
    // const [selectedTab, setSelectedTab] = useState('inbox');
    // const [filteredMailList, setFilteredMailList] = useState<any>(mailList.filter((d) => d.type === 'inbox'));
    // const [ids, setIds] = useState<any>([]);
    // const [searchText, setSearchText] = useState<any>('');
    // const [selectedMail, setSelectedMail] = useState<any>(null);
    // const [params, setParams] = useState<any>(JSON.parse(JSON.stringify(defaultParams)));
    // const [pagedMails, setPagedMails] = useState<any>([]);

    // const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

    // const [pager] = useState<any>({
    //     currentPage: 1,
    //     totalPages: 0,
    //     pageSize: 10,
    //     startIndex: 0,
    //     endIndex: 0,
    // });

    // useEffect(() => {
    //     searchMails();
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [selectedTab, searchText, mailList]);

    // const refreshMails = () => {
    //     setSearchText('');
    //     searchMails(false);
    // };

    // const setArchive = () => {
    //     if (ids.length) {
    //         let items = filteredMailList.filter((d: any) => ids.includes(d.id));
    //         for (let item of items) {
    //             item.type = item.type === 'archive' ? 'inbox' : 'archive';
    //         }
    //         if (selectedTab === 'archive') {
    //             showMessage(ids.length + ' Mail has been removed from Archive.');
    //         } else {
    //             showMessage(ids.length + ' Mail has been added to Archive.');
    //         }
    //         searchMails(false);
    //     }
    // };

    // const setSpam = () => {
    //     if (ids.length) {
    //         let items = filteredMailList.filter((d: any) => ids.includes(d.id));
    //         for (let item of items) {
    //             item.type = item.type === 'spam' ? 'inbox' : 'spam';
    //         }
    //         if (selectedTab === 'spam') {
    //             showMessage(ids.length + ' Mail has been removed from Spam.');
    //         } else {
    //             showMessage(ids.length + ' Mail has been added to Spam.');
    //         }
    //         searchMails(false);
    //     }
    // };

    // const setGroup = (group: any) => {
    //     if (ids.length) {
    //         let items = mailList.filter((d: any) => ids.includes(d.id));
    //         for (let item of items) {
    //             item.group = group;
    //         }

    //         showMessage(ids.length + ' Mail has been grouped as ' + group.toUpperCase());
    //         clearSelection();
    //         setTimeout(() => {
    //             searchMails(false);
    //         });
    //     }
    // };

    // const setAction = (type: any) => {
    //     if (ids.length) {
    //         const totalSelected = ids.length;
    //         let items = filteredMailList.filter((d: any) => ids.includes(d.id));
    //         for (let item of items) {
    //             if (type === 'trash') {
    //                 item.type = 'trash';
    //                 item.group = '';
    //                 item.isStar = false;
    //                 item.isImportant = false;
    //                 showMessage(totalSelected + ' Mail has been deleted.');
    //                 searchMails(false);
    //             } else if (type === 'read') {
    //                 item.isUnread = false;
    //                 showMessage(totalSelected + ' Mail has been marked as Read.');
    //             } else if (type === 'unread') {
    //                 item.isUnread = true;
    //                 showMessage(totalSelected + ' Mail has been marked as UnRead.');
    //             } else if (type === 'important') {
    //                 item.isImportant = true;
    //                 showMessage(totalSelected + ' Mail has been marked as Important.');
    //             } else if (type === 'unimportant') {
    //                 item.isImportant = false;
    //                 showMessage(totalSelected + ' Mail has been marked as UnImportant.');
    //             } else if (type === 'star') {
    //                 item.isStar = true;
    //                 showMessage(totalSelected + ' Mail has been marked as Star.');
    //             }
    //             //restore & permanent delete
    //             else if (type === 'restore') {
    //                 item.type = 'inbox';
    //                 showMessage(totalSelected + ' Mail Restored.');
    //                 searchMails(false);
    //             } else if (type === 'delete') {
    //                 setMailList(mailList.filter((d: any) => d.id !== item.id));
    //                 showMessage(totalSelected + ' Mail Permanently Deleted.');
    //                 searchMails(false);
    //             }
    //         }
    //         clearSelection();
    //     }
    // };

    // const selectMail = (item: any) => {
    //     if (item) {
    //         if (item.type !== 'draft') {
    //             if (item && item.isUnread) {
    //                 item.isUnread = false;
    //             }
    //             setSelectedMail(item);
    //         } else {
    //             openMail('draft', item);
    //         }
    //     } else {
    //         setSelectedMail('');
    //     }
    // };

    // const setStar = (mailId: number) => {
    //     if (mailId) {
    //         let item = filteredMailList.find((d: any) => d.id === mailId);
    //         item.isStar = !item.isStar;
    //         setTimeout(() => {
    //             searchMails(false);
    //         });
    //     }
    // };

    // const setImportant = (mailId: number) => {
    //     if (mailId) {
    //         let item = filteredMailList.find((d: any) => d.id === mailId);
    //         item.isImportant = !item.isImportant;
    //         setTimeout(() => {
    //             searchMails(false);
    //         });
    //     }
    // };

    // const showTime = (item: any) => {
    //     const displayDt: any = new Date(item.date);
    //     const cDt: any = new Date();
    //     if (displayDt.toDateString() === cDt.toDateString()) {
    //         return item.time;
    //     } else {
    //         if (displayDt.getFullYear() === cDt.getFullYear()) {
    //             var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    //             return monthNames[displayDt.getMonth()] + ' ' + String(displayDt.getDate()).padStart(2, '0');
    //         } else {
    //             return String(displayDt.getMonth() + 1).padStart(2, '0') + '/' + String(displayDt.getDate()).padStart(2, '0') + '/' + displayDt.getFullYear();
    //         }
    //     }
    // };

    // const openMail = (type: string, item: any) => {
    //     if (type === 'add') {
    //         setIsShowMailMenu(false);
    //         setParams(JSON.parse(JSON.stringify(defaultParams)));
    //     } else if (type === 'draft') {
    //         let data = JSON.parse(JSON.stringify(item));
    //         setParams({ ...data, from: defaultParams.from, to: data.email, displayDescription: data.email });
    //     } else if (type === 'reply') {
    //         let data = JSON.parse(JSON.stringify(item));
    //         setParams({
    //             ...data,
    //             from: defaultParams.from,
    //             to: data.email,
    //             title: 'Re: ' + data.title,
    //             displayDescription: 'Re: ' + data.title,
    //         });
    //     } else if (type === 'forward') {
    //         let data = JSON.parse(JSON.stringify(item));
    //         setParams({
    //             ...data,
    //             from: defaultParams.from,
    //             to: data.email,
    //             title: 'Fwd: ' + data.title,
    //             displayDescription: 'Fwd: ' + data.title,
    //         });
    //     }
    //     setIsEdit(true);
    // };

    // const searchMails = (isResetPage = true) => {
    //     if (isResetPage) {
    //         pager.currentPage = 1;
    //     }

    //     let res;
    //     if (selectedTab === 'important') {
    //         res = mailList.filter((d) => d.isImportant);
    //     } else if (selectedTab === 'star') {
    //         res = mailList.filter((d) => d.isStar);
    //     } else if (selectedTab === 'personal' || selectedTab === 'work' || selectedTab === 'social' || selectedTab === 'private') {
    //         res = mailList.filter((d) => d.group === selectedTab);
    //     } else {
    //         res = mailList.filter((d) => d.type === selectedTab);
    //     }

    //     let filteredRes = res.filter(
    //         (d) =>
    //             (d.title && d.title.toLowerCase().includes(searchText)) ||
    //             (d.firstName && d.firstName.toLowerCase().includes(searchText)) ||
    //             (d.lastName && d.lastName.toLowerCase().includes(searchText)) ||
    //             (d.displayDescription && d.displayDescription.toLowerCase().includes(searchText))
    //     );

    //     setFilteredMailList([
    //         ...res.filter(
    //             (d) =>
    //                 (d.title && d.title.toLowerCase().includes(searchText)) ||
    //                 (d.firstName && d.firstName.toLowerCase().includes(searchText)) ||
    //                 (d.lastName && d.lastName.toLowerCase().includes(searchText)) ||
    //                 (d.displayDescription && d.displayDescription.toLowerCase().includes(searchText))
    //         ),
    //     ]);

    //     if (filteredRes.length) {
    //         pager.totalPages = pager.pageSize < 1 ? 1 : Math.ceil(filteredRes.length / pager.pageSize);
    //         if (pager.currentPage > pager.totalPages) {
    //             pager.currentPage = 1;
    //         }
    //         pager.startIndex = (pager.currentPage - 1) * pager.pageSize;
    //         pager.endIndex = Math.min(pager.startIndex + pager.pageSize - 1, filteredRes.length - 1);
    //         setPagedMails([...filteredRes.slice(pager.startIndex, pager.endIndex + 1)]);
    //     } else {
    //         setPagedMails([]);
    //         pager.startIndex = -1;
    //         pager.endIndex = -1;
    //     }
    //     clearSelection();
    // };

    // const saveMail = (type: any, id: any) => {
    //     if (!params.to) {
    //         showMessage('To email address is required.', 'error');
    //         return false;
    //     }
    //     if (!params.title) {
    //         showMessage('Title of email is required.', 'error');
    //         return false;
    //     }

    //     let maxId = 0;
    //     if (!params.id) {
    //         maxId = mailList.length ? mailList.reduce((max, character) => (character.id > max ? character.id : max), mailList[0].id) : 0;
    //     }
    //     let cDt = new Date();

    //     let obj: any = {
    //         id: maxId + 1,
    //         path: '',
    //         firstName: '',
    //         lastName: '',
    //         email: params.to,
    //         date: cDt.getMonth() + 1 + '/' + cDt.getDate() + '/' + cDt.getFullYear(),
    //         time: cDt.toLocaleTimeString(),
    //         title: params.title,
    //         displayDescription: params.displayDescription,
    //         type: 'draft',
    //         isImportant: false,
    //         group: '',
    //         isUnread: false,
    //         description: params.description,
    //         attachments: null,
    //     };
    //     if (params.file && params.file.length) {
    //         obj.attachments = [];
    //         for (let file of params.file) {
    //             let flObj = {
    //                 name: file.name,
    //                 size: getFileSize(file.size),
    //                 type: getFileType(file.type),
    //             };
    //             obj.attachments.push(flObj);
    //         }
    //     }
    //     if (type === 'save' || type === 'save_reply' || type === 'save_forward') {
    //         //saved to draft
    //         obj.type = 'draft';
    //         mailList.splice(0, 0, obj);
    //         searchMails();
    //         showMessage('Mail has been saved successfully to draft.');
    //     } else if (type === 'send' || type === 'reply' || type === 'forward') {
    //         //saved to sent mail
    //         obj.type = 'sent_mail';
    //         mailList.splice(0, 0, obj);
    //         searchMails();
    //         showMessage('Mail has been sent successfully.');
    //     }

    //     setSelectedMail(null);
    //     setIsEdit(false);
    // };

    // const getFileSize = (file_type: any) => {
    //     let type = 'file';
    //     if (file_type.includes('image/')) {
    //         type = 'image';
    //     } else if (file_type.includes('application/x-zip')) {
    //         type = 'zip';
    //     }
    //     return type;
    // };

    // const getFileType = (total_bytes: number) => {
    //     let size = '';
    //     if (total_bytes < 1000000) {
    //         size = Math.floor(total_bytes / 1000) + 'KB';
    //     } else {
    //         size = Math.floor(total_bytes / 1000000) + 'MB';
    //     }
    //     return size;
    // };

    // const clearSelection = () => {
    //     setIds([]);
    // };

    // const tabChanged = (tabType: any) => {
    //     setIsEdit(false);
    //     setIsShowMailMenu(false);
    //     setSelectedMail(null);
    // };

    // const changeValue = (e: any) => {
    //     const { value, id } = e.target;
    //     setParams({ ...params, [id]: value });
    // };

    // const handleCheckboxChange = (id: any) => {
    //     if (ids.includes(id)) {
    //         setIds((value: any) => value.filter((d: any) => d !== id));
    //     } else {
    //         setIds([...ids, id]);
    //     }
    // };

    // const checkAllCheckbox = () => {
    //     if (filteredMailList.length && ids.length === filteredMailList.length) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // };

    // const closeMsgPopUp = () => {
    //     setIsEdit(false);
    //     setSelectedTab('inbox');
    //     searchMails();
    // };

    // const showMessage = (msg = '', type = 'success') => {
    //     const toast: any = Swal.mixin({
    //         toast: true,
    //         position: 'top',
    //         showConfirmButton: false,
    //         timer: 3000,
    //         customClass: { container: 'toast' },
    //     });
    //     toast.fire({
    //         icon: type,
    //         title: msg,
    //         padding: '10px 20px',
    //     });
    // };

    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Frequently asked questions</h2>
      <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
          <div>
              <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                      What do you mean by "Figma assets"?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">You will have access to download the full Figma project including all of the pages, the components, responsive pages, and also the icons, illustrations, and images included in the screens.</p>
              </div>
              <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                      What does "lifetime access" exactly mean?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">Once you have purchased either the design, code, or both packages, you will have access to all of the future updates based on the roadmap, free of charge.</p>
              </div>
              <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                      How does support work?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">We're aware of the importance of well qualified support, that is why we decided that support will only be provided by the authors that actually worked on this project.</p>
                  <p className="text-gray-500 dark:text-gray-400">Feel free to <a href="#" className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline" target="_blank" rel="noreferrer">contact us</a> and we'll help you out as soon as we can.</p>
              </div>
              <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                      I want to build more than one project. Is that allowed?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">You can use Windster for an unlimited amount of projects, whether it's a personal website, a SaaS app, or a website for a client. As long as you don't build a product that will directly compete with Windster either as a UI kit, theme, or template, it's fine.</p>
                  <p className="text-gray-500 dark:text-gray-400">Find out more information by <a href="#" className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline">reading the license</a>.</p>
              </div>
          </div>
          <div>
              <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                      What does "free updates" include?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">The free updates that will be provided is based on the <a href="#" className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline">roadmap</a> that we have laid out for this project. It is also possible that we will provide extra updates outside of the roadmap as well.</p>
              </div>
              <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                      What does the free version include?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">The <a href="#" className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline">free version</a> of Windster includes a minimal style guidelines, component variants, and a dashboard page with the mobile version alongside it.</p>
                  <p className="text-gray-500 dark:text-gray-400">You can use this version for any purposes, because it is open-source under the MIT license.</p>
              </div>
              <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                      What is the difference between Windster and Tailwind UI?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">Although both Windster and Tailwind UI are built for integration with Tailwind CSS, the main difference is in the design, the pages, the extra components and UI elements that Windster includes.</p>
                  <p className="text-gray-500 dark:text-gray-400">Additionally, Windster is a project that is still in development, and later it will include both the application, marketing, and e-commerce UI interfaces.</p>
              </div>
              <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                      Can I use Windster in open-source projects?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">Generally, it is accepted to use Windster in open-source projects, as long as it is not a UI library, a theme, a template, a page-builder that would be considered as an alternative to Windster itself.</p>
                  <p className="text-gray-500 dark:text-gray-400">With that being said, feel free to use this design kit for your open-source projects.</p>
                  <p className="text-gray-500 dark:text-gray-400">Find out more information by <a href="#" className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline">reading the license</a>.</p>
              </div>
          </div>
      </div>
  </div>
</section>
        </div>
    );
};

export default Mailbox;
