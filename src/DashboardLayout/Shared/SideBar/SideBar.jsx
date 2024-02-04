import React from 'react';
import bdrcsLogo from '../../../assets/logo/bdrcsLogo.png'
import { NavLink } from 'react-router-dom';
import './SideBar.css'


const sideLinks = <>
    <ul className='px-5 mt-5'>
        {/* Dashboard */}
        <NavLink to='/' className='sideLI flex items-center gap-2 rounded-[4px] pb-4 pt-3 pl-4'>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M10 0.677734C9.08634 0.677734 8.19014 0.928083 7.40875 1.40159L2.40875 4.43159C1.67349 4.87714 1.06552 5.50477 0.643585 6.25383C0.221649 7.00289 -1.43044e-05 7.8481 6.92125e-10 8.70782V14.9998C6.92125e-10 16.3259 0.526784 17.5977 1.46447 18.5354C2.40215 19.473 3.67392 19.9998 5 19.9998H15C16.3261 19.9998 17.5978 19.473 18.5355 18.5354C19.4732 17.5977 20 16.3259 20 14.9998V8.70682C19.9998 7.8473 19.778 7.00212 19.3561 6.25329C18.9342 5.50446 18.3263 4.87704 17.5913 4.4316L12.5913 1.4016C11.8099 0.928091 10.9137 0.677734 10 0.677734ZM8.44526 3.11204C8.91409 2.82794 9.45181 2.67773 10 2.67773C10.5482 2.67773 11.0859 2.82794 11.5547 3.11204L16.5547 6.14204C16.9958 6.40931 17.3605 6.78577 17.6137 7.23507C17.8668 7.6843 17.9998 8.19119 18 8.70682V14.9998C18 15.7955 17.6839 16.5585 17.1213 17.1211C16.5587 17.6838 15.7956 17.9998 15 17.9998H14V14.9998C14 13.939 13.5786 12.9215 12.8284 12.1714C12.0783 11.4212 11.0609 10.9998 10 10.9998C8.93913 10.9998 7.92172 11.4212 7.17157 12.1714C6.42143 12.9215 6 13.939 6 14.9998V17.9998H5C4.20435 17.9998 3.44129 17.6838 2.87868 17.1211C2.31607 16.5585 2 15.7955 2 14.9998V8.70782C1.99999 8.19198 2.13299 7.68483 2.38615 7.23539C2.63931 6.78595 3.00409 6.40938 3.44525 6.14205L8.44526 3.11204ZM11.4142 13.5856C11.7893 13.9607 12 14.4694 12 14.9998V17.9998H8V14.9998C8 14.4694 8.21071 13.9607 8.58578 13.5856C8.96086 13.2105 9.46956 12.9998 10 12.9998C10.5304 12.9998 11.0391 13.2105 11.4142 13.5856Z" fill="#B1B6CA" />
            </svg>
            <p className="navLink text-[14px] font-normal text-[#B1B6CA] mt-1">Dashboard</p>
        </NavLink>
        {/* Beneficiaries route link */}
        <NavLink to='/beneficiaries' className='sideLI flex items-center gap-2 rounded-[4px] pb-4 pt-3 pl-4'>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.843 8.26065C20.1388 7.61993 19.2246 7.29453 18.2784 7.33669C17.3285 7.38069 16.4529 7.79317 15.8119 8.49623L13.5765 10.9519C13.5096 10.8914 13.4326 10.8437 13.3611 10.7887C13.604 10.3002 13.7535 9.75751 13.7535 9.17637C13.7535 6.25049 11.4805 3.47036 8.8325 2.8718C9.27811 2.45565 9.75765 1.89192 10.0318 1.18612C10.2574 0.605891 9.74756 0 9.08281 0H6.58793C5.86908 0 5.36845 0.696638 5.68111 1.29703C5.99378 1.89559 6.45681 2.43457 6.87217 2.85071C4.17465 3.39244 1.8338 6.20832 1.8338 9.17728C1.8338 9.68968 1.94199 10.1755 2.13363 10.6191C0.868304 11.324 0 12.6605 0 14.2087V17.8752C0 20.1493 1.85122 22 4.12605 22H9.09015C11.8674 22 14.509 20.8011 16.3373 18.7102L21.1015 13.2627C22.3944 11.8135 22.2779 9.57143 20.843 8.26249V8.26065ZM7.79365 5.49885C9.32304 5.49885 11.0028 7.42377 11.0028 9.17637C11.0028 9.67593 10.592 10.082 10.0859 10.082H5.5014C4.99527 10.082 4.5845 9.67593 4.5845 9.17637C4.5845 7.42377 6.26426 5.49885 7.79365 5.49885ZM19.0413 11.4404L14.2679 16.899C12.9613 18.3922 11.0752 19.2483 9.09106 19.2483H4.12697C3.36869 19.2483 2.75162 18.6314 2.75162 17.8733V14.2068C2.75162 13.4488 3.36869 12.8319 4.12697 12.8319H11.331C11.6556 12.8319 11.9206 13.0959 11.9206 13.4204C11.9206 13.7109 11.7033 13.9621 11.4154 14.0033L6.68328 14.6789C5.93143 14.7861 5.40788 15.4828 5.51607 16.2344C5.62426 16.986 6.32203 17.5049 7.07205 17.4013L11.8051 16.7257C13.2886 16.514 14.4412 15.3224 14.6411 13.8704L17.8475 10.3478C17.9932 10.1874 18.1922 10.0939 18.4086 10.0838C18.6204 10.0728 18.8331 10.1489 18.9917 10.2937C19.3182 10.5916 19.3448 11.1013 19.0422 11.4414L19.0413 11.4404Z" fill="#B1B6CA" />
            </svg>
            <p className="navLink text-[14px] font-normal text-[#B1B6CA] mt-1">Beneficiaries</p>
        </NavLink>
        {/* Human Asset route link */}
        <NavLink to='/humanAssets' className='sideLI flex items-center gap-2 rounded-[4px] pb-4 pt-3 pl-4'>
            <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.7 11.9167C11.7 13.4338 10.4895 14.6667 9 14.6667C7.5105 14.6667 6.3 13.4338 6.3 11.9167C6.3 10.3996 7.5105 9.16667 9 9.16667C10.4895 9.16667 11.7 10.3996 11.7 11.9167ZM18 7.47725V16.9583C18 19.7386 15.7788 22 13.05 22H4.95C2.2203 22 0 19.7386 0 16.9583V5.04167C0 2.26142 2.2203 0 4.95 0H10.6587C11.9817 0 13.2246 0.524333 14.1597 1.47675L16.5501 3.91233C17.4852 4.86475 18 6.13067 18 7.47725ZM15.3 16.9583V8.25H11.7C10.7055 8.25 9.9 7.42958 9.9 6.41667V2.75H4.95C3.7098 2.75 2.7 3.7785 2.7 5.04167V16.9583C2.7 18.0996 3.5226 19.0474 4.5963 19.2216C5.0238 17.1435 6.8328 15.5833 9 15.5833C11.1672 15.5833 12.9762 17.1435 13.4037 19.2216C14.4774 19.0483 15.3 18.0996 15.3 16.9583Z" fill="#B1B6CA" />
            </svg>
            <p className="navLink text-[14px] font-normal text-[#B1B6CA] mt-1">Human Assets</p>
        </NavLink>
        {/* Services route link */}
        <NavLink to='/services' className='sideLI flex items-center gap-2 rounded-[4px] pb-4 pt-3 pl-4'>
            <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5001 6.41736C6.47529 6.41736 4.83386 8.05879 4.83386 10.0836C4.83386 12.1084 6.47529 13.7498 8.5001 13.7498C10.5249 13.7498 12.1663 12.1084 12.1663 10.0836C12.164 8.05973 10.524 6.41964 8.5001 6.41736ZM8.5001 11.2289C7.86755 11.2289 7.35478 10.7161 7.35478 10.0836C7.35478 9.45104 7.86755 8.93827 8.5001 8.93827C9.13265 8.93827 9.64542 9.45104 9.64542 10.0836C9.64499 10.7159 9.13245 11.2285 8.5001 11.2289Z" fill="#B1B6CA" />
                <path d="M16.9031 10.0837C16.9018 8.79606 16.6024 7.52623 16.0283 6.3737L16.4602 6.07371C17.0312 5.67572 17.1715 4.89022 16.7736 4.31915C16.3756 3.74816 15.5901 3.60786 15.0191 4.00573L14.5863 4.30655C13.3032 2.95234 11.6049 2.06514 9.76046 1.78563V1.26046C9.76046 0.56433 9.19613 0 8.5 0C7.80387 0 7.23954 0.56433 7.23954 1.26046V1.78563C5.3951 2.06514 3.69672 2.95234 2.41369 4.30655L1.98092 4.00573C1.40985 3.60786 0.624352 3.7482 0.226363 4.31915C-0.171508 4.89022 -0.0311644 5.67572 0.539783 6.07371L0.971686 6.3737C-0.19463 8.70948 -0.19463 11.4578 0.971686 13.7936L0.539783 14.0936C-0.0312038 14.4915 -0.171508 15.2771 0.226363 15.8481C0.624352 16.4191 1.40985 16.5594 1.98092 16.1615L2.41369 15.8607C3.69675 17.2149 5.3951 18.1021 7.23954 18.3816V18.9069C7.23954 19.603 7.80387 20.1673 8.5 20.1673C9.19613 20.1673 9.76046 19.603 9.76046 18.9069V18.3817C11.6049 18.1022 13.3033 17.215 14.5863 15.8608L15.0191 16.1616C15.5901 16.5594 16.3756 16.4191 16.7736 15.8482C17.1715 15.2771 17.0312 14.4916 16.4602 14.0936L16.0283 13.7936C16.6024 12.6411 16.9018 11.3712 16.9031 10.0837ZM8.50004 15.9658C5.25141 15.9658 2.61792 13.3322 2.61792 10.0837C2.61792 6.83506 5.25141 4.20154 8.50004 4.20154C11.7487 4.20154 14.3822 6.83502 14.3822 10.0837C14.378 13.3306 11.7469 15.9616 8.50004 15.9658Z" fill="#B1B6CA" />
            </svg>
            <p className="navLink text-[14px] font-normal text-[#B1B6CA] mt-1">Services</p>
        </NavLink>
        {/* Events route link */}
        <NavLink to='/events' className='sideLI flex items-center gap-2 rounded-[4px] pb-4 pt-3 pl-4'>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.375 1.5H13.5V0H11.25V1.5H6.75V0H4.5V1.5H2.625C1.1775 1.5 0 2.6775 0 4.125V18H18V4.125C18 2.6775 16.8225 1.5 15.375 1.5ZM15.75 15.75H2.25V6.75H15.75V15.75ZM7.5 12H3.75V8.25H7.5V12Z" fill="#B1B6CA" />
            </svg>
            <p className="navLink text-[14px] font-normal text-[#B1B6CA] mt-1">Events</p>
        </NavLink>
        {/* Projects route link */}
        <NavLink to='/projects' className='sideLI flex items-center gap-2 rounded-[4px] pb-4 pt-3 pl-4'>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.75 11.25H13.5C12.9033 11.25 12.331 11.4871 11.909 11.909C11.4871 12.331 11.25 12.9033 11.25 13.5V15.75H3.375C3.07663 15.75 2.79048 15.6315 2.5795 15.4205C2.36853 15.2095 2.25 14.9234 2.25 14.625V3.375C2.25 3.07663 2.36853 2.79048 2.5795 2.5795C2.79048 2.36853 3.07663 2.25 3.375 2.25H10.875C11.1734 2.25 11.4595 2.13147 11.6705 1.9205C11.8815 1.70952 12 1.42337 12 1.125C12 0.826631 11.8815 0.540483 11.6705 0.329505C11.4595 0.118526 11.1734 0 10.875 0L3.375 0C2.47989 0 1.62145 0.355579 0.988515 0.988515C0.355579 1.62145 0 2.47989 0 3.375L0 14.625C0 15.5201 0.355579 16.3785 0.988515 17.0115C1.62145 17.6444 2.47989 18 3.375 18H12.3638C13.2586 17.9998 14.1167 17.6442 14.7495 17.0115L17.0115 14.7495C17.6442 14.1167 17.9998 13.2586 18 12.3638V8.6295C18 8.33113 17.8815 8.04498 17.6705 7.83401C17.4595 7.62303 17.1734 7.5045 16.875 7.5045C16.5766 7.5045 16.2905 7.62303 16.0795 7.83401C15.8685 8.04498 15.75 8.33113 15.75 8.6295V11.25Z" fill="#B1B6CA" />
                <path d="M15.7223 0.750029C15.4221 0.758829 15.1269 0.828516 14.8545 0.954861C14.582 1.08121 14.3381 1.26158 14.1375 1.48503L8.03552 8.30478C8.72056 8.40467 9.36438 8.69291 9.89516 9.13735C10.4259 9.58179 10.8228 10.1649 11.0415 10.8218L17.3415 4.52178C17.755 4.10742 17.9871 3.54599 17.9871 2.96065C17.9871 2.37532 17.755 1.81389 17.3415 1.39953C17.1288 1.1884 16.8759 1.02212 16.5978 0.910554C16.3196 0.798986 16.0219 0.744399 15.7223 0.750029Z" fill="#B1B6CA" />
                <path d="M6.96603 9.80021C5.22828 10.1347 4.36728 12.0697 3.99378 13.2757C3.95856 13.3881 3.95031 13.5072 3.96971 13.6234C3.9891 13.7396 4.0356 13.8496 4.10542 13.9445C4.17525 14.0394 4.26644 14.1165 4.37161 14.1695C4.47679 14.2226 4.59298 14.2502 4.71078 14.25H7.50003C7.81287 14.25 8.12227 14.1848 8.4085 14.0586C8.69472 13.9323 8.95148 13.7478 9.16236 13.5167C9.37324 13.2856 9.53363 13.0131 9.63326 12.7166C9.7329 12.42 9.76961 12.106 9.74103 11.7945C9.70117 11.4761 9.59601 11.1695 9.43215 10.8937C9.26828 10.6179 9.04924 10.379 8.78874 10.1917C8.52824 10.0045 8.23189 9.87313 7.91825 9.80576C7.60461 9.73838 7.28044 9.73649 6.96603 9.80021Z" fill="#B1B6CA" />
            </svg>
            <p className="navLink text-[14px] font-normal text-[#B1B6CA] mt-1">Projects</p>
        </NavLink>
        {/* Stuff trainings route link */}
        <NavLink to='/stuffTraining' className='sideLI flex items-center gap-2 rounded-[4px] pb-4 pt-3 pl-4'>
            <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.52382 10.5426C4.52382 10.1779 4.6668 9.82815 4.92132 9.57026C5.17583 9.31238 5.52103 9.1675 5.88097 9.1675H8.59526C8.95519 9.1675 9.30039 9.31238 9.5549 9.57026C9.80942 9.82815 9.9524 10.1779 9.9524 10.5426C9.9524 10.9073 9.80942 11.2571 9.5549 11.515C9.30039 11.7729 8.95519 11.9177 8.59526 11.9177H5.88097C5.52103 11.9177 5.17583 11.7729 4.92132 11.515C4.6668 11.2571 4.52382 10.9073 4.52382 10.5426ZM5.88097 7.334H12.2143C12.5743 7.334 12.9194 7.18912 13.174 6.93123C13.4285 6.67335 13.5715 6.32358 13.5715 5.95887C13.5715 5.59417 13.4285 5.2444 13.174 4.98651C12.9194 4.72863 12.5743 4.58375 12.2143 4.58375H5.88097C5.52103 4.58375 5.17583 4.72863 4.92132 4.98651C4.6668 5.2444 4.52382 5.59417 4.52382 5.95887C4.52382 6.32358 4.6668 6.67335 4.92132 6.93123C5.17583 7.18912 5.52103 7.334 5.88097 7.334ZM17.1905 18.3112V21.0082C17.1905 21.2044 17.1331 21.3961 17.0255 21.5592C16.9179 21.7223 16.765 21.8494 16.5862 21.9245C16.4073 21.9996 16.2105 22.0192 16.0206 21.9809C15.8307 21.9427 15.6563 21.8482 15.5194 21.7096L14.4762 20.6525L13.433 21.7096C13.2961 21.8482 13.1217 21.9427 12.9318 21.9809C12.7419 22.0192 12.5451 21.9996 12.3663 21.9245C12.1874 21.8494 12.0345 21.7223 11.927 21.5592C11.8194 21.3961 11.762 21.2044 11.7619 21.0082V18.3112C10.9432 17.6868 10.3585 16.7988 10.1039 15.7931C9.84929 14.7874 9.94 13.7238 10.3611 12.7773C10.7822 11.8307 11.5086 11.0575 12.4209 10.5847C13.3332 10.112 14.3771 9.96781 15.381 10.1759V5.04212C15.381 4.43428 15.1427 3.85133 14.7185 3.42152C14.2943 2.99171 13.719 2.75025 13.1191 2.75025L4.98253 2.78509C4.68496 2.78424 4.39015 2.8429 4.11499 2.9577C3.83984 3.0725 3.58974 3.24118 3.37903 3.45409C3.16832 3.66699 3.00114 3.91993 2.88707 4.19841C2.77301 4.4769 2.71429 4.77545 2.71429 5.07696V16.0431C2.71429 16.651 2.9526 17.2339 3.37679 17.6637C3.80098 18.0935 4.37631 18.335 4.9762 18.335H8.59526C8.95519 18.335 9.30039 18.4799 9.5549 18.7378C9.80942 18.9956 9.9524 19.3454 9.9524 19.7101C9.9524 20.0748 9.80942 20.4246 9.5549 20.6825C9.30039 20.9404 8.95519 21.0852 8.59526 21.0852H4.9762C3.65695 21.0835 2.3922 20.5518 1.45935 19.6066C0.526491 18.6614 0.00167586 17.3799 0 16.0431V5.07696C0.00167586 3.74023 0.526491 2.45873 1.45935 1.51352C2.3922 0.568302 3.65695 0.0365346 4.9762 0.0348365L13.1127 0C14.433 0.000483856 15.699 0.531657 16.6332 1.47695C17.5673 2.42224 18.0931 3.70443 18.0953 5.04212V11.9462C18.4516 12.423 18.711 12.9668 18.8585 13.5459C19.006 14.125 19.0386 14.7281 18.9544 15.3201C18.8703 15.9121 18.671 16.4813 18.3683 16.9947C18.0655 17.5081 17.6652 17.9556 17.1905 18.3112ZM12.6667 14.668C12.6667 15.0306 12.7728 15.3851 12.9717 15.6866C13.1705 15.9882 13.4531 16.2232 13.7837 16.3619C14.1144 16.5007 14.4782 16.537 14.8292 16.4663C15.1803 16.3955 15.5027 16.2209 15.7558 15.9645C16.0088 15.7081 16.1812 15.3814 16.251 15.0257C16.3208 14.67 16.285 14.3014 16.148 13.9663C16.011 13.6313 15.7791 13.345 15.4815 13.1435C15.184 12.942 14.8341 12.8345 14.4762 12.8345C13.9963 12.8345 13.536 13.0277 13.1967 13.3715C12.8573 13.7154 12.6667 14.1817 12.6667 14.668Z" fill="#B1B6CA" />
            </svg>
            <p className="navLink text-[14px] font-normal text-[#B1B6CA] mt-1">Stuff Training</p>
        </NavLink>
        {/* Volunteer Trainings route link */}
        <NavLink to='/volunteerTraining' className='sideLI flex items-center gap-2 rounded-[4px] pb-4 pt-3 pl-4'>
            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 0H6.81818C5.89752 0.00100954 4.99501 0.258313 4.21013 0.743549C3.42526 1.22879 2.78848 1.92311 2.37 2.75H1.36364C1.00198 2.75 0.655131 2.89487 0.3994 3.15273C0.143668 3.41059 0 3.76033 0 4.125C0 4.48967 0.143668 4.83941 0.3994 5.09727C0.655131 5.35513 1.00198 5.5 1.36364 5.5H1.81818V7.33333H1.36364C1.00198 7.33333 0.655131 7.4782 0.3994 7.73606C0.143668 7.99392 0 8.34366 0 8.70833C0 9.07301 0.143668 9.42274 0.3994 9.68061C0.655131 9.93847 1.00198 10.0833 1.36364 10.0833H1.81818V11.9167H1.36364C1.00198 11.9167 0.655131 12.0615 0.3994 12.3194C0.143668 12.5773 0 12.927 0 13.2917C0 13.6563 0.143668 14.0061 0.3994 14.2639C0.655131 14.5218 1.00198 14.6667 1.36364 14.6667H1.81818V16.5H1.36364C1.00198 16.5 0.655131 16.6449 0.3994 16.9027C0.143668 17.1606 0 17.5103 0 17.875C0 18.2397 0.143668 18.5894 0.3994 18.8473C0.655131 19.1051 1.00198 19.25 1.36364 19.25H2.37C2.78848 20.0769 3.42526 20.7712 4.21013 21.2565C4.99501 21.7417 5.89752 21.999 6.81818 22H15C16.3256 21.9985 17.5966 21.4669 18.5339 20.5217C19.4713 19.5765 19.9986 18.295 20 16.9583V5.04167C19.9986 3.70498 19.4713 2.42346 18.5339 1.47828C17.5966 0.533097 16.3256 0.00145582 15 0ZM17.2727 16.9583C17.2727 17.5661 17.0333 18.149 16.6071 18.5788C16.1808 19.0086 15.6028 19.25 15 19.25H6.81818C6.21542 19.25 5.63734 19.0086 5.21112 18.5788C4.7849 18.149 4.54545 17.5661 4.54545 16.9583V5.04167C4.54545 4.43388 4.7849 3.85098 5.21112 3.42121C5.63734 2.99144 6.21542 2.75 6.81818 2.75H15C15.6028 2.75 16.1808 2.99144 16.6071 3.42121C17.0333 3.85098 17.2727 4.43388 17.2727 5.04167V16.9583ZM8.63636 8.70833C8.63636 8.10055 8.87581 7.51765 9.30203 7.08788C9.72825 6.65811 10.3063 6.41667 10.9091 6.41667C11.5119 6.41667 12.0899 6.65811 12.5162 7.08788C12.9424 7.51765 13.1818 8.10055 13.1818 8.70833C13.1818 9.31612 12.9424 9.89902 12.5162 10.3288C12.0899 10.7586 11.5119 11 10.9091 11C10.3063 11 9.72825 10.7586 9.30203 10.3288C8.87581 9.89902 8.63636 9.31612 8.63636 8.70833ZM14.5345 14.8793C14.5483 14.9675 14.5426 15.0577 14.518 15.1435C14.4934 15.2293 14.4504 15.3085 14.392 15.3757C14.3336 15.4428 14.2614 15.4962 14.1803 15.5321C14.0992 15.568 14.0113 15.5855 13.9227 15.5833H7.86727C7.77874 15.5855 7.69083 15.568 7.60974 15.5321C7.52865 15.4962 7.45637 15.4428 7.398 15.3757C7.33964 15.3085 7.29662 15.2293 7.27199 15.1435C7.24736 15.0577 7.24171 14.9675 7.25545 14.8793C8.03818 10.9679 13.7527 10.9707 14.5345 14.8793Z" fill="#B1B6CA" />
            </svg>
            <p className="navLink text-[14px] font-normal text-[#B1B6CA] mt-1">Volunteer Trainings</p>
        </NavLink>
        {/* Miscellaneous route link */}
        <NavLink to='/miscellaneous' className='sideLI flex items-center gap-2 rounded-[4px] pb-4 pt-3 pl-4'>
            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.625 10.9091H4.125C2.86183 10.9091 1.83333 11.9282 1.83333 13.1818V15.4545C1.83333 17.9609 3.88942 20 6.41667 20H9.625C10.8882 20 11.9167 18.9809 11.9167 17.7273V13.1818C11.9167 11.9282 10.8882 10.9091 9.625 10.9091ZM9.16667 17.2727H6.41667C5.40558 17.2727 4.58333 16.4573 4.58333 15.4545V13.6364H9.16667V17.2727ZM9.625 0H4.58333C2.05608 0 0 2.03909 0 4.54545V6.81818C0 8.07182 1.0285 9.09091 2.29167 9.09091H9.625C10.8882 9.09091 11.9167 8.07182 11.9167 6.81818V2.27273C11.9167 1.01909 10.8882 0 9.625 0ZM9.16667 6.36364H2.75V4.54545C2.75 3.54273 3.57225 2.72727 4.58333 2.72727H9.16667V6.36364ZM17.4167 1.81818H16.0417C14.7785 1.81818 13.75 2.83727 13.75 4.09091V15C13.75 16.2536 14.7785 17.2727 16.0417 17.2727H17.4167C19.9439 17.2727 22 15.2336 22 12.7273V6.36364C22 3.85727 19.9439 1.81818 17.4167 1.81818ZM19.25 12.7273C19.25 13.73 18.4277 14.5455 17.4167 14.5455H16.5V4.54545H17.4167C18.4277 4.54545 19.25 5.36091 19.25 6.36364V12.7273Z" fill="#B1B6CA" />
            </svg>
            <p className="navLink text-[14px] font-normal text-[#B1B6CA] mt-1">Miscellaneous</p>
        </NavLink>
        {/* Feet Management route link */}
        <NavLink to='/fleetManagement' className='sideLI flex items-center gap-2 rounded-[4px] pb-4 pt-3 pl-4'>
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.375 11.0833V14.6458C2.375 15.7368 3.26246 16.625 4.35417 16.625H6.72917C8.29033 16.6519 8.28954 18.9739 6.72917 19H4.35417C1.95383 19 0 17.047 0 14.6458V6.72917C0 4.32804 1.95383 2.375 4.35417 2.375H4.85054C5.20283 1.01096 6.44417 0 7.91667 0H11.0833C12.5566 0 13.7972 1.01096 14.1495 2.375H14.6458C17.0462 2.375 19 4.32804 19 6.72917C18.9731 8.28954 16.6519 8.29033 16.625 6.72917C16.625 5.63825 15.7375 4.75 14.6458 4.75H4.35417C3.26246 4.75 2.375 5.63825 2.375 6.72917V8.70833H6.72917C8.29033 8.73525 8.28954 11.0572 6.72917 11.0833H2.375ZM19 13.8542C18.7902 20.6562 8.91733 20.6546 8.70833 13.8542C8.91813 7.05217 18.791 7.05375 19 13.8542ZM15.7098 14.0307L15.0417 13.3625V12.2708C15.0148 10.7097 12.6928 10.7105 12.6667 12.2708V13.6903C12.6667 14.1099 12.8337 14.5128 13.1306 14.8097L14.0307 15.7098C14.4946 16.1737 15.2459 16.1737 15.7098 15.7098C16.1737 15.2459 16.1737 14.4946 15.7098 14.0307Z" fill="#B1B6CA" />
            </svg>
            <p className="navLink text-[14px] font-normal text-[#B1B6CA] mt-1">Fleet Management</p>
        </NavLink>
        {/* MCH Center Management route link */}
        <NavLink to='/mchCenter' className='sideLI flex items-center gap-2 rounded-[4px] pb-4 pt-3 pl-4'>
            <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.7 9.625C5.7 9.26033 5.85013 8.91059 6.11737 8.65273C6.38461 8.39487 6.74707 8.25 7.125 8.25H8.075V7.33333C8.075 6.96866 8.22513 6.61892 8.49237 6.36106C8.75961 6.1032 9.12207 5.95833 9.5 5.95833C9.87793 5.95833 10.2404 6.1032 10.5076 6.36106C10.7749 6.61892 10.925 6.96866 10.925 7.33333V8.25H11.875C12.2529 8.25 12.6154 8.39487 12.8826 8.65273C13.1499 8.91059 13.3 9.26033 13.3 9.625C13.3 9.98967 13.1499 10.3394 12.8826 10.5973C12.6154 10.8551 12.2529 11 11.875 11H10.925V11.9167C10.925 12.2813 10.7749 12.6311 10.5076 12.8889C10.2404 13.1468 9.87793 13.2917 9.5 13.2917C9.12207 13.2917 8.75961 13.1468 8.49237 12.8889C8.22513 12.6311 8.075 12.2813 8.075 11.9167V11H7.125C6.74707 11 6.38461 10.8551 6.11737 10.5973C5.85013 10.3394 5.7 9.98967 5.7 9.625ZM12.825 14.6667H6.175C5.79707 14.6667 5.43461 14.8115 5.16737 15.0694C4.90013 15.3273 4.75 15.677 4.75 16.0417C4.75 16.4063 4.90013 16.7561 5.16737 17.0139C5.43461 17.2718 5.79707 17.4167 6.175 17.4167H12.825C13.2029 17.4167 13.5654 17.2718 13.8326 17.0139C14.0999 16.7561 14.25 16.4063 14.25 16.0417C14.25 15.677 14.0999 15.3273 13.8326 15.0694C13.5654 14.8115 13.2029 14.6667 12.825 14.6667ZM19 6.875V16.9583C18.9985 18.295 18.4475 19.5765 17.468 20.5217C16.4884 21.4669 15.1603 21.9985 13.775 22H5.225C3.83971 21.9985 2.51158 21.4669 1.53203 20.5217C0.552483 19.5765 0.00150876 18.295 0 16.9583V6.875C0.00107964 5.56384 0.530813 4.30453 1.4771 3.36356C2.42338 2.4226 3.71196 1.87381 5.07015 1.83333C5.33986 1.28468 5.7654 0.821153 6.29732 0.49662C6.82923 0.172086 7.44567 -0.000125251 8.075 6.83476e-08H10.925C11.5543 -0.000125251 12.1708 0.172086 12.7027 0.49662C13.2346 0.821153 13.6601 1.28468 13.9298 1.83333C15.288 1.87381 16.5766 2.4226 17.5229 3.36356C18.4692 4.30453 18.9989 5.56384 19 6.875ZM16.15 6.875C16.15 6.26721 15.8998 5.68432 15.4544 5.25455C15.009 4.82478 14.4049 4.58333 13.775 4.58333H12.825C12.4471 4.58333 12.0846 4.43847 11.8174 4.18061C11.5501 3.92274 11.4 3.57301 11.4 3.20833C11.4 3.08678 11.35 2.9702 11.2609 2.88424C11.1718 2.79829 11.051 2.75 10.925 2.75H8.075C7.94902 2.75 7.8282 2.79829 7.73912 2.88424C7.65004 2.9702 7.6 3.08678 7.6 3.20833C7.6 3.57301 7.44987 3.92274 7.18263 4.18061C6.91539 4.43847 6.55293 4.58333 6.175 4.58333H5.225C4.59511 4.58333 3.99102 4.82478 3.54562 5.25455C3.10022 5.68432 2.85 6.26721 2.85 6.875V16.9583C2.85 17.5661 3.10022 18.149 3.54562 18.5788C3.99102 19.0086 4.59511 19.25 5.225 19.25H13.775C14.4049 19.25 15.009 19.0086 15.4544 18.5788C15.8998 18.149 16.15 17.5661 16.15 16.9583V6.875Z" fill="#B1B6CA" />
            </svg>
            <p className="navLink text-[14px] font-normal text-[#B1B6CA] mt-1">MCH Center Management</p>
        </NavLink>
        {/* ICT inventories route link */}
        <NavLink to='/ictInventory' className='sideLI flex items-center gap-2 rounded-[4px] pb-4 pt-3 pl-4'>
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.66667 10.5417H4.79167C4.26267 10.5417 3.83333 10.1123 3.83333 9.58333C3.83333 9.05433 4.26267 8.625 4.79167 8.625H7.66667C8.19567 8.625 8.625 9.05433 8.625 9.58333C8.625 10.1123 8.19567 10.5417 7.66667 10.5417ZM22.769 22.6655C22.5793 22.886 22.311 23 22.0407 23C21.8203 23 21.598 22.9243 21.4178 22.769L19.0133 20.7077C18.0157 21.5395 16.7335 22.0407 15.3333 22.0407C12.1574 22.0407 9.58333 19.4666 9.58333 16.2907C9.58333 13.1148 12.1574 10.5407 15.3333 10.5407C18.5092 10.5407 21.0833 13.1148 21.0833 16.2907C21.0833 17.3736 20.7786 18.3837 20.2572 19.2491L22.6655 21.3133C23.0671 21.6574 23.114 22.264 22.769 22.6655ZM16.2715 18.5208L18.8619 16.0157C19.2433 15.6486 19.2558 15.042 18.8897 14.6606C18.5227 14.2782 17.9151 14.2677 17.5346 14.6328L14.9347 17.1475C14.7976 17.2826 14.5715 17.2855 14.4344 17.1494L13.1368 15.8738C12.7573 15.502 12.1517 15.5087 11.7817 15.8872C11.4109 16.2658 11.4166 16.8715 11.7952 17.2423L13.0927 18.5188C13.5336 18.9491 14.1105 19.1647 14.6865 19.1647C15.2624 19.1647 15.8374 18.9491 16.2706 18.5217L16.2715 18.5208ZM10.5417 22.0417C10.5417 22.5707 10.1123 23 9.58333 23H4.79167C2.14954 23 0 20.8505 0 18.2083V4.79167C0 2.14954 2.14954 0 4.79167 0H9.11854C10.9106 0 12.5944 0.697667 13.8623 1.96458L17.2021 5.30437C18.0531 6.15537 18.6597 7.22104 18.9587 8.38733C19.0325 8.67387 18.9692 8.97862 18.7872 9.21246C18.6051 9.44629 18.3262 9.58333 18.0301 9.58333H12.4593C10.8742 9.58333 9.58429 8.29342 9.58429 6.70833V1.93871C9.43096 1.92433 9.27571 1.91667 9.1195 1.91667H4.79262C3.20754 1.91667 1.91762 3.20658 1.91762 4.79167V18.2083C1.91762 19.7934 3.20754 21.0833 4.79262 21.0833H9.58429C10.1133 21.0833 10.5426 21.5127 10.5426 22.0417H10.5417ZM11.5 6.70833C11.5 7.23637 11.9303 7.66667 12.4583 7.66667H16.6156C16.4057 7.30058 16.147 6.96133 15.846 6.66042L12.5063 3.32062C12.2015 3.01587 11.8632 2.75808 11.5 2.54821V6.70833ZM6.70833 12.4583H4.79167C4.26267 12.4583 3.83333 12.8877 3.83333 13.4167C3.83333 13.9457 4.26267 14.375 4.79167 14.375H6.70833C7.23733 14.375 7.66667 13.9457 7.66667 13.4167C7.66667 12.8877 7.23733 12.4583 6.70833 12.4583ZM6.70833 16.2917H4.79167C4.26267 16.2917 3.83333 16.721 3.83333 17.25C3.83333 17.779 4.26267 18.2083 4.79167 18.2083H6.70833C7.23733 18.2083 7.66667 17.779 7.66667 17.25C7.66667 16.721 7.23733 16.2917 6.70833 16.2917Z" fill="#B1B6CA" />
            </svg>
            <p className="navLink text-[14px] font-normal text-[#B1B6CA] mt-1">ICT inventories</p>
        </NavLink>
        {/* Stock management route link */}
        <NavLink to='/stockManagement' className='sideLI flex items-center gap-2 rounded-[4px] pb-4 pt-3 pl-4'>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.5 21C17.1217 21 16 19.8785 16 18.5005V11.8351C16 11.376 15.6267 11.0019 15.1667 11.0019H6.83333C6.37333 11.0019 6 11.376 6 11.8351V18.5005C6 19.8785 4.87833 21 3.5 21C2.12167 21 1 19.8785 1 18.5005V9.10556C1 7.71832 1.68667 6.42773 2.83583 5.65204L8.66917 1.71612C10.085 0.761295 11.915 0.761295 13.3308 1.71612L19.1642 5.65204C20.3133 6.42773 21 7.71832 21 9.10556V18.5005C21 19.8785 19.8783 21 18.5 21ZM6.83333 9.33552H15.1667C16.545 9.33552 17.6667 10.457 17.6667 11.8351V18.5005C17.6667 18.9595 18.04 19.3336 18.5 19.3336C18.96 19.3336 19.3333 18.9595 19.3333 18.5005V9.10556C19.3333 8.27322 18.9217 7.49836 18.2317 7.03345L12.3983 3.09752C11.5483 2.5243 10.4517 2.5243 9.6025 3.09752L3.76833 7.03345C3.07833 7.49836 2.66667 8.27322 2.66667 9.10556V18.5005C2.66667 18.9595 3.04 19.3336 3.5 19.3336C3.96 19.3336 4.33333 18.9595 4.33333 18.5005V11.8351C4.33333 10.457 5.455 9.33552 6.83333 9.33552ZM10.1667 20.1668V18.5005C10.1667 18.0406 9.79417 17.6673 9.33333 17.6673H8.5C8.03917 17.6673 7.66667 18.0406 7.66667 18.5005V20.1668C7.66667 20.6267 8.03917 21 8.5 21H9.33333C9.79417 21 10.1667 20.6267 10.1667 20.1668ZM10.1667 15.1678V13.5014C10.1667 13.0415 9.79417 12.6682 9.33333 12.6682H8.5C8.03917 12.6682 7.66667 13.0415 7.66667 13.5014V15.1678C7.66667 15.6277 8.03917 16.0009 8.5 16.0009H9.33333C9.79417 16.0009 10.1667 15.6277 10.1667 15.1678ZM14.3333 20.1668V18.5005C14.3333 18.0406 13.9608 17.6673 13.5 17.6673H12.6667C12.2058 17.6673 11.8333 18.0406 11.8333 18.5005V20.1668C11.8333 20.6267 12.2058 21 12.6667 21H13.5C13.9608 21 14.3333 20.6267 14.3333 20.1668Z" fill="#B1B6CA" stroke="#B1B6CA" stroke-width="0.7" />
            </svg>
            <p className="navLink text-[14px] font-normal text-[#B1B6CA] mt-1">Stock Management</p>
        </NavLink>
        {/* Unapproved list route link */}
        <NavLink to='/unapprovedList' className='sideLI flex items-center gap-2 rounded-[4px] pb-4 pt-3 pl-4'>
            <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.2049 12.996L10.9089 14.375L12.2049 15.754C12.4581 16.0237 12.6004 16.3895 12.6004 16.7708C12.6004 17.1522 12.4581 17.518 12.2049 17.7876C11.9516 18.0573 11.6081 18.2088 11.25 18.2088C10.8918 18.2088 10.5483 18.0573 10.2951 17.7876L8.99999 16.4076L7.70489 17.7876C7.45164 18.0573 7.10815 18.2088 6.74999 18.2088C6.39184 18.2088 6.04835 18.0573 5.79509 17.7876C5.54184 17.518 5.39956 17.1522 5.39956 16.7708C5.39956 16.3895 5.54184 16.0237 5.79509 15.754L7.09109 14.375L5.79509 12.996C5.54184 12.7263 5.39956 12.3605 5.39956 11.9792C5.39956 11.5978 5.54184 11.2321 5.79509 10.9624C6.04835 10.6927 6.39184 10.5412 6.74999 10.5412C7.10815 10.5412 7.45164 10.6927 7.70489 10.9624L8.99999 12.3424L10.2951 10.9624C10.4205 10.8289 10.5694 10.7229 10.7332 10.6507C10.897 10.5784 11.0726 10.5412 11.25 10.5412C11.4273 10.5412 11.6029 10.5784 11.7668 10.6507C11.9306 10.7229 12.0795 10.8289 12.2049 10.9624C12.3303 11.0959 12.4298 11.2544 12.4976 11.4289C12.5655 11.6034 12.6004 11.7903 12.6004 11.9792C12.6004 12.168 12.5655 12.355 12.4976 12.5295C12.4298 12.7039 12.3303 12.8624 12.2049 12.996ZM18 7.81714V17.7292C17.9986 19.1266 17.4766 20.4664 16.5486 21.4545C15.6206 22.4427 14.3624 22.9985 13.05 23H4.95C3.63761 22.9985 2.37939 22.4427 1.4514 21.4545C0.523404 20.4664 0.00142935 19.1266 0 17.7292V5.27085C0.00142935 3.8734 0.523404 2.53363 1.4514 1.54549C2.37939 0.557348 3.63761 0.00154107 4.95 1.90718e-05H10.6587C11.309 -0.00184974 11.9532 0.13364 12.554 0.398646C13.1548 0.663652 13.7002 1.05291 14.1588 1.54389L16.5501 4.09018C17.0112 4.57847 17.3767 5.15929 17.6256 5.79902C17.8745 6.43875 18.0017 7.12469 18 7.81714ZM15.3 17.7292V8.62501H11.7C11.2226 8.62501 10.7648 8.42308 10.4272 8.06363C10.0896 7.70419 9.89999 7.21668 9.89999 6.70835V2.87502H4.95C4.35326 2.87502 3.78096 3.12743 3.35901 3.57674C2.93705 4.02605 2.7 4.63543 2.7 5.27085V17.7292C2.7 18.3646 2.93705 18.974 3.35901 19.4233C3.78096 19.8726 4.35326 20.125 4.95 20.125H13.05C13.6467 20.125 14.219 19.8726 14.641 19.4233C15.0629 18.974 15.3 18.3646 15.3 17.7292Z" fill="#B1B6CA" />
            </svg>
            <p className="navLink text-[14px] font-normal text-[#B1B6CA] mt-1">Unapproved List</p>
        </NavLink>
        {/* Archives route link */}
        <NavLink to='/archives' className='sideLI flex items-center gap-2 rounded-[4px] pb-4 pt-3 pl-4'>
            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6.09116V13.4006C20 15.863 17.9433 17.8674 15.4167 17.8674C13.7742 17.8398 13.7733 15.4586 15.4167 15.431C16.5658 15.431 17.5 14.5205 17.5 13.4006V6.09116C17.5 5.95229 17.485 5.81584 17.4575 5.68509H2.5V13.4006C2.5 14.5205 3.435 15.431 4.58333 15.431C6.22583 15.4578 6.22667 17.8406 4.58333 17.8674C2.05667 17.8674 0 15.863 0 13.4006V4.46685C0 2.0044 2.05667 0 4.58333 0H6.69C7.14083 0 7.59167 0.103956 7.99417 0.299685L10.6242 1.58045C10.6833 1.60969 10.7458 1.62431 10.8108 1.62431H15.4167C17.9433 1.62431 20 3.62871 20 6.09116ZM12.6367 13.8066H11.25V9.33897C11.2217 7.7374 8.7775 7.73821 8.75 9.33897V13.8066H7.36417C6.62167 13.8066 6.25 14.6813 6.775 15.193L9.41083 17.7618C9.73667 18.0794 10.2642 18.0794 10.5892 17.7618L13.225 15.193C13.75 14.6813 13.3792 13.8066 12.6367 13.8066Z" fill="#B1B6CA" />
            </svg>
            <p className="navLink text-[14px] font-normal text-[#B1B6CA] mt-1">Archives</p>
        </NavLink>
        {/* Change password */}
        <NavLink to='/changePassword' className='sideLI flex items-center gap-2 rounded-[4px] pb-4 pt-3 pl-4'>
            <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.3 7.61043V6.30004C15.3 2.82062 12.4794 0 9 0C5.52058 0 2.7 2.82062 2.7 6.3V7.61038C1.04473 8.45511 0.002025 10.1557 0 12.0141V16.5141C0.00299532 19.2467 2.21742 21.4612 4.94999 21.4641H13.05C15.7826 21.4611 17.997 19.2467 18 16.5141V12.0141C17.998 10.1558 16.9553 8.45511 15.3 7.61043ZM9 2.7C10.9882 2.7 12.6 4.31178 12.6 6.3V7.0641H5.40001V6.3C5.40001 4.31178 7.01179 2.7 9 2.7ZM15.3 16.5141C15.3 17.7567 14.2927 18.7641 13.05 18.7641H4.95004C3.7074 18.7641 2.70005 17.7567 2.70005 16.5141V12.0141C2.70005 10.7715 3.7074 9.76414 4.95004 9.76414H13.05C14.2927 9.76414 15.3 10.7715 15.3 12.0141V16.5141Z" fill="#B1B6CA" />
            </svg>
            <p className="navLink text-[14px] font-normal text-[#B1B6CA] mt-1">Change Password</p>
        </NavLink>
        <NavLink to='/help' className='sideLI flex items-center gap-2 rounded-[4px] pb-4 pt-3 pl-4'>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 0C8.82441 0 6.69767 0.645139 4.88873 1.85383C3.07979 3.06253 1.66989 4.78049 0.83733 6.79048C0.00476615 8.80047 -0.213071 11.0122 0.211367 13.146C0.635804 15.2798 1.68345 17.2398 3.22183 18.7782C4.76021 20.3165 6.72022 21.3642 8.85401 21.7886C10.9878 22.2131 13.1995 21.9952 15.2095 21.1627C17.2195 20.3301 18.9375 18.9202 20.1462 17.1113C21.3549 15.3023 22 13.1756 22 11C21.9968 8.08359 20.8369 5.28753 18.7747 3.22531C16.7125 1.16309 13.9164 0.00315432 11 0ZM11 19.25C9.36831 19.25 7.77325 18.7661 6.41655 17.8596C5.05984 16.9531 4.00242 15.6646 3.378 14.1571C2.75358 12.6496 2.5902 10.9908 2.90853 9.3905C3.22685 7.79016 4.01259 6.32015 5.16637 5.16637C6.32016 4.01259 7.79017 3.22685 9.39051 2.90852C10.9909 2.59019 12.6497 2.75357 14.1571 3.37799C15.6646 4.00242 16.9531 5.05984 17.8596 6.41654C18.7661 7.77325 19.25 9.3683 19.25 11C19.2476 13.1873 18.3776 15.2843 16.831 16.8309C15.2843 18.3776 13.1873 19.2476 11 19.25Z" fill="#B1B6CA" />
                <path d="M11.0046 17.4167C11.764 17.4167 12.3796 16.8011 12.3796 16.0417C12.3796 15.2823 11.764 14.6667 11.0046 14.6667C10.2452 14.6667 9.62964 15.2823 9.62964 16.0417C9.62964 16.8011 10.2452 17.4167 11.0046 17.4167Z" fill="#B1B6CA" />
                <path d="M11.6939 4.57146C11.1332 4.47093 10.5573 4.49459 10.0067 4.64077C9.45614 4.78695 8.94432 5.05209 8.50732 5.4175C8.07032 5.78292 7.71878 6.23973 7.47746 6.75573C7.23613 7.27174 7.1109 7.83439 7.1106 8.40404C7.1106 8.76871 7.25546 9.11845 7.51332 9.37631C7.77119 9.63417 8.12092 9.77904 8.4856 9.77904C8.85027 9.77904 9.2 9.63417 9.45787 9.37631C9.71573 9.11845 9.8606 8.76871 9.8606 8.40404C9.86143 8.20231 9.91559 8.00439 10.0176 7.83035C10.1196 7.65631 10.2658 7.51233 10.4414 7.41301C10.617 7.3137 10.8157 7.26258 11.0174 7.26483C11.2191 7.26709 11.4166 7.32265 11.59 7.42587C11.7633 7.52909 11.9062 7.67631 12.0043 7.85259C12.1024 8.02888 12.1521 8.22796 12.1484 8.42965C12.1447 8.63135 12.0878 8.82848 11.9833 9.00106C11.8789 9.17365 11.7307 9.31555 11.5537 9.41237C10.9865 9.64993 10.5044 10.0536 10.171 10.5703C9.83756 11.087 9.66831 11.6925 9.68551 12.3072C9.68551 12.6719 9.83038 13.0216 10.0882 13.2795C10.3461 13.5373 10.6958 13.6822 11.0605 13.6822C11.4252 13.6822 11.7749 13.5373 12.0328 13.2795C12.2906 13.0216 12.4355 12.6719 12.4355 12.3072C12.4347 12.2403 12.4396 12.1734 12.4502 12.1074C12.5786 11.9902 12.7242 11.8934 12.8819 11.8205C13.5861 11.4323 14.1528 10.8357 14.5044 10.1126C14.8559 9.38944 14.9749 8.57521 14.8452 7.7817C14.7154 6.98819 14.3431 6.25431 13.7796 5.68083C13.216 5.10734 12.4887 4.72238 11.6976 4.57879L11.6939 4.57146Z" fill="#B1B6CA" />
            </svg>
            <p className="navLink text-[14px] font-normal text-[#B1B6CA] mt-1">Help</p>
        </NavLink>
    </ul>
</>

const SideBar = () => {
    return (
        <div className='w-[315px] min-h-screen bg-white pt-5 borde'>
            <div>
                <img className='mx-auto' src={bdrcsLogo} alt="Dashboard logo of BDRCS" />
            </div>
            {/* Dashboard  sidebar route ul starts here*/}
            <div>
                {sideLinks}
            </div>
        </div>
    );
};

export default SideBar;