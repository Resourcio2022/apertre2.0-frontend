import SignupForm from "../_components/signupForm";

const page = () => {
    const words = [
        { text: "MENTEE" },
    ];

    const inputGroups = [
        {
            fields: [
                { name: "firstName", type: "text", placeholder: "First Name", required: true },
                { name: "lastName", type: "text", placeholder: "Last Name", required: true },
            ],
        },
        {
            fields: [
                { name: "linkedinProfile", type: "text", placeholder: "LinkedIn Profile", required: true },
                { name: "Referral Code", type: "text", placeholder: "Referral Code", required: true },
            ],
        },
        {
            fields: [
                { name: "Address", type: "textarea", placeholder: "Address", required: true, classname: "h-[101px] w-full" },
            ],
        },
        {
            fields: [
                { name: "Phone Number", type: "number", placeholder: "Phone Number", required: true },
                { name: "Discord Username", type: "text", placeholder: "Discord Username", required: true },
            ],
        },
    ];

    return (
        <SignupForm
            words={words}
            inputGroups={inputGroups}
        />
    );
};

export default page;
