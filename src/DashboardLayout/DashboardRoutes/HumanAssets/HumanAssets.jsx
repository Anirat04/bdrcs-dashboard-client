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
        { value: 'Upazila Demo 1', label: 'Upazila Demo 1' },
        { value: 'Upazila Demo 2', label: 'Upazila Demo 2' },
    ]

    return (
        <div>
            <div>
                <p className='text-[20px] text-[#5C5C5C]'>Add New Member</p>
            </div>
            <div>
                <form className='bg-white max-w-screen-2xl  mx-auto p-8' onSubmit={handleSubmit(onSubmit)}>
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
                    <div className='grid grid-cols-3 gap-4 mt-5'>
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
                            <input className='w-full h-[40px] border border-[#E6E6E6] rounded-[3px]' type="number" {...register("contactNumber")} />
                        </div>
                        {/* Birth date */}
                        <div>
                            <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>8. Birth Date</p>
                            <input className='w-full h-[40px] border border-[#E6E6E6] rounded-[3px]' type="date" {...register("birthDate")} />
                        </div>
                        {/* Email Address */}
                        <div>
                            <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>9. Email</p>
                            <input className='w-full h-[40px] border border-[#E6E6E6] rounded-[3px]' type="email" {...register("email")} />
                        </div>
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
                    </div>

                    {/* 
                    <select {...register("Unit", { required: true })}>
                        <option value="National Headquaters">National Headquaters</option>
                    </select>
                    <select {...register("Affiliated Upazila")}>
                        <option value="Select Upazila">Select Upazila</option>
                    </select>
                    <input type="checkbox" placeholder="Managing Board Member" {...register("Managing Board Member", {})} />
                    <input type="checkbox" placeholder="Unit Executive Committee Member" {...register("Unit Executive Committee Member", {})} />
                    <input type="checkbox" placeholder="Chairman" {...register("Chairman", {})} />
                    <input type="number" placeholder="Member Id Card" {...register("Member Id Card", { required: true })} />
                    <input type="datetime" placeholder="Enrollment Date" {...register("Enrollment Date", {})} />
                    <input type="number" placeholder="Contact No" {...register("Contact No", {})} />
                    <input type="datetime" placeholder="Birth Date" {...register("Birth Date", {})} />
                    <input type="email" placeholder="Email" {...register("Email", {})} />
                    <input type="checkbox" placeholder="Male" {...register("Male", {})} />
                    <input type="checkbox" placeholder="Female" {...register("Female", {})} />
                    <select {...register("Blood Group")}>
                        <option value="AB Positive">AB Positive</option>
                    </select>
                    <select {...register("Religion")}>
                        <option value="Islam">Islam</option>
                    </select>
                    <input type="text" placeholder="Father's Name" {...register("FatherName", {})} />
                    <input type="text" placeholder="Mother's Name" {...register("MotherName", {})} />
                    <input type="text" placeholder="Spouse's Name" {...register("SpouseName", {})} />
                    <input type="text" placeholder="Present Address" {...register("Present Address", {})} />
                    <input type="text" placeholder="Permanent Address" {...register("Permanent Address", { required: true })} />
                    <input type="text" placeholder="Occupation" {...register("Occupation", {})} />
                    <input type="number" placeholder="National ID" {...register("National ID", {})} />
                    <input type="number" placeholder="Birth Certificate No" {...register("Birth Certificate No", {})} />
                    <input type="text" placeholder="Passport No" {...register("Passport No", {})} />
                    <input type="text" placeholder="Education" {...register("Education", {})} />
                    <input type="text" placeholder="Member Form Serial" {...register} />
                    <input type="number" placeholder="Money Receipt No." {...register("Money Receipt No.", {})} />
                    <input type="text" placeholder="Project Activities in Last 10 years" {...register("Project Activities in Last 10 years", {})} />
                    <input type="number" placeholder="Emergency Contact No" {...register("Emergency Contact No", {})} /> */}

                    <input type="submit" />
                </form>

            </div >
        </div >
    );
};

export default HumanAssets;