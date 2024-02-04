

const NavBar = () => {
    return (
        <div className=' h-20 flex items-center gap-4 pl-7 shadow-sm'>
            {/* Search field */}
            <div className='flex items-center relative'>
                <input className='w-[1108px] h-[45px] rounded-md pl-5 focus:outline-[#2AA778] focus:caret-[#2AA778]' type="text" placeholder='Search' />
                <svg className='absolute right-3' width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.625 16.625C13.491 16.625 16.625 13.491 16.625 9.625C16.625 5.75901 13.491 2.625 9.625 2.625C5.75901 2.625 2.625 5.75901 2.625 9.625C2.625 13.491 5.75901 16.625 9.625 16.625Z" stroke="#2AA778" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18.3751 18.375L14.5688 14.5687" stroke="#2AA778" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            {/* Notification and Inbox */}
            <div className='flex items-center gap-5 bg-white px-5 h-[45px] rounded-md'>
                <svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.7838 18.0912L24.0888 15.2712C23.7138 14.6562 23.3838 13.4712 23.3838 12.7512V9.94617C23.3838 4.50117 18.9588 0.0761719 13.5288 0.0761719C8.08384 0.0911719 3.65884 4.50117 3.65884 9.94617V12.7362C3.65884 13.4562 3.32884 14.6412 2.96884 15.2562L1.27384 18.0762C0.628839 19.1712 0.478839 20.4162 0.883839 21.4962C1.28884 22.5912 2.20384 23.4612 3.40384 23.8512C5.02384 24.3912 6.65884 24.7812 8.32384 25.0662C8.48884 25.0962 8.65384 25.1112 8.81884 25.1412C9.02884 25.1712 9.25384 25.2012 9.47884 25.2312C9.86884 25.2912 10.2588 25.3362 10.6638 25.3662C11.6088 25.4562 12.5688 25.5012 13.5288 25.5012C14.4738 25.5012 15.4188 25.4562 16.3488 25.3662C16.6938 25.3362 17.0388 25.3062 17.3688 25.2612C17.6388 25.2312 17.9088 25.2012 18.1788 25.1562C18.3438 25.1412 18.5088 25.1112 18.6738 25.0812C20.3538 24.8112 22.0188 24.3912 23.6388 23.8512C24.7938 23.4612 25.6788 22.5912 26.0988 21.4812C26.5188 20.3562 26.3988 19.1262 25.7838 18.0912ZM14.6238 12.0012C14.6238 12.6312 14.1138 13.1412 13.4838 13.1412C12.8538 13.1412 12.3438 12.6312 12.3438 12.0012V7.35117C12.3438 6.72117 12.8538 6.21117 13.4838 6.21117C14.1138 6.21117 14.6238 6.72117 14.6238 7.35117V12.0012ZM17.7445 27.015C17.1145 28.755 15.4495 30 13.4995 30C12.3145 30 11.1445 29.52 10.3195 28.665C9.83953 28.215 9.47953 27.615 9.26953 27C9.46453 27.03 9.65953 27.045 9.86953 27.075C10.2145 27.12 10.5745 27.165 10.9345 27.195C11.7895 27.27 12.6595 27.315 13.5295 27.315C14.3845 27.315 15.2395 27.27 16.0795 27.195C16.3945 27.165 16.7095 27.15 17.0095 27.105C17.2495 27.075 17.4895 27.045 17.7445 27.015Z" fill="#2AA778" />
                </svg>
                <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.9484 5.35986L17.4782 14.8301C16.4222 15.8833 14.9916 16.4748 13.5002 16.4748C12.0087 16.4748 10.5781 15.8833 9.52219 14.8301L0.0519939 5.35986C0.036244 5.53761 0.000244141 5.69849 0.000244141 5.87511V19.375C0.00203047 20.8663 0.595233 22.296 1.64973 23.3505C2.70423 24.405 4.13393 24.9982 5.62522 25H21.3751C22.8664 24.9982 24.2961 24.405 25.3506 23.3505C26.4051 22.296 26.9983 20.8663 27.0001 19.375V5.87511C27.0001 5.69849 26.9641 5.53761 26.9484 5.35986Z" fill="#2AA778" />
                    <path d="M15.8876 13.2393L26.1633 2.96248C25.6655 2.1371 24.9634 1.45391 24.1248 0.978815C23.2861 0.503722 22.3392 0.252755 21.3753 0.250122H5.62538C4.66151 0.252755 3.71458 0.503722 2.87592 0.978815C2.03727 1.45391 1.33519 2.1371 0.837402 2.96248L11.1131 13.2393C11.7471 13.8708 12.6055 14.2253 13.5003 14.2253C14.3952 14.2253 15.2536 13.8708 15.8876 13.2393Z" fill="#2AA778" />
                </svg>
            </div>
            {/* BDRC logo with dropdown */}
            <div className='flex items-center gap-2 border-[#ABABAB] border-l-2 pl-3 '>
                <svg width="140" height="38" viewBox="0 0 140 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.112 27V22.842H2.926V27H0.966V17.228H2.926V21.246H7.112V17.228H9.072V27H7.112ZM14.4732 20.728C13.5352 20.728 12.7932 21.33 12.6392 22.394H16.3212C16.2932 21.372 15.4812 20.728 14.4732 20.728ZM18.1552 24.564C17.7352 25.992 16.4472 27.126 14.5292 27.126C12.2752 27.126 10.6372 25.558 10.6372 23.122C10.6372 20.672 12.2332 19.118 14.5292 19.118C16.7692 19.118 18.3512 20.644 18.3512 22.954C18.3512 23.206 18.3372 23.458 18.2952 23.71H12.6252C12.7232 24.858 13.5072 25.502 14.4872 25.502C15.3272 25.502 15.7892 25.082 16.0412 24.564H18.1552ZM19.9218 27V16.64H21.8818V27H19.9218ZM23.9583 27V16.64H25.9183V27H23.9583ZM35.4847 23.122C35.4847 25.558 33.6927 27.126 31.4387 27.126C29.1987 27.126 27.5047 25.558 27.5047 23.122C27.5047 20.672 29.2547 19.118 31.4947 19.118C33.7347 19.118 35.4847 20.672 35.4847 23.122ZM29.4927 23.122C29.4927 24.662 30.3887 25.418 31.4387 25.418C32.4747 25.418 33.4687 24.662 33.4687 23.122C33.4687 21.568 32.5027 20.826 31.4667 20.826C30.4307 20.826 29.4927 21.568 29.4927 23.122ZM36.2645 29.016L37.2025 24.844H39.2745L37.5385 29.016H36.2645ZM49.6928 24.116C49.6928 23.276 49.0908 22.772 48.1388 22.772H46.2068V25.404H48.1808C49.1328 25.404 49.6928 24.942 49.6928 24.116ZM49.4548 20.042C49.4548 19.258 48.9228 18.81 47.9988 18.81H46.2068V21.26H47.9988C48.9228 21.26 49.4548 20.84 49.4548 20.042ZM51.6808 24.354C51.6808 25.908 50.4908 27 48.4608 27H44.2468V17.228H48.2788C50.3228 17.228 51.4568 18.292 51.4568 19.748C51.4568 20.938 50.7428 21.68 49.7908 21.988C50.8968 22.184 51.6808 23.206 51.6808 24.354ZM56.7989 17.228C59.9209 17.228 61.9509 19.16 61.9509 22.128C61.9509 25.082 59.9209 27 56.7989 27H53.3829V17.228H56.7989ZM55.3429 25.334H56.7289C58.7869 25.334 59.9489 24.158 59.9489 22.128C59.9489 20.098 58.7869 18.88 56.7289 18.88H55.3429V25.334ZM68.738 20.266C68.738 19.398 68.248 18.852 67.156 18.852H65.518V21.722H67.156C68.248 21.722 68.738 21.148 68.738 20.266ZM63.558 17.228H67.226C69.578 17.228 70.754 18.586 70.754 20.224C70.754 21.414 70.096 22.618 68.528 23.038L70.866 27H68.598L66.442 23.192H65.518V27H63.558V17.228ZM72.1908 22.1C72.1908 19.174 74.3328 17.102 77.1468 17.102C79.3168 17.102 81.0808 18.264 81.7388 20.266H79.4848C79.0228 19.328 78.1828 18.866 77.1328 18.866C75.4248 18.866 74.2068 20.112 74.2068 22.1C74.2068 24.074 75.4248 25.334 77.1328 25.334C78.1828 25.334 79.0228 24.872 79.4848 23.92H81.7388C81.0808 25.936 79.3168 27.084 77.1468 27.084C74.3328 27.084 72.1908 25.026 72.1908 22.1ZM90.3849 24.172C90.3849 25.712 89.1529 27.098 86.9269 27.098C84.8969 27.098 83.3289 26.034 83.3009 24.186H85.4009C85.4569 24.97 85.9749 25.488 86.8849 25.488C87.8089 25.488 88.3549 24.998 88.3549 24.298C88.3549 22.184 83.3149 23.458 83.3289 19.916C83.3289 18.152 84.7569 17.088 86.7729 17.088C88.7749 17.088 90.1469 18.11 90.2729 19.874H88.1169C88.0749 19.23 87.5569 18.726 86.7169 18.712C85.9469 18.684 85.3729 19.062 85.3729 19.86C85.3729 21.82 90.3849 20.728 90.3849 24.172Z" fill="#444444" />
                    <rect x="102.5" y="0.5" width="37" height="37" rx="18.5" fill="white" stroke="#E2E2E2" />
                    <path d="M137.718 18.8076C137.718 27.8062 130.506 35.1016 121.61 35.1016C112.715 35.1016 105.502 27.8062 105.502 18.8076C105.502 9.80895 112.715 2.51355 121.61 2.51355C130.506 2.51412 137.718 9.80895 137.718 18.8076Z" fill="#2AA778" />
                    <path d="M132.719 18.8076C132.719 25.0133 127.745 30.0446 121.61 30.0446C115.476 30.0446 110.502 25.0139 110.502 18.8076C110.502 12.602 115.476 7.57239 121.61 7.57239C127.745 7.57296 132.719 12.602 132.719 18.8076Z" fill="white" />
                    <path d="M109.438 27.609L108.99 26.8966C108.902 26.7554 108.844 26.6456 108.815 26.5679C108.786 26.4918 108.775 26.4089 108.782 26.3283C108.793 26.2448 108.821 26.1619 108.869 26.0802C108.92 25.9956 108.99 25.9269 109.08 25.8681C109.177 25.8074 109.28 25.7714 109.389 25.764C109.5 25.7571 109.598 25.78 109.688 25.8303C109.656 25.6982 109.668 25.5748 109.72 25.4604C109.773 25.3461 109.86 25.2494 109.979 25.1728C110.075 25.1111 110.178 25.0716 110.291 25.0522C110.403 25.0316 110.508 25.0385 110.601 25.067C110.696 25.1002 110.78 25.158 110.853 25.246C110.896 25.302 110.992 25.4438 111.137 25.6697L111.517 26.2763L109.438 27.609ZM109.56 27.0281L110.037 26.7194L109.891 26.4844C109.802 26.3432 109.747 26.2586 109.721 26.2277C109.673 26.1699 109.617 26.1396 109.555 26.1288C109.492 26.1202 109.426 26.1379 109.36 26.1808C109.297 26.2214 109.254 26.2706 109.232 26.3272C109.213 26.3815 109.216 26.4432 109.244 26.5078C109.261 26.5456 109.324 26.6513 109.43 26.8206L109.56 27.0281ZM110.386 26.4981L110.94 26.1413L110.731 25.8097C110.649 25.6788 110.595 25.5999 110.566 25.569C110.519 25.5227 110.465 25.4981 110.4 25.4918C110.335 25.4861 110.267 25.5073 110.191 25.5536C110.13 25.5948 110.085 25.6416 110.058 25.6954C110.032 25.7514 110.022 25.8069 110.033 25.8681C110.043 25.9298 110.102 26.0447 110.203 26.2082L110.386 26.4981Z" fill="white" />
                    <path d="M109.729 22.8058L109.908 23.2249L109.466 23.6148L109.796 24.3929L110.374 24.3312L110.551 24.7491L107.972 24.9807L107.795 24.5616L109.729 22.8058ZM109.139 23.9092L108.413 24.5416L109.364 24.4392L109.139 23.9092Z" fill="white" />
                    <path d="M109.707 22.6783L107.317 23.2752L107.219 22.8755L108.619 21.632L107.012 22.0328L106.919 21.6526L109.309 21.054L109.41 21.4656L108.043 22.6903L109.614 22.2952L109.707 22.6783Z" fill="white" />
                    <path d="M108.273 19.8018L107.859 19.8355L107.788 18.9225L108.766 18.8464C108.873 18.9253 108.971 19.0488 109.061 19.2106C109.149 19.3736 109.201 19.5394 109.213 19.7126C109.231 19.9333 109.192 20.1294 109.097 20.2998C109.002 20.4719 108.859 20.6068 108.665 20.7052C108.47 20.8029 108.254 20.8607 108.019 20.879C107.763 20.8984 107.535 20.8727 107.328 20.7961C107.122 20.72 106.96 20.6 106.84 20.4284C106.748 20.3021 106.695 20.1386 106.678 19.9362C106.659 19.6766 106.708 19.4685 106.825 19.3118C106.942 19.1546 107.111 19.0471 107.334 18.9871L107.457 19.3999C107.339 19.4376 107.247 19.5011 107.183 19.588C107.12 19.676 107.094 19.7795 107.101 19.9019C107.117 20.0883 107.196 20.23 107.343 20.3295C107.489 20.4262 107.695 20.4639 107.965 20.4444C108.257 20.4204 108.47 20.3484 108.608 20.2238C108.745 20.1037 108.807 19.9522 108.793 19.7715C108.787 19.6817 108.758 19.5948 108.711 19.5085C108.663 19.4222 108.608 19.3501 108.546 19.2901L108.235 19.3141L108.273 19.8018Z" fill="white" />
                    <path d="M109.12 18.5057L106.689 18.3176L106.72 17.8917L108.739 18.0501L108.818 16.9929L109.232 17.0249L109.12 18.5057Z" fill="white" />
                    <path d="M109.682 14.962L109.582 15.4074L108.998 15.4583L108.809 16.285L109.316 16.5806L109.213 17.0237L106.995 15.6744L107.094 15.229L109.682 14.962ZM108.561 15.5012L107.606 15.5801L108.433 16.0626L108.561 15.5012Z" fill="white" />
                    <path d="M107.456 13.9031L107.747 13.1856C107.811 13.0237 107.875 12.9077 107.938 12.8345C108.023 12.7362 108.132 12.667 108.266 12.6258C108.4 12.5881 108.548 12.5761 108.711 12.5932C108.873 12.611 109.062 12.6636 109.274 12.7516C109.463 12.8276 109.616 12.9145 109.735 13.01C109.882 13.1278 109.987 13.2524 110.055 13.3845C110.104 13.4846 110.129 13.6018 110.126 13.7356C110.122 13.835 110.091 13.9585 110.034 14.1026L109.736 14.8425L107.456 13.9031ZM107.999 13.6687L109.51 14.2896L109.628 13.9974C109.671 13.8888 109.696 13.8065 109.701 13.7504C109.709 13.6801 109.698 13.6149 109.671 13.5549C109.643 13.4931 109.583 13.4285 109.492 13.3599C109.401 13.2925 109.266 13.2216 109.089 13.1484C108.914 13.0763 108.774 13.0335 108.669 13.0226C108.562 13.0106 108.475 13.0169 108.403 13.0415C108.33 13.0678 108.271 13.1129 108.223 13.1798C108.186 13.2279 108.135 13.3325 108.071 13.492L107.999 13.6687Z" fill="white" />
                    <path d="M110.522 12.9736L108.414 11.6917L109.205 10.359L109.562 10.5728L108.987 11.5448L109.452 11.8284L109.988 10.9239L110.344 11.1411L109.809 12.0439L110.384 12.3938L110.981 11.3876L111.337 11.6037L110.522 12.9736Z" fill="white" />
                    <path d="M110.804 10.9548L111.03 10.6054C111.17 10.6906 111.295 10.7261 111.4 10.7169C111.506 10.7066 111.601 10.6523 111.68 10.5522C111.767 10.4465 111.807 10.3453 111.798 10.2469C111.789 10.1515 111.75 10.0737 111.68 10.0148C111.637 9.97707 111.589 9.95764 111.538 9.95306C111.489 9.9502 111.43 9.96793 111.362 10.0028C111.313 10.0291 111.216 10.0937 111.065 10.1995C110.87 10.3316 110.708 10.4019 110.576 10.4139C110.392 10.4253 110.224 10.3693 110.072 10.2446C109.976 10.164 109.905 10.0657 109.86 9.94963C109.814 9.83242 109.805 9.71122 109.833 9.58658C109.86 9.46194 109.925 9.33615 110.027 9.21094C110.193 9.00798 110.371 8.8982 110.56 8.88162C110.749 8.86561 110.933 8.92736 111.112 9.06801L110.859 9.40877C110.751 9.3413 110.656 9.31329 110.575 9.32358C110.495 9.33558 110.418 9.38532 110.342 9.47909C110.264 9.57285 110.227 9.66719 110.229 9.75924C110.229 9.81927 110.255 9.86902 110.305 9.91075C110.349 9.94563 110.401 9.96335 110.458 9.95764C110.534 9.94906 110.658 9.88445 110.83 9.76096C111.004 9.63746 111.146 9.55685 111.254 9.52025C111.365 9.48195 111.478 9.47623 111.594 9.50082C111.71 9.5254 111.829 9.58715 111.951 9.6872C112.058 9.77811 112.14 9.88674 112.192 10.0188C112.244 10.1509 112.256 10.2835 112.226 10.4156C112.195 10.5471 112.122 10.686 112.006 10.8267C111.841 11.0342 111.655 11.144 111.455 11.1617C111.251 11.1812 111.037 11.1103 110.804 10.9548Z" fill="white" />
                    <path d="M112.685 9.95023L111.047 8.09437L111.36 7.81078L112.006 8.54032L112.618 7.98745L111.975 7.25734L112.288 6.97375L113.927 8.83134L113.613 9.11492L112.895 8.30133L112.282 8.85478L112.999 9.66722L112.685 9.95023Z" fill="white" />
                    <path d="M114.835 8.17659L113.643 5.99712L114.415 5.56545C114.61 5.45682 114.761 5.39679 114.87 5.3865C114.979 5.37735 115.089 5.40708 115.197 5.47741C115.304 5.5483 115.394 5.64664 115.464 5.777C115.553 5.93994 115.586 6.09717 115.566 6.24811C115.546 6.39905 115.462 6.53169 115.319 6.65062C115.427 6.66091 115.525 6.68606 115.614 6.72266C115.702 6.76096 115.836 6.84043 116.015 6.9605L116.47 7.26066L116.03 7.50651L115.507 7.1789C115.321 7.06284 115.198 6.99252 115.139 6.96908C115.08 6.94278 115.028 6.93363 114.979 6.93992C114.93 6.94563 114.866 6.97193 114.779 7.01939L114.706 7.06055L115.203 7.97133L114.835 8.17659ZM114.514 6.71408L114.785 6.56142C114.963 6.46423 115.067 6.39448 115.1 6.34988C115.135 6.30872 115.151 6.25897 115.153 6.20009C115.154 6.14463 115.135 6.08288 115.1 6.01827C115.059 5.94509 115.012 5.89306 114.953 5.86562C114.895 5.83932 114.834 5.83646 114.768 5.85818C114.736 5.86962 114.646 5.9165 114.498 6.00055L114.212 6.16063L114.514 6.71408Z" fill="white" />
                    <path d="M116.604 7.22183L115.76 4.88399L117.205 4.34827L117.348 4.74448L116.297 5.13327L116.483 5.64783L117.461 5.28649L117.604 5.68328L116.627 6.04462L116.858 6.68154L117.946 6.27903L118.089 6.6741L116.604 7.22183Z" fill="white" />
                    <path d="M117.865 4.15738L118.617 4.00587C118.785 3.97157 118.919 3.96128 119.012 3.975C119.141 3.99386 119.259 4.04646 119.366 4.13737C119.471 4.22828 119.562 4.34777 119.637 4.49471C119.711 4.64165 119.772 4.82918 119.818 5.05844C119.856 5.2597 119.87 5.43579 119.856 5.59131C119.84 5.77769 119.795 5.93606 119.723 6.06585C119.667 6.16419 119.585 6.24766 119.473 6.3197C119.39 6.3723 119.27 6.41347 119.119 6.4432L118.347 6.59871L117.865 4.15738ZM118.358 4.48785L118.678 6.10644L118.983 6.04469C119.097 6.02125 119.179 5.99438 119.227 5.97094C119.289 5.93549 119.337 5.89147 119.372 5.83601C119.407 5.77826 119.428 5.69193 119.433 5.57758C119.44 5.46324 119.424 5.31172 119.387 5.12248C119.35 4.93323 119.308 4.7903 119.262 4.69482C119.212 4.59934 119.157 4.52901 119.095 4.48213C119.035 4.43696 118.965 4.41066 118.884 4.40609C118.823 4.40323 118.71 4.41638 118.542 4.45011L118.358 4.48785Z" fill="white" />
                    <path d="M122.449 5.28483L122.85 5.44835C122.78 5.71992 122.673 5.92117 122.525 6.05039C122.374 6.17789 122.188 6.23963 121.965 6.23563C121.687 6.22991 121.462 6.11214 121.29 5.88001C121.117 5.65074 121.036 5.34086 121.045 4.94922C121.053 4.53642 121.152 4.21796 121.337 3.99498C121.521 3.76972 121.76 3.66166 122.052 3.66852C122.308 3.67424 122.514 3.768 122.669 3.95325C122.761 4.06073 122.83 4.2151 122.871 4.41464L122.454 4.52327C122.433 4.39406 122.384 4.29114 122.307 4.21625C122.229 4.13963 122.134 4.10075 122.023 4.09618C121.866 4.09332 121.738 4.15621 121.64 4.286C121.54 4.41521 121.486 4.62961 121.48 4.92292C121.472 5.23737 121.514 5.46207 121.605 5.597C121.698 5.73364 121.82 5.80282 121.972 5.80683C122.085 5.80797 122.183 5.76852 122.265 5.68619C122.346 5.60043 122.408 5.46836 122.449 5.28483Z" fill="white" />
                    <path d="M123.095 6.24812L123.55 3.79993L124.418 3.9663C124.636 4.00747 124.789 4.06064 124.879 4.12182C124.972 4.18471 125.036 4.27904 125.074 4.40197C125.115 4.52546 125.119 4.6604 125.091 4.80447C125.059 4.98972 124.984 5.13151 124.873 5.23328C124.76 5.33676 124.613 5.3865 124.429 5.38307C124.508 5.46255 124.565 5.5443 124.611 5.63292C124.654 5.7164 124.708 5.86505 124.77 6.07316L124.931 6.59745L124.437 6.50197L124.241 5.91422C124.171 5.70268 124.121 5.5706 124.089 5.51172C124.059 5.45569 124.025 5.41509 123.984 5.38708C123.943 5.36078 123.876 5.33905 123.781 5.32075L123.697 5.3036L123.508 6.32702L123.095 6.24812ZM123.771 4.91482L124.075 4.97199C124.272 5.00973 124.397 5.02173 124.449 5.01316C124.503 5.00115 124.548 4.97485 124.583 4.93083C124.62 4.88623 124.647 4.82791 124.661 4.75416C124.676 4.67183 124.669 4.60151 124.642 4.54605C124.615 4.48716 124.569 4.44599 124.505 4.41969C124.473 4.40826 124.374 4.38424 124.208 4.35223L123.887 4.29334L123.771 4.91482Z" fill="white" />
                    <path d="M125.061 6.65526L125.884 4.30884L127.335 4.82969L127.196 5.22648L126.142 4.84627L125.959 5.36598L126.94 5.71818L126.802 6.11496L125.821 5.7622L125.596 6.40083L126.69 6.79476L126.551 7.18983L125.061 6.65526Z" fill="white" />
                    <path d="M127.074 6.5346L127.458 6.68897C127.403 6.84563 127.391 6.97542 127.423 7.07776C127.455 7.18124 127.526 7.26414 127.637 7.32475C127.757 7.38936 127.864 7.40708 127.956 7.38078C128.046 7.35334 128.114 7.29845 128.157 7.21783C128.184 7.16638 128.195 7.11492 128.189 7.06346C128.181 7.01487 128.153 6.96055 128.105 6.8988C128.071 6.85821 127.989 6.7713 127.858 6.64324C127.689 6.47629 127.588 6.32992 127.553 6.20014C127.503 6.02004 127.525 5.84166 127.616 5.66842C127.675 5.55864 127.756 5.46717 127.861 5.39856C127.966 5.33109 128.08 5.29907 128.206 5.30193C128.334 5.30479 128.468 5.3431 128.607 5.41914C128.839 5.54378 128.979 5.69815 129.033 5.88339C129.086 6.06521 129.063 6.26246 128.961 6.46771L128.581 6.28418C128.625 6.1624 128.633 6.06235 128.607 5.98631C128.581 5.90969 128.516 5.84108 128.412 5.78505C128.303 5.72788 128.206 5.7073 128.116 5.72788C128.059 5.73989 128.018 5.77591 127.986 5.83194C127.958 5.88511 127.954 5.93942 127.971 5.99488C127.995 6.06864 128.082 6.17727 128.236 6.3242C128.39 6.474 128.494 6.5975 128.553 6.69698C128.611 6.79932 128.64 6.90967 128.638 7.03145C128.638 7.15151 128.602 7.2813 128.526 7.41909C128.461 7.54544 128.37 7.64835 128.253 7.72497C128.138 7.80444 128.013 7.84217 127.876 7.83646C127.741 7.8336 127.595 7.78957 127.433 7.70152C127.203 7.57631 127.057 7.4168 127 7.21955C126.944 7.0223 126.967 6.79475 127.074 6.5346Z" fill="white" />
                    <path d="M130.032 8.27492L130.265 8.64369C130.054 8.82607 129.85 8.9227 129.655 8.94157C129.461 8.95929 129.272 8.90097 129.094 8.76547C128.872 8.59681 128.756 8.36754 128.747 8.07995C128.738 7.7918 128.849 7.49278 129.081 7.17775C129.324 6.84614 129.588 6.64431 129.869 6.56999C130.146 6.49681 130.403 6.54655 130.637 6.7255C130.842 6.87987 130.954 7.07769 130.975 7.31782C130.988 7.46019 130.957 7.62485 130.877 7.81238L130.474 7.65687C130.531 7.53966 130.547 7.42817 130.531 7.31954C130.51 7.21205 130.457 7.12572 130.364 7.05654C130.242 6.96277 130.102 6.93762 129.947 6.98564C129.79 7.03424 129.626 7.17546 129.45 7.41216C129.264 7.66315 129.17 7.87184 129.169 8.03593C129.165 8.19887 129.224 8.32637 129.346 8.42014C129.436 8.48818 129.539 8.51162 129.653 8.49218C129.769 8.47274 129.894 8.39956 130.032 8.27492Z" fill="white" />
                    <path d="M130.007 9.4448L131.766 7.70386L132.842 8.81646L132.544 9.11091L131.763 8.30133L131.374 8.68439L132.103 9.43737L131.806 9.73296L131.078 8.97941L130.597 9.45395L131.408 10.2938L131.112 10.5877L130.007 9.4448Z" fill="white" />
                    <path d="M131.284 10.7958L133.288 9.34705L133.525 9.68323L132.678 11.3613L134.023 10.3899L134.249 10.7078L132.245 12.156L132.002 11.8095L132.828 10.1618L131.509 11.1131L131.284 10.7958Z" fill="white" />
                    <path d="M132.631 12.89L134.457 11.9501L134.178 11.3984L134.547 11.2074L135.295 12.6888L134.925 12.8797L134.646 12.3274L132.822 13.2679L132.631 12.89Z" fill="white" />
                    <path d="M134.187 14.4086L134.341 14.7991C134.19 14.8649 134.089 14.9455 134.035 15.0393C133.982 15.1336 133.973 15.2422 134.005 15.3669C134.042 15.4978 134.099 15.5887 134.184 15.6384C134.267 15.6859 134.352 15.7002 134.44 15.675C134.495 15.6602 134.538 15.6321 134.57 15.5927C134.601 15.5544 134.622 15.4955 134.633 15.4177C134.64 15.3646 134.645 15.2445 134.647 15.0604C134.65 14.8226 134.687 14.6476 134.755 14.5333C134.854 14.3732 134.994 14.2657 135.182 14.2159C135.303 14.1805 135.422 14.1805 135.543 14.2102C135.664 14.24 135.767 14.3017 135.851 14.3983C135.936 14.4927 136 14.619 136.042 14.7745C136.111 15.029 136.097 15.2388 136 15.4034C135.902 15.5693 135.747 15.6859 135.53 15.7522L135.402 15.3474C135.519 15.2948 135.598 15.2342 135.635 15.1622C135.673 15.0896 135.676 14.9952 135.643 14.8809C135.612 14.7602 135.56 14.6751 135.484 14.6253C135.435 14.5916 135.379 14.5824 135.319 14.599C135.261 14.6162 135.22 14.6488 135.191 14.6985C135.154 14.7642 135.135 14.9055 135.134 15.1199C135.133 15.3354 135.117 15.4972 135.083 15.6087C135.051 15.7202 134.99 15.8185 134.903 15.8997C134.817 15.9832 134.697 16.0449 134.546 16.0861C134.41 16.1238 134.275 16.1256 134.139 16.093C134.002 16.0621 133.89 15.9963 133.799 15.8934C133.71 15.7905 133.64 15.6499 133.593 15.4732C133.524 15.2182 133.54 15.0004 133.643 14.8243C133.747 14.6476 133.929 14.5098 134.187 14.4086Z" fill="white" />
                    <path d="M135.111 16.3245C135.359 16.2971 135.572 16.3057 135.748 16.3525C135.877 16.3846 135.996 16.4389 136.104 16.5092C136.211 16.5812 136.296 16.6624 136.353 16.7545C136.431 16.878 136.48 17.0243 136.499 17.1953C136.531 17.5034 136.444 17.7619 136.24 17.9706C136.037 18.1787 135.737 18.305 135.337 18.3496C134.943 18.3919 134.626 18.3348 134.382 18.1747C134.138 18.0174 134.002 17.7842 133.97 17.4771C133.934 17.1661 134.021 16.9071 134.221 16.699C134.426 16.492 134.722 16.3674 135.111 16.3245ZM135.174 16.759C134.896 16.7899 134.693 16.8677 134.561 16.9912C134.432 17.1158 134.374 17.2633 134.393 17.4291C134.409 17.5978 134.496 17.727 134.648 17.8213C134.801 17.9122 135.02 17.942 135.303 17.9122C135.584 17.8814 135.787 17.8065 135.914 17.6858C136.04 17.5669 136.095 17.42 136.076 17.245C136.058 17.0735 135.973 16.9409 135.822 16.8488C135.671 16.759 135.455 16.7287 135.174 16.759Z" fill="white" />
                    <path d="M134.943 20.1232L134.767 20.5246C134.501 20.4445 134.306 20.3296 134.184 20.1741C134.062 20.0186 134.007 19.8282 134.022 19.6018C134.035 19.3228 134.16 19.0981 134.395 18.9323C134.629 18.7647 134.937 18.6933 135.324 18.7179C135.732 18.7413 136.043 18.8494 136.257 19.0437C136.473 19.2393 136.572 19.4846 136.553 19.779C136.539 20.0397 136.439 20.2415 136.253 20.3919C136.141 20.4828 135.987 20.5446 135.79 20.5812L135.695 20.1535C135.825 20.1369 135.927 20.0906 136.005 20.0163C136.084 19.9414 136.124 19.8476 136.131 19.7344C136.142 19.5772 136.084 19.4462 135.959 19.341C135.835 19.2353 135.626 19.1735 135.334 19.1558C135.025 19.1381 134.801 19.1735 134.663 19.2616C134.526 19.3496 134.455 19.4703 134.446 19.6246C134.438 19.7373 134.475 19.8385 134.553 19.9254C134.635 20.01 134.765 20.0757 134.943 20.1232Z" fill="white" />
                    <path d="M133.872 21.1741L136.297 21.5961L136.368 21.1774L133.943 20.7555L133.872 21.1741Z" fill="white" />
                    <path d="M133.822 21.5154L136.188 22.1958L135.768 23.6943L135.369 23.5782L135.675 22.4908L135.151 22.3387L134.867 23.3547L134.467 23.2386L134.753 22.2238L134.106 22.0385L133.789 23.1677L133.389 23.0539L133.822 21.5154Z" fill="white" />
                    <path d="M133.097 23.7422L134.965 24.5844L135.212 24.0183L135.593 24.1881L134.925 25.7095L134.545 25.5369L134.795 24.9726L132.926 24.1293L133.097 23.7422Z" fill="white" />
                    <path d="M132.292 25.3306L133.169 25.8874L134.782 25.9989L134.519 26.4254L133.432 26.3208L134.003 27.2545L133.746 27.6701L132.942 26.2459L132.068 25.6913L132.292 25.3306Z" fill="white" />
                    <path d="M117.157 30.3339L117.919 30.6763C118.069 30.7438 118.179 30.801 118.246 30.8513C118.314 30.8987 118.368 30.9616 118.406 31.032C118.441 31.108 118.464 31.1926 118.468 31.2892C118.472 31.3853 118.452 31.4819 118.409 31.5808C118.361 31.686 118.295 31.7741 118.208 31.8421C118.121 31.9073 118.027 31.9462 117.925 31.9536C118.023 32.0457 118.081 32.1543 118.101 32.2801C118.12 32.4047 118.101 32.5345 118.043 32.6637C117.999 32.77 117.935 32.8604 117.851 32.9399C117.767 33.021 117.677 33.0754 117.582 33.1011C117.488 33.1274 117.386 33.1251 117.277 33.0942C117.209 33.0725 117.053 33.0079 116.807 32.8987L116.158 32.6077L117.157 30.3339ZM116.977 31.7884L116.711 32.399L117.067 32.5585C117.205 32.6202 117.296 32.6551 117.336 32.6631C117.4 32.6763 117.46 32.6671 117.517 32.6357C117.574 32.6025 117.621 32.5465 117.656 32.4647C117.685 32.3973 117.696 32.3344 117.691 32.2743C117.683 32.2143 117.659 32.16 117.616 32.1154C117.571 32.0697 117.464 32.0068 117.289 31.9302L116.977 31.7884ZM117.374 30.8862L117.145 31.4104L117.397 31.5231C117.546 31.5911 117.64 31.6306 117.679 31.6386C117.749 31.6603 117.812 31.6569 117.87 31.63C117.928 31.5997 117.973 31.55 118.004 31.4762C118.035 31.4064 118.043 31.3424 118.031 31.2864C118.016 31.2252 117.98 31.1772 117.921 31.1389C117.884 31.1183 117.777 31.0651 117.595 30.9845L117.374 30.8862Z" fill="white" />
                    <path d="M118.986 31.116L119.736 31.2698C119.906 31.3029 120.031 31.3458 120.115 31.3961C120.225 31.4607 120.313 31.5574 120.377 31.682C120.44 31.8066 120.478 31.9513 120.493 32.1165C120.505 32.2806 120.49 32.4761 120.444 32.7071C120.405 32.9084 120.35 33.0759 120.279 33.2131C120.193 33.3812 120.092 33.5104 119.976 33.6007C119.888 33.6688 119.778 33.7157 119.647 33.7363C119.55 33.7528 119.425 33.7454 119.276 33.7157L118.501 33.5573L118.986 31.116ZM119.317 31.6122L118.995 33.2274L119.301 33.2891C119.415 33.3132 119.5 33.3223 119.554 33.3177C119.624 33.3097 119.685 33.2892 119.74 33.2508C119.793 33.2108 119.844 33.1394 119.893 33.0364C119.944 32.9324 119.988 32.7854 120.024 32.5991C120.06 32.4075 120.076 32.2617 120.069 32.1537C120.06 32.0479 120.038 31.9616 120 31.8941C119.96 31.8266 119.903 31.7769 119.832 31.7409C119.778 31.7117 119.667 31.682 119.499 31.6483L119.317 31.6122Z" fill="white" />
                    <path d="M120.99 33.9684L120.946 31.4773L121.829 31.4636C122.051 31.4596 122.212 31.4773 122.313 31.5225C122.415 31.5665 122.496 31.6431 122.559 31.7574C122.621 31.8689 122.653 31.9993 122.656 32.1479C122.658 32.3366 122.616 32.4887 122.528 32.6122C122.438 32.7368 122.303 32.8146 122.122 32.85C122.215 32.9118 122.288 32.9804 122.349 33.0553C122.408 33.1285 122.491 33.2628 122.593 33.4549L122.856 33.9363L122.354 33.9443L122.042 33.408C121.933 33.2154 121.857 33.097 121.817 33.0467C121.777 32.997 121.733 32.9627 121.689 32.9438C121.643 32.9278 121.573 32.9204 121.475 32.9204H121.39L121.408 33.9609L120.99 33.9684ZM121.384 32.5236L121.692 32.5201C121.892 32.5161 122.018 32.5024 122.068 32.4818C122.117 32.4607 122.156 32.4264 122.182 32.3738C122.212 32.3257 122.223 32.2623 122.221 32.1874C122.22 32.1022 122.199 32.0353 122.163 31.9827C122.124 31.933 122.072 31.9009 122.003 31.8895C121.969 31.8844 121.868 31.8832 121.699 31.8861L121.372 31.8924L121.384 32.5236Z" fill="white" />
                    <path d="M124.595 32.6202L125.027 32.6699C125.029 32.9523 124.973 33.1736 124.864 33.3365C124.754 33.5012 124.589 33.6098 124.372 33.6624C124.102 33.7288 123.856 33.6733 123.628 33.4955C123.403 33.3194 123.246 33.0398 123.154 32.6613C123.06 32.2588 123.072 31.9249 123.194 31.6608C123.316 31.3961 123.515 31.2274 123.8 31.1594C124.05 31.0993 124.27 31.1371 124.468 31.2726C124.584 31.3526 124.689 31.4835 124.781 31.6659L124.406 31.8832C124.352 31.7625 124.278 31.6745 124.183 31.6213C124.091 31.5687 123.988 31.5556 123.881 31.5824C123.731 31.6185 123.623 31.7128 123.56 31.8643C123.496 32.0158 123.499 32.2354 123.568 32.5224C123.64 32.8277 123.738 33.0318 123.862 33.1404C123.987 33.2462 124.119 33.2817 124.269 33.2462C124.378 33.2199 124.463 33.1542 124.521 33.0518C124.578 32.9506 124.603 32.8048 124.595 32.6202Z" fill="white" />
                    <path d="M125.471 32.4561L125.824 32.2337C125.915 32.3704 126.012 32.459 126.113 32.4939C126.214 32.5305 126.322 32.5207 126.438 32.4647C126.559 32.4058 126.636 32.3303 126.669 32.2389C126.702 32.148 126.698 32.0593 126.658 31.9776C126.633 31.9244 126.599 31.8861 126.557 31.8627C126.513 31.8369 126.452 31.8284 126.374 31.8324C126.321 31.8352 126.204 31.8507 126.024 31.8804C125.793 31.9181 125.614 31.9158 125.492 31.8684C125.319 31.8003 125.19 31.6774 125.105 31.5008C125.051 31.3864 125.028 31.2681 125.035 31.1428C125.042 31.0165 125.083 30.9039 125.16 30.8021C125.239 30.6997 125.349 30.614 125.495 30.5448C125.73 30.4305 125.936 30.4059 126.113 30.4739C126.291 30.5385 126.433 30.6763 126.537 30.8787L126.167 31.0788C126.095 30.9736 126.021 30.9056 125.945 30.8804C125.866 30.8553 125.774 30.8701 125.669 30.9221C125.559 30.9759 125.486 31.0434 125.449 31.1285C125.425 31.1834 125.427 31.2389 125.454 31.2961C125.479 31.3498 125.52 31.387 125.575 31.4053C125.645 31.431 125.785 31.4236 125.994 31.3858C126.203 31.3475 126.363 31.3361 126.479 31.3475C126.592 31.3607 126.699 31.4036 126.796 31.475C126.891 31.5488 126.972 31.6551 127.04 31.7958C127.1 31.925 127.128 32.0599 127.121 32.2017C127.116 32.3418 127.07 32.4664 126.987 32.5745C126.903 32.682 126.78 32.7752 126.616 32.8558C126.381 32.9707 126.166 32.9924 125.976 32.9238C125.785 32.8518 125.619 32.6985 125.471 32.4561Z" fill="white" />
                    <path d="M117.162 18.8652C117.162 14.432 120.714 10.8397 125.097 10.8397C126.119 10.8397 127.097 11.037 127.996 11.3949C126.353 10.0261 124.246 9.20398 121.95 9.20398C116.692 9.20398 112.429 13.5155 112.429 18.8344C112.429 24.1527 116.692 28.4642 121.95 28.4642C124.176 28.4642 126.224 27.6889 127.844 26.3951C126.987 26.7135 126.062 26.8902 125.097 26.8902C120.715 26.8907 117.162 23.2991 117.162 18.8652Z" fill="#ED1C24" />
                    <path d="M131.308 29.1972C131.308 29.8199 130.809 30.323 130.194 30.323C129.58 30.323 129.081 29.8199 129.081 29.1972C129.081 28.5763 129.58 28.0726 130.194 28.0726C130.809 28.0726 131.308 28.5758 131.308 29.1972Z" fill="white" />
                    <path d="M114.178 29.1972C114.178 29.8199 113.678 30.323 113.066 30.323C112.45 30.323 111.952 29.8199 111.952 29.1972C111.952 28.5763 112.45 28.0726 113.066 28.0726C113.678 28.0726 114.178 28.5758 114.178 29.1972Z" fill="white" />
                </svg>
                <button>
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.88916L5.8891 6.77826L10.7782 1.88916" stroke="#878FA7" strokeOpacity="0.43" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>
            </div>
            {/* Logout button */}
            <button className='flex items-center gap-1'>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.66667 10.6667C7.40145 10.6667 7.1471 10.772 6.95956 10.9596C6.77202 11.1471 6.66667 11.4015 6.66667 11.6667V12.2C6.66667 12.6774 6.47702 13.1352 6.13946 13.4728C5.80189 13.8104 5.34406 14 4.86667 14H3.8C3.32261 14 2.86477 13.8104 2.52721 13.4728C2.18964 13.1352 2 12.6774 2 12.2V3.8C2 3.32261 2.18964 2.86477 2.52721 2.52721C2.86477 2.18964 3.32261 2 3.8 2H4.86667C5.34406 2 5.80189 2.18964 6.13946 2.52721C6.47702 2.86477 6.66667 3.32261 6.66667 3.8V4.33333C6.66667 4.59855 6.77202 4.8529 6.95956 5.04044C7.1471 5.22798 7.40145 5.33333 7.66667 5.33333C7.93188 5.33333 8.18624 5.22798 8.37377 5.04044C8.56131 4.8529 8.66667 4.59855 8.66667 4.33333V3.8C8.66561 2.7925 8.26491 1.82657 7.5525 1.11416C6.84009 0.401755 5.87416 0.00105885 4.86667 0L3.8 0C2.7925 0.00105885 1.82657 0.401755 1.11416 1.11416C0.401755 1.82657 0.00105885 2.7925 0 3.8L0 12.2C0.00105885 13.2075 0.401755 14.1734 1.11416 14.8858C1.82657 15.5982 2.7925 15.9989 3.8 16H4.86667C5.87416 15.9989 6.84009 15.5982 7.5525 14.8858C8.26491 14.1734 8.66561 13.2075 8.66667 12.2V11.6667C8.66667 11.4015 8.56131 11.1471 8.37377 10.9596C8.18624 10.772 7.93188 10.6667 7.66667 10.6667Z" fill="#444444" />
                    <path d="M15.0405 6.34996L11.9832 3.29263C11.8903 3.19978 11.78 3.12614 11.6587 3.07591C11.5373 3.02568 11.4073 2.99985 11.2759 2.99988C11.1446 2.99991 11.0146 3.02581 10.8932 3.07609C10.7719 3.12638 10.6617 3.20007 10.5688 3.29296C10.3813 3.48056 10.276 3.73496 10.2761 4.0002C10.2761 4.13153 10.302 4.26157 10.3523 4.3829C10.4026 4.50422 10.4763 4.61445 10.5692 4.7073L12.8432 6.9813L4.6665 6.99996C4.40129 6.99996 4.14693 7.10532 3.9594 7.29286C3.77186 7.48039 3.6665 7.73475 3.6665 7.99996C3.6665 8.26518 3.77186 8.51953 3.9594 8.70707C4.14693 8.89461 4.40129 8.99996 4.6665 8.99996L12.8785 8.9813L10.5672 11.2926C10.3796 11.4801 10.2741 11.7345 10.2741 11.9997C10.274 12.265 10.3793 12.5194 10.5668 12.707C10.7543 12.8946 11.0087 13 11.2739 13C11.5392 13.0001 11.7936 12.8948 11.9812 12.7073L15.0385 9.64996C15.4756 9.2122 15.7213 8.61899 15.7216 8.00038C15.722 7.38177 15.4771 6.78825 15.0405 6.34996Z" fill="#444444" />
                </svg>
                <p className='font-medium text-[14px]'>Log out</p>
            </button>
        </div>
    );
};

export default NavBar;