import SignupForm, { InputField } from "../_components/signupForm";

const page = () => {
    const words = [{ text: "MENTEE" }];

    const inputGroups = [
        {
            fields: [
                { name: "firstName", type: "text", placeholder: "First name*", required: true },
                { name: "lastName", type: "text", placeholder: "Last name*", required: true },
            ] as InputField[],
        },
        {
            fields: [
                { name: "phoneNumber", type: "tel", placeholder: "Phone number*", required: true },
                { name: "discordUsername", type: "text", placeholder: "Discord username*", required: true },
            ] as InputField[],
        },
        {
            fields: [
                { name: "address", type: "text", placeholder: "Address*", required: true },
            ] as InputField[]
        },
        {
            fields: [
                { name: "linkedinUrl", type: "url", placeholder: "LinkedIn profile URL*", required: true },
            ] as InputField[]
        },
        {
            fields: [
                { name: "twitterUsername", type: "text", placeholder: "Twitter username", required: false },
                { name: "referralCode", type: "text", placeholder: "Got any referral code?", required: false },
            ] as InputField[],
        }
    ];

    return (
        <SignupForm
            words={words}
            inputGroups={inputGroups}
        />
    );
};

export default page;
