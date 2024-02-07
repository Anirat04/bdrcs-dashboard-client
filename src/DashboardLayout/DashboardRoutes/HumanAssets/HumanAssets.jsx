import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import './HumanAssets.css'
import Select, { components } from 'react-select'


const HumanAssets = () => {
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    const DropdownIndicator = props => {
        return (
            <components.DropdownIndicator {...props}>
                <svg className='dropSVG' width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 8L0.937823 0.5L13.0622 0.499999L7 8Z" fill="#D9D9D9" />
                </svg>
            </components.DropdownIndicator>
        );
    };

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            // height: '40px',
            // width: '369px',
            // border: '1px solid #E6E6E6',
            border: 'none',
            boxShadow: state.isFocused ? null : null, // Remove the box shadow on focus
            outline: state.isFocused ? '1px solid #2AA778' : null, // Change the color here
            '&:hover': {
                outline: '1px solid #2AA778', // Change the color on hover
            },
            '&:hover .dropSVG path': {
                fill: '#2AA778'
            },
        }),
        menu: (provided, state) => ({
            ...provided,
            padding: "5px",
        }),

        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#2AA778' : 'inherit', //  background color for selected option
            color: state.isSelected ? 'white' : '#777777E5', // text color for selected option
            fontSize: '13px',
            fontWeight: state.isSelected ? '700' : '600',
            borderRadius: '5px',
            marginTop: '2px',
            '&:hover': {
                backgroundColor: state.isSelected ? '#2AA778' : '#2AA778',
                color: 'white' // background color on hover
            },
        }),

        placeholder: (provided) => ({
            ...provided,
            fontSize: '13px',
            color: 'rgba(119, 119, 119, 0.63)'
        }),

        singleValue: (provided) => ({
            ...provided,
            color: '#777777A1', // Change the color of the single value
            fontSize: '14px', // Change the font size of the single value
        }),
    };

    const prefixOption = [
        { value: 'Prefix Demo 1', label: 'Prefix Demo 1' },
        { value: 'Prefix Demo 2', label: 'Prefix Demo 2' },
        { value: 'Prefix Demo 3', label: 'Prefix Demo 3' }
    ]

    const MemberTypeOption = [
        { value: 'Life Member', label: 'Life Member' },
        { value: 'Annual Member', label: 'Annual Member' },
        { value: 'Honorary Member', label: 'Honorary Member' },
        { value: 'Institutional Member', label: 'Institutional Member' },
        { value: 'Patron Member', label: 'Patron Member' }
    ]

    const unitOption = [
        { value: 'National Headquarters', label: 'National Headquarters' },
        { value: 'Narayanganj RC Unit', label: 'Narayanganj RC Unit' },
        { value: 'Narsingdi RC Unit', label: 'Narsingdi RC Unit' },
        { value: 'Madaripur RC Unit', label: 'Madaripur RC Unit' },
    ]

    const upazilaOption = [
        { value: 'O+', label: 'Upazila Demo 1' },
        { value: 'Upazila Demo 2', label: 'Upazila Demo 2' },
    ]

    const BloodGroupOption = [
        { value: 'O positive', label: 'O positive' },
        { value: 'O negative', label: 'O negative' },
        { value: 'A positive', label: 'A positive' },
        { value: 'A negative', label: 'A negative' },
        { value: 'B positive', label: 'B positive' },
        { value: 'B negative', label: 'B negative' },
        { value: 'AB positive', label: 'AB positive' },
        { value: 'AB negative', label: 'AB negative' },
    ]

    const ReligionOption = [
        { value: 'Islam', label: 'Islam' },
        { value: 'Hindu', label: 'Hindu' },
        { value: 'Christian', label: 'Christian' },
        { value: 'Buddhism', label: 'Buddhism' },
    ]



    return (
        <div>
            <div>
                <p className='text-[20px] text-[#5C5C5C] ml-[26px] py-3'>Add New Member</p>
            </div>
            <div>
                <form className='bg-white max-w-screen-2xl  mx-auto p-8 pb-24 mb-8 rounded-[5px]' onSubmit={handleSubmit(onSubmit)}>
                    {/* First row of desktop view */}
                    <div className='flex gap-5'>
                        {/* Prefix select */}
                        <div>
                            <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>Prefix</p>
                            <Controller
                                name="Prefix"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Select
                                        className='custom-select w-[369px] h-[40px] border border-[#E6E6E6] rounded-[3px]'
                                        components={{ DropdownIndicator }}
                                        options={prefixOption}
                                        placeholder="Select Prefix"
                                        styles={customStyles}
                                        onChange={(selectedOption) => {
                                            field.onChange(selectedOption.value); // Pass only the value to react-hook-form
                                        }}
                                    />
                                )}
                            />
                        </div>
                        {/* Name field */}
                        <div>
                            <div className='relative w-fit'>
                                <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>1. Name</p>
                                <span className='text-[20px] text-[#FF000A] absolute -top-1 -right-3'>*</span>
                            </div>
                            <input className='w-[477px] h-[40px] border border-[#E6E6E6] rounded-[3px]' type="text" placeholder="Name" {...register("Name", { required: true })} />
                        </div>
                        {/* Is Alive checkbox */}
                        <div className='flex items-center h-[41px] pt-[43px]'>
                            <label className="b-contain">
                                <input className='' type="checkbox" placeholder="Is Alive" {...register("Is_Alive", {})} />
                                <div className="b-input min-w-[26.93px] min-h-[27.96px]"></div>
                            </label>
                            <span className='text-[#777777] text-[16px] ml-8 mt-2'>Is Alive</span>
                        </div>
                        {/* Member type select area */}
                        <div>
                            <div className='relative w-fit'>
                                <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>2. Member Type</p>
                                <span className='text-[20px] text-[#FF000A] absolute -top-1 -right-3'>*</span>
                            </div>
                            <Controller
                                name="MemberType"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Select
                                        className='custom-select w-[477px] h-[40px] border border-[#E6E6E6] rounded-[3px]'
                                        components={{ DropdownIndicator }}
                                        options={MemberTypeOption}
                                        placeholder="Select Member Type"
                                        styles={customStyles}
                                        onChange={(selectedOption) => {
                                            field.onChange(selectedOption.value); // Pass only the value to react-hook-form
                                        }}
                                    />
                                )}
                            />
                        </div>
                    </div>
                    {/* Second Row */}
                    <div className='mt-5 flex gap-6'>
                        {/* First column according to the desktop view */}
                        <div>
                            <div className='flex items-end gap-4 mb-3'>
                                {/* Unit select field */}
                                <div>
                                    <div className='relative w-fit'>
                                        <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>3. Unit</p>
                                        <span className='text-[20px] text-[#FF000A] absolute -top-1 -right-3'>*</span>
                                    </div>
                                    <Controller
                                        name="unit"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <Select
                                                className='custom-select  w-[476px] h-[40px] border border-[#E6E6E6] rounded-[3px]'
                                                components={{ DropdownIndicator }}
                                                options={unitOption}
                                                placeholder="Select Unit"
                                                styles={customStyles}
                                                onChange={(selectedOption) => {
                                                    field.onChange(selectedOption.value); // Pass only the value to react-hook-form
                                                }}
                                            />
                                        )}
                                    />
                                </div>
                                {/* Affiliated Upazila select field */}
                                <div className='flex items-center gap-4'>
                                    <h3 className='text-[#444444] text-[15px]'>Affiliated Upazila</h3>
                                    <Controller
                                        name="affiliated_upazila"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <Select
                                                className='custom-select w-[337px] h-[40px] border border-[#E6E6E6] rounded-[3px]'
                                                components={{ DropdownIndicator }}
                                                options={upazilaOption}
                                                placeholder="Select Upazila"
                                                styles={customStyles}
                                                onChange={(selectedOption) => {
                                                    field.onChange(selectedOption.value); // Pass only the value to react-hook-form
                                                }}
                                            />
                                        )}
                                    />
                                </div>
                            </div>
                            {/* Three checkbox section */}
                            <div className='mb-3 flex gap-10'>
                                <div className='flex items-center h-[41px]'>
                                    <label className="b-contain">
                                        <input className='' type="checkbox" placeholder="Is Alive" {...register("managingBoardMember", {})} />
                                        <div className="b-input min-w-[26.93px] min-h-[27.96px]"></div>
                                    </label>
                                    <span className='text-[#777777] text-[16px] ml-9 mt-2'>Managing Board Member</span>
                                </div>
                                <div className='flex items-center h-[41px]'>
                                    <label className="b-contain">
                                        <input className='' type="checkbox" placeholder="Is Alive" {...register("unitExecutiveCommitteMemberr", {})} />
                                        <div className="b-input min-w-[26.93px] min-h-[27.96px]"></div>
                                    </label>
                                    <span className='text-[#777777] text-[16px] ml-9 mt-2'>Unit Executive Committee Member</span>
                                </div>
                                <div className='flex items-center h-[41px]'>
                                    <label className="b-contain">
                                        <input className='' type="checkbox" placeholder="Is Alive" {...register("chairman", {})} />
                                        <div className="b-input min-w-[26.93px] min-h-[27.96px]"></div>
                                    </label>
                                    <span className='text-[#777777] text-[16px] ml-9 mt-2'>Chairman</span>
                                </div>
                            </div>
                        </div>
                        {/* second column according to the desktop view */}
                        <div>
                            <div className='relative w-fit'>
                                <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>3. Unit</p>
                                <span className='text-[20px] text-[#FF000A] absolute -top-1 -right-3'>*</span>
                            </div>
                            <div className='w-[476px] h-[129px] border border-[#E6E6E6] rounded-[3px]'>

                            </div>
                        </div>
                    </div>
                    {/* grid section starts here */}
                    <div className='grid grid-cols-3 gap-y-6 gap-x-5 mt-5'>
                        {/* Member ID Card */}
                        <div>
                            <div className='relative w-fit'>
                                <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>5. Member Id Card</p>
                                <span className='text-[20px] text-[#FF000A] absolute -top-1 -right-3'>*</span>
                            </div>
                            <input className='w-full h-[40px] border border-[#E6E6E6] rounded-[3px]' type="text" {...register("memberIdCard", { required: true })} />
                        </div>
                        {/* Enrollment date */}
                        <div>
                            <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>6. Enrollment Date</p>
                            <input className='w-full h-[40px] border border-[#E6E6E6] rounded-[3px]' type="date" {...register("enrollmentDate")} />
                        </div>
                        {/* Contact Number */}
                        <div>
                            <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>7. Contact No</p>
                            <input className='w-full h-[40px] border border-[#E6E6E6] rounded-[3px]' type="text" {...register("contactNumber")} />
                        </div>
                        {/*8. Birth date */}
                        <div>
                            <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>8. Birth Date</p>
                            <input className='w-full h-[40px] border border-[#E6E6E6] rounded-[3px]' type="date" {...register("birthDate")} />
                        </div>
                        {/*9. Email Address */}
                        <div>
                            <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>9. Email</p>
                            <input className='w-full h-[40px] border border-[#E6E6E6] rounded-[3px]' type="email" {...register("email")} />
                        </div>
                        {/*10. Gender checkbox*/}
                        <div>
                            <div className='relative w-fit'>
                                <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>10. Gender</p>
                                <span className='text-[20px] text-[#FF000A] absolute -top-1 -right-3'>*</span>
                            </div>
                            <div className='flex gap-16'>
                                <div className='flex items-center h-[41px]'>
                                    <label className="b-contain">
                                        <input className='' type="checkbox"  {...register("male", {})} />
                                        <div className="b-input min-w-[26.93px] min-h-[27.96px]"></div>
                                    </label>
                                    <span className='text-[#777777] text-[16px] ml-9 mt-2'>Male</span>
                                </div>
                                <div className='flex items-center h-[41px]'>
                                    <label className="b-contain">
                                        <input className='' type="checkbox" {...register("female", {})} />
                                        <div className="b-input min-w-[26.93px] min-h-[27.96px]"></div>
                                    </label>
                                    <span className='text-[#777777] text-[16px] ml-9 mt-2'>Female</span>
                                </div>
                            </div>
                        </div>
                        {/* 11. Blood Group */}
                        <div>
                            <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>11. BloodGroup</p>
                            <Controller
                                name="BloodGroup"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Select
                                        className='custom-select  w-full h-[40px] border border-[#E6E6E6] rounded-[3px]'
                                        components={{ DropdownIndicator }}
                                        options={BloodGroupOption}
                                        placeholder="Select Blood Group"
                                        styles={customStyles}
                                        onChange={(selectedOption) => {
                                            field.onChange(selectedOption.value); // Pass only the value to react-hook-form
                                        }}
                                    />
                                )}
                            />
                        </div>
                        {/* 12. Religion */}
                        <div>
                            <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>12. Religion</p>
                            <Controller
                                name="Religion"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Select
                                        className='custom-select  w-full h-[40px] border border-[#E6E6E6] rounded-[3px]'
                                        components={{ DropdownIndicator }}
                                        options={ReligionOption}
                                        placeholder="Select Religion"
                                        styles={customStyles}
                                        onChange={(selectedOption) => {
                                            field.onChange(selectedOption.value); // Pass only the value to react-hook-form
                                        }}
                                    />
                                )}
                            />
                        </div>
                        {/* 13. Father's Name */}
                        <div>
                            <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>13. Father's Name</p>
                            <input className='w-full h-[40px] border border-[#E6E6E6] rounded-[3px]' type="text" {...register("FatherName")} />
                        </div>
                        {/* 14. Mother's Name */}
                        <div>
                            <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>14. Mother's Name</p>
                            <input className='w-full h-[40px] border border-[#E6E6E6] rounded-[3px]' type="text" {...register("MotherName")} />
                        </div>
                        {/* 15. Spouse's Name */}
                        <div>
                            <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>15. Spouse's Name</p>
                            <input className='w-full h-[40px] border border-[#E6E6E6] rounded-[3px]' type="text" {...register("SpouseName")} />
                        </div>
                        {/* 16. Present Address */}
                        <div>
                            <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>16. Present Address</p>
                            <input className='w-full h-[40px] border border-[#E6E6E6] rounded-[3px]' type="text" {...register("PresentAddress")} />
                        </div>
                        {/* 17. Permanent Address Required */}
                        <div>
                            <div className='relative w-fit'>
                                <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>17. Permanent Addressd</p>
                                <span className='text-[20px] text-[#FF000A] absolute -top-1 -right-3'>*</span>
                            </div>
                            <input className='w-full h-[40px] border border-[#E6E6E6] rounded-[3px]' type="text" {...register("PermanentAddress", { required: true })} />
                        </div>
                        {/* 18. Occupation */}
                        <div>
                            <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>18. Occupation</p>
                            <input className='w-full h-[40px] border border-[#E6E6E6] rounded-[3px]' type="text" {...register("Occupation")} />
                        </div>
                        {/* 19. National ID */}
                        <div>
                            <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>19. National ID</p>
                            <input className='w-full h-[40px] border border-[#E6E6E6] rounded-[3px]' type="text" {...register("NID")} />
                        </div>
                        {/* 20. Birth Certificate No */}
                        <div>
                            <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>20. Birth Certificate No</p>
                            <input className='w-full h-[40px] border border-[#E6E6E6] rounded-[3px]' type="text" {...register("birth_certificate_number")} />
                        </div>
                        {/* 21. Passport No */}
                        <div>
                            <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>21. Passport No</p>
                            <input className='w-full h-[40px] border border-[#E6E6E6] rounded-[3px]' type="text" {...register("passport_num")} />
                        </div>
                        {/* 22. Education */}
                        <div>
                            <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>22. Education</p>
                            <input className='w-full h-[40px] border border-[#E6E6E6] rounded-[3px]' type="text" {...register("education")} />
                        </div>
                        {/* 23. Member Form Serial */}
                        <div>
                            <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>23. Member Form Serial</p>
                            <input className='w-full h-[40px] border border-[#E6E6E6] rounded-[3px]' type="text" {...register("member_form_serial")} />
                        </div>
                        {/* 24. Money Receipt No. */}
                        <div>
                            <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>24. Money Receipt No.</p>
                            <input className='w-full h-[40px] border border-[#E6E6E6] rounded-[3px]' type="text" {...register("member_form_serial")} />
                        </div>
                        {/* 25. Project Activities in Last 10 years */}
                        <div>
                            <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>25. Project Activities in Last 10 years</p>
                            <input className='w-full h-[40px] border border-[#E6E6E6] rounded-[3px]' type="text" {...register("member_form_serial")} />
                        </div>
                    </div>
                    {/* last row with flex */}
                    <div className='flex justify-between mt-6'>
                        {/* 26. Emergency Contact No */}
                        <div>
                            <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>26. Emergency Contact No</p>
                            <input className='w-[476px] h-[40px] border border-[#E6E6E6] rounded-[3px]' type="text" {...register("emergency_contact")} />
                        </div>
                        <div className='flex gap-6 mt-3'>
                            <button className='bg-[#2AA778] w-[132px] h-[36px] rounded-[3px]'>
                                <input className='px-0 text-[15px] font-bold text-white' value='Save' type="submit" />
                            </button>
                            <button className='bg-[#878FA7] w-[132px] h-[36px] rounded-[3px]'>
                                <input className='px-0 text-[15px] font-bold text-white' value='Cancel' type="reset" />
                            </button>
                        </div>
                    </div>
                </form>

            </div >
        </div >
    );
};

export default HumanAssets;